interface ICategory {
  id?: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

class Category {
    public id?: number;
    public name: string;
    public createdAt: string | Date;
    public updatedAt: string | Date;
    public deletedAt?: string | Date;

    constructor(params: ICategory) {
      this.id = params.id;
      this.name = params.name;
      this.createdAt = params.createdAt ? new Date(params.createdAt) : new Date();
      this.updatedAt = params.updatedAt ? new Date(params.updatedAt) : new Date();
      this.deletedAt = params.deletedAt ? new Date(params.deletedAt) : undefined;
    }
}

export default Category;