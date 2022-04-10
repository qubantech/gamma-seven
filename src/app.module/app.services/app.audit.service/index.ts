import { ReportModel } from './models/report.model';
import { ReportRequestDto } from './dto/report-request.dto';
import { $auditApi, AUDIT } from './api.config';

export class AppAuditService {

    async createReportForUser(dto: ReportRequestDto, userId: string): Promise<ReportModel> {
        const response = await $auditApi.get<ReportModel>(
            AUDIT.CREATE_REPORT_FOR_USER_URL(userId),
            {
                data: {
                    "dateStart": dto.dateStart,
                    "dateEnd": dto.dateEnd
                },
            },
        );
        return response.data;
    }

    async createReportForInstitution(dto: ReportRequestDto, institutionId: string): Promise<ReportModel> {
        const response = await $auditApi.get<ReportModel>(
            AUDIT.CREATE_REPORT_FOR_INSTITUTION_URL(institutionId),
            {
                data: {
                    "dateStart": dto.dateStart,
                    "dateEnd": dto.dateEnd
                },
            },
        );
        return response.data;
    }

    async createReport(dto: ReportRequestDto) {
        const response = await $auditApi.get<ReportModel>(
            AUDIT.CREATE_REPORT_URL,
            {
                data: {
                    "dateStart": dto.dateStart,
                    "dateEnd": dto.dateEnd
                },
            },
        );
        return response.data;
    }

    async getAllReports() {
        const response = await $auditApi.get<Array<ReportModel>>(AUDIT.GET_ALL_REPORTS_URL);
        return response.data;
    }

    async getReportPDFAndSendToEmail(reportId: string, emailTo?: string) {
        const response = await $auditApi.get<ReportModel>(AUDIT.GET_REPORT_PDF(reportId), {
            data: { email: emailTo },
        });
        return response.data;
    }
}

export const appAuditService = new AppAuditService();