export interface User {
    id: number;
    username: string;
    email: string;
    phone: string;
    department: string;
    status: 'active' | 'inactive' | 'suspended';
    joinDate: string;
    avatar?: string;
    role: 'admin' | 'manager' | 'user';
}

export interface PaginationParams {
    page: number;
    pageSize: number;
}

export interface ApiResponse<T> {
    code: number;
    message: string;
    data: T;
    timestamp: number;
}