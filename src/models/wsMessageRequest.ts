export interface WsMessageRequest {
    domainName: string
    stage: string;
    connectionId: string,
    message?: string;
}