import type { StampedEntity } from "./core";

export type Client = StampedEntity & {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phoneNumber: string;
  readonly passwordHash: string;
};

export type ClientProfile = {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phoneNumber: string;
}

export type Provider = StampedEntity & {
  readonly companyName: string;
  readonly email: string;
  readonly phoneNumber: string;
  readonly passwordHash: string;
};

export type ProviderProfile = {
  readonly companyName: string;
  readonly email: string;
  readonly phoneNumber: string;
  readonly passwordHash: string;
}

export type User = Client | Provider;
export type UserProfile = ClientProfile | ProviderProfile;