import { E_Streams } from "../enums/streams";
import { E_Subjects } from "../enums/subjects";
export interface BlockingUserCreatedEvent {
    readonly consumerName: string;
    readonly streamName: E_Streams.BlockingUserCreated;
    readonly subject: E_Subjects.BlockingUserCreated;
    readonly data: {
        id: string;
        blockingUsers: string[];
        userId: string;
    };
}
export interface BlockingUserUpdatedEvent {
    readonly consumerName: string;
    readonly streamName: E_Streams.BlockingUserUpdated;
    readonly subject: E_Subjects.BlockingUserUpdated;
    readonly data: {
        id: string;
        blockingUsers: string[];
        userId: string;
    };
}
