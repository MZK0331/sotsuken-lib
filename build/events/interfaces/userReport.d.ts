import { E_Consumer } from "../enums/consumer";
import { E_Streams } from "../enums/streams";
import { E_Subjects } from "../enums/subjects";
export interface ReportCreateddEvent {
    readonly consumerName: E_Consumer.ReportCreatedListener;
    readonly streamName: E_Streams.ReportCreated;
    readonly subject: E_Subjects.ReportCreated;
    readonly data: {
        id: string;
        targetUserId: string;
        whistleblower: string;
        content: string;
        createdAt: string;
    };
}
