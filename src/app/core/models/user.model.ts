export enum UserRole {
    Admin = 'Admin',
    User = 'User',
    Guest = 'Guest'
}

export interface UserModel{
    id: string;
    name: string;
    email: string;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
    
}


