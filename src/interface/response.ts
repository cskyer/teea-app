export interface IResponse<T> {
    success: boolean;
    code: number;
    data?: T;
    message?: string;
}
