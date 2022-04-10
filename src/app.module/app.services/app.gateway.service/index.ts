import { ComplaintsModel } from '../app.complaints.service/models/complaints.model';
import { $gatewayApi, GATEWAY } from './api.config';

export class AppGatewayService {

    async submit(info: ComplaintsModel) {
        const response = await $gatewayApi.post(
            GATEWAY.SUBMIT,
            info
        );
        return response;
    }

}

export const appGatewayService = new AppGatewayService();