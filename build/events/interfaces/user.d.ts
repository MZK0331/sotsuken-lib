import { E_Streams } from "../enums/streams";
import { E_Subjects } from "../enums/subjects";
export interface UserCreatedEvent {
    readonly consumerName: string;
    readonly streamName: E_Streams.UserCreated;
    readonly subject: E_Subjects.UserCreated;
    readonly data: {
        id: string;
        name: string;
        email: string;
    };
}
export interface UserUpdatedEvent {
    readonly consumerName: string;
    readonly streamName: E_Streams.UserUpdated;
    readonly subject: E_Subjects.UserUpdated;
    readonly data: {
        id: string;
        name: string;
        email: string;
    };
}
export interface UserDeletedEvent {
    readonly consumerName: string;
    readonly streamName: E_Streams.UserDeleted;
    readonly subject: E_Subjects.UserDeleted;
    readonly data: {
        id: string;
    };
}
