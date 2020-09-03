export interface ApiResponse {
    statusCode: number;
    headers?: { [key: string]: string };
    body?: any;
}