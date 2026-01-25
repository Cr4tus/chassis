export enum VehicleType {
    // 1-9: Micro & Personal
    Bicycle = 1,
    Motorcycle = 2,
    Scooter = 3,

    // 10-29: Passenger Cars
    CarSedan = 10,
    CarAvant = 11,
    CarCoupe = 12,
    CarHatchback = 13,
    CarCrossover = 14,
    CarSUV = 15,
    CarMPV = 16,        // Multi-purpose vehicle / Minivan
    CarConvertible = 17,

    // 30-49: Vans (Expanded)
    VanSmall = 30,      // e.g., Dacia Dokker, Renault Kangoo
    VanMedium = 31,     // e.g., VW Transporter, Ford Transit Custom
    VanLarge = 32,      // e.g., Mercedes Sprinter, Fiat Ducato
    VanExtraLarge = 33, // L4/H3 High roof variants
    VanLuton = 34,      // Box van often with tail-lift (popular for moving)

    // 50-69: Heavy Logistics
    TruckLight = 50,    // Under 3.5T (Campionas)
    TruckHeavy = 51,    // Over 3.5T (Camion)
    TruckArticulated = 52, // TIR / Semi-truck

    // 99: Special
    Special = 99,        // Tow trucks, cranes, refrigeration units, etc.
}

export enum VehicleColor {
    // 10-19: Greyscale (The most common ~80% of cars)
    White = 10,
    Black = 11,
    Gray = 12,
    Silver = 13,

    // 20-39: Chromatic (Standard Colors)
    Blue = 20,
    Red = 21,
    Green = 22,
    Yellow = 23,
    Orange = 24,
    Brown = 25,
    Beige = 26,
    Purple = 27,
    Gold = 28,

    // 99: Other
    Unknown = 99
}

export type Vehicle = {
    readonly type: VehicleType;
    readonly make: string;
    readonly model: string;
    readonly plates: string;
    readonly colour: VehicleColor;
    readonly dimensions: {
        readonly exterior: {
            readonly width: number;
            readonly length: number;
            readonly height: number;
        }
        readonly cargo: {
            readonly length: number;             // From back door to cabin wall
            readonly width: number;              // Floor width
            readonly widthBetweenWheels: number; // Important! Wheels arches often narrow the floor
            readonly height: number;             // Floor to ceiling (Clear height)
            readonly loadingHeight: number;      // Distance from ground to floor (Sill height)
            readonly volumeM3: number;           // Total internal volume
        }
    }
}