import { ComplaintsModel } from './models/complaints.model';
import { $complaintsApi, COMPLAINTS } from './api.config';

export class AppComplaintsService {

    async getComplaint(id: string): Promise<ComplaintsModel> {
        const response = await $complaintsApi.get<ComplaintsModel>(
            COMPLAINTS.GET_COMPLAINT_BY_ID(id)
        );
        return response.data;
    }

    async createComplaint(info: ComplaintsModel): Promise<ComplaintsModel> {
        const response = await $complaintsApi.post<ComplaintsModel>(
            COMPLAINTS.POST_COMPLAINT(),
            info
        );
        return response.data;
    }

    async updateComplaint(info: ComplaintsModel) {
        const response = await $complaintsApi.put<ComplaintsModel>(
            COMPLAINTS.UPDATE_COMPLAINT_BY_ID(info.id),
            info
        );
        return response.data;
    }

    async getUserComplaints(uid: string): Promise<ComplaintsModel[]> {
        const response = await $complaintsApi.get<ComplaintsModel[]>(
            COMPLAINTS.GET_USER_COMPLAINTS(uid)
        );
        return response.data;
    }

    async getInstitutionComplaints(id: number): Promise<ComplaintsModel[]> {
        const response = await $complaintsApi.get<ComplaintsModel[]>(
            COMPLAINTS.GET_INSTITUTION_COMPLAINTS(id.toString())
        );
        return response.data;
    }

    async getAllComplaints(): Promise<ComplaintsModel[]> {
        const response = await $complaintsApi.get<ComplaintsModel[]>(
            COMPLAINTS.GET_ALL_COMPLAINTS()
        );
        return response.data;
    }
}

export const appComplaintsService = new AppComplaintsService();