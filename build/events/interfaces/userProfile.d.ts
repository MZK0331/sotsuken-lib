import { E_Consumer } from "../enums/consumer";
import { E_Streams } from "../enums/streams";
import { E_Subjects } from "../enums/subjects";
export interface UserProfileCreatedEvent {
    readonly consumerName: E_Consumer.UserProfileCreatedListener;
    readonly streamName: E_Streams.UserProfileCreated;
    readonly subject: E_Subjects.UserProfileCreated;
    readonly data: {
        id: string;
        email: string;
        name: string;
        avatar: {
            data: Buffer;
            contentType: string;
        };
    };
}
export interface UserProfileUpdatedEvent {
    readonly consumerName: E_Consumer.UserProfileUpdatedListener;
    readonly streamName: E_Streams.UserProfileUpdated;
    readonly subject: E_Subjects.UserProfileUpdated;
    readonly data: {
        id: string;
        email: string;
        name: string;
        avatar: {
            data: Buffer;
            contentType: string;
        };
    };
}
export interface UserProfileDeletedEvent {
    readonly consumerName: E_Consumer.UserProfileDeletedListener;
    readonly streamName: E_Streams.UserProfileDeleted;
    readonly subject: E_Subjects.UserProfileDeleted;
    readonly data: {
        id: string;
    };
}
