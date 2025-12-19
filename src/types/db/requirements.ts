import type { StampedEntity } from "../../types/db/core";

type PhoneVerificationRequirement = {
  phoneNumberVerificationCode: string;
  isPhoneNumberVerified: boolean;
  lastPhoneNumberVerificationCodeSendDate: Date | null;
  phoneNumberVerificationCodeResendCount: number;
  phoneNumberVerificationAttempts: number;
};

type EmailVerificationRequiremnt = {
  emailVerificationCode: string;
  isEmailVerified: boolean;
  lastEmailVerificationCodeSendDate: Date | null;
  emailVerificationCodeResendCount: number;
  emailVerificationAttempts: number;
};

type IdentityVerificationRequirement = {
  submittedIdentityDocs: boolean;
};

type CompanyDocumentsRequirement = {
  submittedCompanyDocs: boolean;
};

export type ClientRequirements =
  StampedEntity
  & EmailVerificationRequiremnt
  & PhoneVerificationRequirement;

export type ProviderRequirements =
  StampedEntity
  & EmailVerificationRequiremnt
  & PhoneVerificationRequirement
  & IdentityVerificationRequirement
  & CompanyDocumentsRequirement;