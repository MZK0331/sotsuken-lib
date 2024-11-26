import { E_Consumer } from "../enums/consumer";
import { E_Streams } from "../enums/streams";
import { E_Subjects } from "../enums/subjects";
export interface PostLikesUpdatedEvent {
    readonly consumerName: E_Consumer.PostLikesUpdatedListener;
    readonly streamName: E_Streams.PostLikesUpdated;
    readonly subject: E_Subjects.PostLikesUpdated;
    readonly data: {
        postId: string;
        likes: number;
    };
}
