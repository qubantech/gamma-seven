export interface ReportModel {
    createdAt: Date;
    userId: string | null;
    institutionId: number;
    complaintsAmount: number;
    complaintsProcessed: number;
    complaintsPending: number;
    complaintsRejected: number;
    mostPopularKeywords: string[];
    mostPopularTopics: string[];
    mostPopularScripts: string[];
    complaintsMeaningfulnessMeanScore: number;
    peakComplaintsAmountNumber: number;
    peakComplaintsAmountDate: Date;
    meanComplaintProcessingTime: number;
    maxComplaintProcessingTime: number;
    complaintsAmountPerDayHist: number[];
}