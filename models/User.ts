// model User {
//   id          Int       @id @default(autoincrement())
//   username    String
//   password    String
//   isSuperuser Boolean   @default(false)
//   accountType String
//   fullname    String
//   isActive    Boolean   @default(false)
//   phone       String
//   image       String?
//   createdAt   DateTime  @default(now())
//   updatedAt   DateTime
//   deletedAt   DateTime?
// }

interface IUser {
    id?: number;
    username: string;
    password: string;
    isSuperuser: boolean;
    accountType: string;
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
    public accountType: string;
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