import { LineData } from "types";

const colorLines = [
    "A",
    "113B",
    "C",
    "101D",
    "101E",
    "F",
    "113G",
    "101H",
    "109L",
    "117N",
    "107R",
    "120W",
];

const kind = (line: LineData) => {
    const i = colorLines.indexOf(line.lineKind);
    if (i !== -1) {
        return i;
    }
    const res = 300 + parseInt(line.routeId);
    if (Number.isNaN(res)) {
        return Infinity;
    }
    return res;
};

// const isCancelled = (r: LineData) => r.serviceRegimes.current.weekday.cancelled;

const lowestServiceFraction = (r: LineData) => r.serviceFraction;
const highestServiceFraction = (r: LineData) => -r.serviceFraction;

const lowestTotalTrips = (r: LineData) => r.totalTrips;
const highestTotalTrips = (r: LineData) => -r.totalTrips;

// const highestRidershipFraction = (r: LineData) => {
//     const { ridershipHistory } = r;
//     if (ridershipHistory && !isCancelled(r)) {
//         return ridershipHistory[0] / ridershipHistory[ridershipHistory.length - 1];
//     }
//     return Infinity;
// };

// const lowestRidershipFraction = (r: LineData) => {
//     const { ridershipHistory } = r;
//     if (ridershipHistory && !isCancelled(r)) {
//         return -highestRidershipFraction(r);
//     }
//     return Infinity;
// };

// const lowestTotalRidership = (r: LineData) => {
//     const { ridershipHistory } = r;
//     if (ridershipHistory && !isCancelled(r)) {
//         return ridershipHistory[ridershipHistory.length - 1];
//     }
//     return Infinity;
// };

// const highestTotalRidership = (r: LineData) => {
//     const { ridershipHistory } = r;
//     if (ridershipHistory && !isCancelled(r)) {
//         return -lowestTotalRidership(r);
//     }
//     return Infinity;
// };

export const sortFunctions = {
    kind,
    lowestServiceFraction,
    highestServiceFraction,
    lowestTotalTrips,
    highestTotalTrips,
    // lowestRidershipFraction,
    // highestRidershipFraction,
    // lowestTotalRidership,
    // highestTotalRidership,
};

export type SortFn = (r: LineData) => number;
export type Sort = keyof typeof sortFunctions;
