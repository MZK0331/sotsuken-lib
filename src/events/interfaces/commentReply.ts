import { E_Consumer } from "../enums/consumer"
import { E_Streams } from "../enums/streams"
import { E_Subjects } from "../enums/subjects"


export interface CommentReplyCreatedEvent {
    readonly consumerName: string
    readonly streamName: E_Streams.CommentReplyCreated
    readonly subject: E_Subjects.CommentReplyCreated
    readonly data: {
        id: string
        postId: string
        commentId: string
        content: string
        userId: string
        edited: boolean
        createdAt: Date
        updatedAt: Date
    }
}

export interface CommentReplyUpdatedEvent {
    readonly consumerName: string
    readonly streamName: E_Streams.CommentReplyUpdated
    readonly subject: E_Subjects.CommentReplyUpdated
    readonly data: {
        id: string
        postId: string
        commentId: string
        content: string
        userId: string
        edited: boolean
        createdAt: Date
        updatedAt: Date
    }
}

export interface CommentReplyDeletedEvent {
    readonly consumerName: string
    readonly streamName: E_Streams.CommentReplyDeleted
    readonly subject: E_Subjects.CommentReplyDeleted
    readonly data: {
        id: string
        postId: string
        commentId: string
    }
}