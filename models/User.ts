// import { hashSync  } from 'bcrypt-ts';

enum AccountTypes {
    REGULAR_USER = 'REGULAR_USER',
    CAFE_OWNER_USER = 'CAFE_OWNER_USER',
    PROVIDER_USER = 'PROVIDER_USER'
}

interface IUser {
    id?: number;
    username: string;
    password: string;
    isSuperuser: boolean;
    accountType: AccountTypes;
    fullname: string;
    isActive: boolean;
    phone: string;
    image: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

class User {
    public id?: number;
    public username: string;
    public password: string;
    public isSuperuser: boolean;
    public accountType: AccountTypes;
    public fullname: string;
    public isActive: boolean;
    public phone: string;
    public image: string;
    public createdAt: string | Date;
    public updatedAt: string | Date;
    public deletedAt?: string | Date;

    constructor(params: IUser) {
        this.id = params.id;
        this.username = params.username;
        // this.password = hashSync(params.password, 8);
        this.password = params.password;
        this.isSuperuser = params.isSuperuser;
        this.accountType = params.accountType;
        this.fullname = params.fullname;
        this.isActive = params.isActive;
        this.phone = params.phone;
        this.image = params.image;
        this.createdAt = params.createdAt ? new Date(params.createdAt) : new Date();
        this.updatedAt = params.updatedAt ? new Date(params.updatedAt) : new Date();
        this.deletedAt = params.deletedAt ? new Date(params.deletedAt) : undefined;
    }
}

export default User;