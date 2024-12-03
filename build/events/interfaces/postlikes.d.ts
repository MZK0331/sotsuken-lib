import { E_Streams } from "../enums/streams";
import { E_Subjects } from "../enums/subjects";
export interface PostLikesUpdatedEvent {
    readonly consumerName: string;
    readonly streamName: E_Streams.PostLikesUpdated;
    readonly subject: E_Subjects.PostLikesUpdated;
    readonly data: {
        postId: string;
        likes: number;
    };
}
