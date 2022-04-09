type User = {
    userId: string,
    firstName: string | null,
    lastName: string | null,
    sex: "m" | "f",
    city: string | null,
    age: number,
    role: string
}

type AuditStat = {
    complaintsAmount: number,
    complaintsAmountPerDayHist: Array<number>,
    complaintsMeaningfulnessMeanScore: number,
    complaintsPending: number,
    complaintsProcessed: number,
    complaintsRejected: number,
    createdAt: string,
    maxComplaintProcessingTime: number,
    meanComplaintProcessingTime: number,
    mostPopularKeywords: Array<String>,
    mostPopularScripts: Array<String>,
    mostPopularTopics: Array<String>,
    peakComplaintsAmountDate: string
    peakComplaintsAmountNumber: number,
}

export type {
    User,
    AuditStat
}

