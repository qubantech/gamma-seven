export interface complaintsModel {
    id: string,
    status: string,
    dateSent: number,
    dateResponded: number,
    userId: string,
    theme: string,
    text: string,
    tags: string[],
    keywords: string[],
    institutionId: number,
    response: string,
    score: number
}
export const complaintsModelInitState = {
    id: "0",
    status: "accepted",
    dateSent: 1,
    dateResponded: 1,
    userId: "0sjdhdiddhdsd",
    theme: "Тема сообщения",
    text: "Текст сообщения, доооолгий",
    tags: ["Жалоба"],
    keywords: ["Слово"],
    institutionId: 1,
    response: "Ответ",
    score: 0
}