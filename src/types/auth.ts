import { UserType } from "./enums";

export type TokenPayload = {
  userID: string;
  userType: UserType;
  device: string;
}