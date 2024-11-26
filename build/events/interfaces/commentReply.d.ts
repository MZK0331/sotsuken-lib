import { E_Consumer } from "../enums/consumer";
import { E_Streams } from "../enums/streams";
import { E_Subjects } from "../enums/subjects";
export interface CommentReplyCreatedEvent {
    readonly consumerName: E_Consumer.ReplyCreatedListener;
    readonly streamName: E_Streams.ReplyCreated;
    readonly subject: E_Subjects.ReplyCreated;
    readonly data: {
        id: string;
        postId: string;
        commentId: string;
        content: string;
        userId: string;
        edited: boolean;
        createdAt: Date;
        updatedAt: Date;
    };
}
export interface CommentReplyUpdatedEvent {
    readonly consumerName: E_Consumer.ReplyUpdatedListener;
    readonly streamName: E_Streams.ReplyUpdated;
    readonly subject: E_Subjects.ReplyUpdated;
    readonly data: {
        id: string;
        postId: string;
        commentId: string;
        content: string;
        userId: string;
        edited: boolean;
        createdAt: Date;
        updatedAt: Date;
    };
}
export interface CommentReplyDeletedEvent {
    readonly consumerName: E_Consumer.ReplyDeletedListener;
    readonly streamName: E_Streams.ReplyDeleted;
    readonly subject: E_Subjects.ReplyDeleted;
    readonly data: {
        id: string;
        postId: string;
        commentId: string;
    };
}
