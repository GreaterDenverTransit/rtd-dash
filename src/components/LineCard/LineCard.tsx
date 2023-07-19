import React, { useMemo, useState } from "react";
import classNames from "classnames";
import { TiCancel } from "react-icons/ti";

import { LineData, ServiceDay } from "types";
import { CardFrame, TabPicker } from "components";

import { lineKindColors } from "./colors";
import TphChart from "./TphChart";
import ServiceRidershipChart from "./ServiceRidershipChart";

import styles from "./LineCard.module.scss";

type Props = {
    lineData: LineData;
    rtd_ridership: object;
};

const serviceDayItems = [
    { value: "weekday", label: "Weekdays" },
    { value: "saturday", label: "Saturday" },
    { value: "sunday", label: "Sunday" },
];

const getHighestTphValue = (lineData: LineData) => {
    let max = 0;
    Object.entries(lineData.serviceRegimes).forEach(([key, regime]) => {
        if (key === "baseline" || key === "current") {
            Object.values(regime).forEach((serviceLevel) => {
                if (serviceLevel.tripsPerHour) {
                    max = Math.max(max, ...serviceLevel.tripsPerHour);
                }
            });
        }
    });
    return max;
};

const LineCard = (props: Props) => {
    const { lineData, rtd_ridership } = props;
    const {
        id,
        lineKind,
        serviceHistory,
        serviceRegimes,
        startDate: startDateString,
        shortName,
        longName,
    } = lineData;

    const color = lineKindColors[lineKind] || "black";
    const [serviceDay, setServiceDay] = useState<ServiceDay>("weekday");
    const highestTph = useMemo(() => getHighestTphValue(lineData), [lineData]);
    const startDate = useMemo(() => new Date(startDateString), [startDateString]);
    const title = shortName || longName;

    const ridershipAndFrequencyLabel = rtd_ridership[shortName]
        ? "Service and ridership over time"
        : "Service over time (ridership not available)";

    const renderSectionLabel = (title: string, rightElement: React.ReactNode = null) => {
        return (
            <h3 className={styles.sectionLabel}>
                <div className="label">{title}</div>
                {rightElement}
            </h3>
        );
    };

    const renderDetails = () => {
        return null;
    };

    const renderStatusBadge = () => {
        const { current, baseline } = serviceRegimes;
        if (current.weekday.totalTrips === 0) {
            return (
                <div className={classNames(styles.statusBadge, "bad")}>
                    <TiCancel size={20} />
                    Canceled
                </div>
            );
        } else if (current.saturday.totalTrips === 0 && baseline.saturday.totalTrips > 0) {
            return (
                <div className={classNames(styles.statusBadge, "warning")}>
                    <TiCancel size={20} />
                    Weekends
                </div>
            );
        }
    };

    const tabs = (
        <TabPicker
            className={styles.tabs}
            value={serviceDay}
            items={serviceDayItems}
            onSelectValue={(d) => setServiceDay(d as any)}
            baseId={`line-day-selector-${id}`}
            aria-label="Select day of service"
        />
    );

    return (
        <CardFrame title={title} topRight={renderStatusBadge()} details={renderDetails()}>
            {renderSectionLabel("Service per hour", tabs)}
            <TphChart
                lineTitle={`${title}, ${serviceDay}`}
                baselineTph={serviceRegimes.baseline[serviceDay].tripsPerHour}
                currentTph={serviceRegimes.current[serviceDay].tripsPerHour}
                color={color}
                highestTph={highestTph}
            />
            {renderSectionLabel(ridershipAndFrequencyLabel)}
            <ServiceRidershipChart
                lineId={lineData.id}
                lineTitle={`${title}, ${serviceDay}`}
                startDate={startDate}
                serviceHistory={serviceHistory}
                color={color}
                rtd_ridership={rtd_ridership}
            />
        </CardFrame>
    );
};

export default LineCard;
