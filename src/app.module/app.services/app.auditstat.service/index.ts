import { $api, ENDPOINTS } from '../index';
import { AuditStat } from '../../app.models/models';

const AuditStatService = () => {

    const getAudit = async (uid: string) => {
        let response = await $api.get<AuditStat>(
            ENDPOINTS.REPORTS(uid)
        )
        return {
            status: response.status,
            data: response.data
        }
    }
    return {getAudit}
}

export const auditService = AuditStatService()