export type Time = number;

export type LineKind =
    | "A"
    | "113B"
    | "C"
    | "101D"
    | "101E"
    | "F"
    | "113G"
    | "101H"
    | "109L"
    | "117N"
    | "107R"
    | "120W"
    | "bus";

export type ServiceDay = "weekday" | "saturday" | "sunday";
export type ServiceRegime = "baseline" | "current";

export type TripsPerHour = readonly number[] & { length: 24 };

export type ServiceLevels = {
    cancelled: boolean;
    tripsPerHour?: TripsPerHour;
    totalTrips: number;
};

export type LineData = {
    id: string;
    shortName: string;
    longName: string;
    totalTrips: number;
    serviceFraction: number;
    routeId: string;
    ridershipHistory: null | number[];
    serviceHistory: number[];
    lineKind: LineKind;
    serviceRegimes: Record<ServiceRegime, Record<ServiceDay, ServiceLevels>>;
    startDate: string;
};

export type SummaryData = {
    totalRidershipHistory: null | number[];
    totalServiceHistory: null | number[];
    totalRidershipPercentage: number;
    totalServicePercentage: number;
    totalPassengers: number;
    totalTrips: number;
    totalRoutesCancelled: number;
    totalReducedService: number;
    totalIncreasedService: number;
    startDate: string;
    endDate: string;
};
