import type { StampedEntity } from "./core";

export type Client = StampedEntity & {
  readonly firstName: string;
  readonly lastName: string;
  email: string;
  phoneNumber: string;
  passwordHash: string;

  hasVerifiedEmail?: boolean;
  hasVerifiedPhone?: boolean;
};

export type Provider = StampedEntity & {
  companyName: string;
  email: string;
  phoneNumber: string;
  passwordHash: string;

  hasVerifiedEmail?: boolean;
  hasVerifiedPhone?: boolean;
  hasVerifiedIdentity?: boolean;
};

export type User = Client | Provider;