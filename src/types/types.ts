export interface UserData {
    user_id: string;
    user_email: string;
    username: string;
    user_telephone: string;
    user_role: string;
    user_avt: string;
    user_password: string;
}
export interface UserContextData{
    user: UserData;
    token: string;
}
export interface LoginData{
    user_email_or_phone: string;
    user_password: string;
}

export interface RegisterData{
    username: string;
    user_email: string;
    user_telephone: string;
    user_password: string;
}

export interface BEResponse{
    status: string;
    message: string;
    data: []|null;
    data_type: string|null
}

export interface BeError{
    status: string;
    message: string;
    type: string|null;
}

export interface SearchProps{
    apiUrl: string;
}

export interface Merchandise{
    merchandise_id: string;
    merchandise_name: string;
    shop_id: string;
    merchandise_in_stock_quantity: number;
    merchandise_sold_quantity: number;
    merchandise_description: string;
    merchandise_price: number;
    merchandise_img: string;
}

export type SearchResponse = Merchandise[]|null