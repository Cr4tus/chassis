import * as z from "zod";
import crypto from 'crypto';
import {ObjectId} from "mongodb";
import {APIError} from "encore.dev/api";
import type { StampedEntity } from "../types/db/core";

export const hash = (subject: string): string => {
  return crypto.createHash('sha256').update(subject).digest('hex');
};

export const throwAPIError = (): never => {
  throw APIError.internal("Server Error");
};

export const StampedEntityWith = <T extends Record<string, any>>(obj: T): StampedEntity & T => {
  const thisMoment = new Date();
  return {
    _id: new ObjectId().toString(),
    creationDate: thisMoment,
    lastUpdateDate: thisMoment,
    ...obj
  };
};

export const createRequestSchema = <T extends z.ZodRawShape>(shape: T) => {
  return z.object(shape).strict();
};

type ThrowIfCantParseParams <T = any> = {
    target: T;
    using: z.ZodTypeAny;
}

export const throwAPIErrorIfCannotParse = <T> ({ target, using: schema }: ThrowIfCantParseParams<T>) => {
    const parseResult = schema.safeParse(target);
    if (!parseResult.success) {
        throw APIError.internal("Invalid Request");
    }
};