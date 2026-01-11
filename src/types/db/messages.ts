import type { StampedEntity } from "./core";

export type Message = StampedEntity & {
    readonly senderId: string;
    readonly recipientId: string;
    readonly taskId: string;
    readonly text: string;
}