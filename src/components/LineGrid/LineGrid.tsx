import React, { useMemo, useState } from "react";
import classNames from "classnames";

import { LineCard } from "components";
import { LineData, SummaryData } from "types";
import Image from "next/image";

import { useInfiniteScroll } from "./useInfiniteScroll";
import { sortFunctions, Sort, SortFn } from "./sorting";

import styles from "./LineGrid.module.scss";

type Props = {
    rtd_ridership: object;
    lineData: Record<string, LineData>;
    summaryData: SummaryData;
    filter?: (r: LineData) => boolean;
};

type LineKindOption = "all" | "bus" | "rail";
type DisplayOption = "grid" | "rows";

const pagination = 12;
const defaultFilter = (x) => !!x;

const getDocumentElement = () => {
    if (typeof document !== "undefined") {
        return document.documentElement;
    }
    return null;
};

const sortOnKey = (data: LineData[], sortFn: SortFn) => {
    const keys = {};
    data.forEach((line) => {
        keys[line.id] = sortFn(line);
    });
    return data.sort((a, b) => {
        const ka = keys[a.id];
        const kb = keys[b.id];
        if (ka === kb) {
            return 0;
        } else {
            return ka > kb ? 1 : -1;
        }
    });
};

const matchesQuery = (lineData: LineData, query: string) => {
    const { id } = lineData;
    const title = lineData.shortName || lineData.longName;
    return !query || title?.toLowerCase().includes(query) || id.toLowerCase().includes(query);
};

const matchesLineKindOption = (lineData: LineData, option: LineKindOption) => {
    const { lineKind } = lineData;
    if (option === "all") {
        return true;
    } else if (option === "bus") {
        return lineKind === option;
    } else if (option === "rail" && lineKind !== "bus") return true;
    return false;
};

const LineGrid = (props: Props) => {
    const { lineData: lineData, summaryData, rtd_ridership, filter = defaultFilter } = props;
    const [limit, setLimit] = useState(pagination);
    const [query, setQuery] = useState("");
    const [sort, setSort] = useState<Sort | "">("");
    const [display, setDisplay] = useState<DisplayOption>("grid");
    const [kindOption, setKindOption] = useState<LineKindOption>("all");

    const availableItems = useMemo(() => {
        return sortOnKey(
            Object.values(lineData).filter(
                (lineData) =>
                    filter(lineData) &&
                    matchesQuery(lineData, query) &&
                    matchesLineKindOption(lineData, kindOption)
            ),
            sortFunctions[sort || "kind"]
        );
    }, [lineData, filter, query, kindOption, sort]);
    const shownItems = useMemo(() => availableItems.slice(0, limit), [availableItems, limit]);

    useInfiniteScroll({
        element: getDocumentElement(),
        enabled: limit < availableItems.length,
        scrollTolerance: 300,
        onRequestMoreItems: () => setLimit((l) => l + pagination),
    });

    const renderLineKindDropdown = () => {
        return (
            <select
                className={styles.select}
                value={kindOption}
                onChange={(e) => {
                    const nextKindOption = e.target.value as LineKindOption;
                    setKindOption(nextKindOption);
                    setLimit(pagination);
                }}
            >
                <option value="all">All lines</option>
                <option value="bus">Bus</option>
                <option value="rail">Rail</option>
            </select>
        );
    };

    const renderSortDropdown = () => {
        return (
            <select
                className={classNames(styles.select, sort === "kind" && "default")}
                value={sort}
                onChange={(e) => {
                    setSort(e.target.value as Sort);
                    setLimit(pagination);
                }}
            >
                <option value="" disabled>
                    Sort by...
                </option>
                <option value="kind">Service kind</option>
                <option value="highestServiceFraction">Least service cut</option>
                <option value="lowestServiceFraction">Most service cut</option>
                <option value="lowestTotalTrips">Least service</option>
                <option value="highestTotalTrips">Most service</option>
                <option value="lowestRidershipFraction">Least ridership retained</option>
                <option value="highestRidershipFraction">Most ridership retained</option>
                <option value="lowestTotalRidership">Least ridership</option>
                <option value="highestTotalRidership">Most ridership</option>
            </select>
        );
    };

    const renderDisplayDropdown = () => {
        return (
            <select
                value={display}
                className={classNames(styles.select, styles.displaySelect)}
                onChange={(e) => setDisplay(e.target.value as DisplayOption)}
            >
                <option value="grid">Show grid</option>
                <option value="rows">Show rows</option>
            </select>
        );
    };

    return (
        <>
            <div className={styles.header}>
                <a href="https://www.greaterdenvertransit.com/">
                    <Image
                        src="/gdt.png"
                        className={styles.logo}
                        height={20}
                        width={20}
                        alt={"Greater Denver Transit Logo"}
                    />
                </a>
                <h1>RTD Service & Ridership Tracker</h1>
                <div className={styles.links}>
                    <span>Data through {summaryData.endDate}</span>
                    <a href="https://www.greaterdenvertransit.com/">Greater Denver Transit</a>
                    <a href="https://github.com/mathcolo/rtd-dash">Source code</a>
                    <a href="mailto:greaterdenvertransit@gmail.com?subject=Dashboard Feedback">
                        Send feedback
                    </a>
                </div>
            </div>
            <div className={styles.controls}>
                <input
                    placeholder="Filter lines"
                    className={styles.filter}
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value.toLowerCase().trim());
                        setLimit(pagination);
                    }}
                />
                {renderDisplayDropdown()}
                {renderLineKindDropdown()}
                {renderSortDropdown()}
            </div>
            <div className={classNames(styles.lineGrid, display)}>
                {shownItems.map((item) => (
                    <LineCard lineData={item} key={item.id} rtd_ridership={rtd_ridership} />
                ))}
            </div>
        </>
    );
};

export default LineGrid;
