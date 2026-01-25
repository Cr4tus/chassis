export enum DocumentType {
    // Identity: 1-19 (reserved)
    IdentityCard = 1,

    // Vehicle: 20-39 (reserved)
    DrivingLicense = 20,
    VehicleRegistration = 21,
    VehicleInsurance = 22,
}

export enum DocumentStatus {
    Pending = 1,
    Approved = 2,
    Rejected = 3,
}

export type Document = {
    readonly s3URI: string;
    readonly status: DocumentStatus;
    readonly feedback?: string;
    readonly expirationDate: Date;
    readonly lastUpdateDate: Date;
}