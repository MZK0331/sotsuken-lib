import { Exams } from "../../services/exams";
import { PostTags } from "../../services/postTags";
import { E_Consumer } from "../enums/consumer";
import { E_Streams } from "../enums/streams";
import { E_Subjects } from "../enums/subjects";
export interface PostGetedEvent {
    readonly consumerName: E_Consumer.PostGetedListener;
    readonly streamName: E_Streams.PostGeted;
    readonly subject: E_Subjects.PostGeted;
    readonly data: {
        id: string;
    };
}
export interface PostCreatedEvent {
    readonly consumerName: E_Consumer.PostCreatedListener;
    readonly streamName: E_Streams.PostCreated;
    readonly subject: E_Subjects.PostCreated;
    readonly data: {
        id: string;
        title: string;
        content: string;
        exam: typeof Exams[number];
        tags: typeof PostTags[number][];
        resolved: boolean;
        edited: boolean;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    };
}
export interface PostUpdatedEvent {
    readonly consumerName: E_Consumer.PostUpdatedListener;
    readonly streamName: E_Streams.PostUpdated;
    readonly subject: E_Subjects.PostUpdated;
    readonly data: {
        id: string;
        title: string;
        content: string;
        exam: typeof Exams[number];
        tags: typeof PostTags[number][];
        resolved: boolean;
        edited: boolean;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    };
}
export interface PostDeletedEvent {
    readonly consumerName: E_Consumer.PostDeletedListener;
    readonly streamName: E_Streams.PostDeleted;
    readonly subject: E_Subjects.PostDeleted;
    readonly data: {
        id: string;
    };
}
