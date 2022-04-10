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
    _id: string;
    __v: number;
}

export const ReportModelInitState:ReportModel = {
    createdAt: new Date(),
    userId: "",
    institutionId: 0,
    complaintsAmount: 0,
    complaintsProcessed: 0,
    complaintsPending: 0,
    complaintsRejected: 0,
    mostPopularKeywords: [],
    mostPopularTopics: [],
    mostPopularScripts: [],
    complaintsMeaningfulnessMeanScore: 0,
    peakComplaintsAmountNumber: 0,
    peakComplaintsAmountDate: new Date(),
    meanComplaintProcessingTime: 0,
    maxComplaintProcessingTime: 0,
    complaintsAmountPerDayHist: [],
    _id: 'id',
    __v: 0,
}