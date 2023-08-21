import React, { useEffect, useMemo, useRef } from "react";
import Chart, { ChartDataSets } from "chart.js";
import Color from "chartjs-color";
import pattern from "patternomaly";
import memoize from "fast-memoize";
import { LineData } from "types";
import styles from "./LineCard.module.scss";

type Props = {
    rtd_ridership: object;
    serviceHistory: LineData["serviceHistory"];
    color: string;
    startDate: Date;
    lineTitle: string;
    lineId: string;
};

const dateFormatter = new Intl.DateTimeFormat("en-US");

const normalizeToPercent = (timeSeries: number[]) => {
    // const firstValue = timeSeries[0];
    const max = Math.max(...timeSeries);
    return timeSeries.map((n) => Math.round((n / max) * 10) / 10);
};

const asPercentString = (p: number) => Math.round(100 * p).toString() + "%";

export const getChartLabels = memoize(
    (startDate: Date) => {
        const now = Date.now();
        const dateStrings: string[] = [];
        const timestamps: number[] = [];
        let time = startDate.valueOf();
        do {
            dateStrings.push(dateFormatter.format(time));
            timestamps.push(time);
            time += 86400 * 1000;
        } while (time <= now);
        return { timestamps, dateStrings };
    },
    { serializer: (d) => d.valueOf().toString() }
);

const ServiceRidershipChart = (props: Props) => {
    const { color, serviceHistory, startDate, lineTitle, lineId, rtd_ridership } = props;
    const canvasRef = useRef<null | HTMLCanvasElement>(null);

    const line_name = lineTitle.split(",")[0].trim();
    let ridership = rtd_ridership[line_name];
    let peak_value;
    if (ridership !== undefined) {
        peak_value = ridership.reduce((a, b) => (a.riders > b.riders ? a : b)).riders;

        ridership = ridership.map((item) => ({
            x: item.date,
            y: item.riders ? item.riders / peak_value : "NaN",
        }));
    }

    // const ridershipPercentage = useMemo(
    //     () => ridershipHistory && normalizeToPercent(ridershipHistory),
    //     [ridershipHistory]
    // );
    const servicePercentage = useMemo(
        () => serviceHistory && normalizeToPercent(serviceHistory),
        [serviceHistory]
    );
    const { timestamps } = useMemo(() => getChartLabels(startDate), [startDate]);
    useEffect(() => {
        const alphaColor = Color(color).alpha(0.8).rgbString();
        const ctx = canvasRef.current!.getContext("2d");

        const datasets: (ChartDataSets & { actual: number[]; unit: string })[] = [
            ridership && {
                label: "Ridership",
                actual: ridership.map((item) => item.riders),
                unit: "monthly riders",
                data: ridership,
                borderColor: color,
                backgroundColor: alphaColor,
                borderWidth: 2,
                spanGaps: false,
            },
            {
                label: "Service levels",
                actual: serviceHistory,
                unit: "weekday trips per direction",
                data: servicePercentage,
                borderColor: alphaColor,
                backgroundColor: pattern.draw("diagonal", "rgba(0,0,0,0)", color, 5),
                borderWidth: 2,
            },
        ].filter((x) => x);
        const chart = new Chart(ctx, {
            type: "line",
            data: {
                datasets,
                labels: timestamps,
            },
            options: {
                maintainAspectRatio: false,
                animation: { duration: 0 },
                scales: {
                    xAxes: [
                        {
                            gridLines: { display: false },
                            type: "time",
                            ticks: {
                                min: "2019-10-15",
                            },
                            time: {
                                unit: "month",
                                displayFormats: {
                                    month: "MMM 'YY",
                                },
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                                stepSize: 0.2,
                                maxTicksLimit: 6,
                                callback: asPercentString,
                            },
                            gridLines: { display: false },
                        },
                    ],
                },
                elements: {
                    point: { radius: 0 },
                    line: { tension: 0 },
                },
                legend: {
                    position: "top",
                    align: "end",
                    labels: {
                        boxWidth: 15,
                    },
                },
                tooltips: {
                    mode: "index",
                    intersect: false,
                    // callbacks: {
                    //     title: ([{ index }]) => {
                    //         return dateFormatter.format(timestamps[index]);
                    //     },
                    //     label: ({ datasetIndex, index, value }) => {
                    //         const { label, unit } = datasets[datasetIndex];
                    //         const valuePercent = Math.round(parseFloat(value) * 100);
                    //         return `${label}: ${unit} (${valuePercent}%)`;
                    //     },
                    // },
                },
            },
        });
        return () => chart.destroy();
    }, [ridership, servicePercentage, lineId]);

    return (
        <div className={styles.serviceAndRidershipChartContainer}>
            <canvas className={styles.serviceAndRidershipChart} ref={canvasRef} />
        </div>
    );
};

export default ServiceRidershipChart;
