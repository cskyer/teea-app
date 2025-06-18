export interface IRequestItem {
    [key: string]: any
}

export interface IRequest {
    params?: IRequestItem;
    data?: IRequestItem;
}
