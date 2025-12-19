export type DatabaseEntity = {
  readonly _id: string;
};

export type StampedEntity = DatabaseEntity & {
  readonly creationDate: Date;
  lastUpdateDate: Date;
};