import * as z from "zod";
import {ObjectId} from "mongodb";

export const ObjectIdSchema = z.string().refine(val => ObjectId.isValid(val));
export const EmailSchema = z.email({ pattern: z.regexes.unicodeEmail });
export const PhoneNumberSchema = z.string().regex(/^[0-9]\d{5,14}$/);
export const PersonNameSchema = z.string().regex(/^[A-Za-z\u00C0-\u00FF][A-Za-z\u00C0-\u00FF'\-]+( [A-Za-z\u00C0-\u00FF][A-Za-z\u00C0-\u00FF'\-]+)*/u);
export const CompanyNameSchema = z.string().regex(/^[A-Za-z0-9 .]{3,}$/);