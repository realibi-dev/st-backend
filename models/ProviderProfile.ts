interface IProviderProfile {
    id?: number;
    name: string;
    image?: string;
    isActive: boolean;
    userId: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

class ProviderProfile {
    public id?: number;
    public name: string;
    public image?: string;
    public isActive?: boolean;
    public userId: number;
    public createdAt: string | Date;
    public updatedAt: string | Date;
    public deletedAt?: string | Date;

    constructor(params: IProviderProfile) {
      this.id = params.id;
      this.name = params.name;
      this.image = params.image;
      this.isActive = params.isActive;
      this.userId = params.userId;
      this.createdAt = params.createdAt ? new Date(params.createdAt) : new Date();
      this.updatedAt = params.updatedAt ? new Date(params.updatedAt) : new Date();
      this.deletedAt = params.deletedAt ? new Date(params.deletedAt) : undefined;
    }
}

export default ProviderProfile;