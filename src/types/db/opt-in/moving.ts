import { Document } from "../../document";
import { Vehicle } from "../../vehicle";

export enum Equipment {
    Straps = 1 << 0,        // 1 (000001)
    Dolly = 1 << 1,         // 2 (000010)
    Blankets = 1 << 2,      // 4 (000100)
    StairClimber = 1 << 3,  // 8 (001000)
    Ramp = 1 << 4,          // 16(010000)
    Tools = 1 << 5          // 32(100000)
}

export enum SpecialServices {
    None = 0,
    Piano = 1 << 0,
    Antique = 1 << 1,
    ITEquipment = 1 << 2,
    Disassembly = 1 << 3,
    Assembly = 1 << 4,
    Packing = 1 << 5,
    SafePacking = 1 << 6,
    GoodsInsuranceCoversProvidersFault = 1 << 7,
    GoodsInsuranceCoversAllRisks = 1 << 8,
}

export type MovingOptIn = {
    readonly _id: string;
    readonly vehicles: Vehicle[];
    readonly teamSizeMin: number;
    readonly teamSizeMax: number;
    readonly equipment: number;
    readonly specialServices: number;
    readonly baseAddress: string;
    readonly baseLocation: {
        readonly type: "Point";
        readonly coordinates: [number, number]; // [lng, lat]
    };
    readonly areaOfActivity: {
        readonly radiusKm: number;
    };
    readonly documents: {
        readonly drivingLicenses: Document[];
        readonly vehicleRegistrations: Document[];
        readonly goodsInsurance?: Document;
    };
    readonly pricing: {
        readonly baseFee: number;               // "Deployment" cost (covers gas/prep)
        readonly hourlyRatePerPerson: number;   // Scalable based on teamSize
        readonly kmRate: number;                // For distances > 10km
        readonly floorRateNoElevator: number;   // Price per floor/per person
        readonly heavyItemFlatFee: number;      // e.g., Piano/Safe (e.g. 200 RON)
        readonly disassemblyHourlyRate: number;
        readonly packingMaterialMarkup: number; // % or flat fee for boxes/wrap
        readonly minimumBookingValue: number;   // e.g., 300 RON total
    };
    readonly cancellationPolicy: {
        readonly freeCancellationNoticeInHours: number; // e.g., 24
        readonly penaltyFee?: number; // Flat fee or %
    };
}