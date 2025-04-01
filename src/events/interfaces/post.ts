import { Exams } from "../../services/exams"
import { E_Streams } from "../enums/streams"
import { E_Subjects } from "../enums/subjects"


export interface PostGetedEvent {
    readonly consumerName: string
    readonly streamName: E_Streams.PostGeted
    readonly subject: E_Subjects.PostGeted
    readonly data: {
        postId: string
        userId: string
    }
}

export interface PostCreatedEvent {
    readonly consumerName: string
    readonly streamName: E_Streams.PostCreated
    readonly subject: E_Subjects.PostCreated
    readonly data: {
        id: string,
        title: string
        content: string
        exam: typeof Exams[number]
        tags: string[]
        resolved: boolean
        edited: boolean
        userId: string
        views: number
        likes: number
        createdAt: Date
        updatedAt: Date
    }
}

export interface PostUpdatedEvent {
    readonly consumerName: string
    readonly streamName: E_Streams.PostUpdated
    readonly subject: E_Subjects.PostUpdated
    readonly data: {
        id: string,
        title: string
        content: string
        exam: typeof Exams[number]
        tags: string[]
        resolved: boolean
        edited: boolean
        userId: string
        views: number
        likes: number
        createdAt: Date
        updatedAt: Date
    }
}

export interface PostDeletedEvent {
    readonly consumerName: string
    readonly streamName: E_Streams.PostDeleted
    readonly subject: E_Subjects.PostDeleted
    readonly data: {
        id: string
    }
}