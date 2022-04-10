import { complaintsModel } from './models/complaints.model';
import { $complaintsApi, COMPLAINTS } from './api.config';

export class AppComplaintsService {

    async createComplaint(info: complaintsModel): Promise<complaintsModel> {
        const response = await $complaintsApi.post<complaintsModel>(
            COMPLAINTS.PUT_COMPLAINTS(),
                 {
                    id: info.id,
                    status: "accepted",
                    dateSent: Date.now(),
                    dateResponded: 0,
                    userId: info.userId,
                    theme: info.theme,
                    text: info.text,
                    tags: info.tags,
                    keywords: [],
                    institutionId: info.institutionId,
                    response: "none",
                    score: 0
                },
        );
        return response.data;
    }

    async getUserComplaints(uid: string): Promise<complaintsModel[]> {
        const response = await $complaintsApi.get<complaintsModel[]>(
            COMPLAINTS.GET_USER_COMPLAINTS(uid)
        );
        return response.data;
    }

    async getAllComplaints(): Promise<complaintsModel[]> {
        const response = await $complaintsApi.get<complaintsModel[]>(
            COMPLAINTS.PUT_COMPLAINTS()
        );
        return response.data;
    }
}

export const appComplaintsService = new AppComplaintsService();