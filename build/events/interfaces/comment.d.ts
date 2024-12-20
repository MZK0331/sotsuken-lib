import { E_Streams } from "../enums/streams";
import { E_Subjects } from "../enums/subjects";
export interface CommentCreatedEvent {
    readonly consumerName: string;
    readonly streamName: E_Streams.CommentCreated;
    readonly subject: E_Subjects.CommentCreated;
    readonly data: {
        id: string;
        content: string;
        postId: string;
        userId: string;
        edited: boolean;
        createdAt: Date;
        updatedAt: Date;
    };
}
export interface CommentUpdatedEvent {
    readonly consumerName: string;
    readonly streamName: E_Streams.CommentUpdated;
    readonly subject: E_Subjects.CommentUpdated;
    readonly data: {
        id: string;
        content: string;
        postId: string;
        userId: string;
        edited: boolean;
        createdAt: Date;
        updatedAt: Date;
    };
}
export interface CommentDeletedEvent {
    readonly consumerName: string;
    readonly streamName: E_Streams.CommentDeleted;
    readonly subject: E_Subjects.CommentDeleted;
    readonly data: {
        id: string;
        userId: string;
        postId: string;
    };
}
