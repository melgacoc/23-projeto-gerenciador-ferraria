import ProductModel from '../models/productsModels';
import { IProduct } from '../interfaces/products';

export default class ProductService {
  constructor(private productModel = new ProductModel()) {}

  async getAll(): Promise<IProduct[]> {
    return this.productModel.getAll();
  }

  async addProduct(newProduct: IProduct): Promise<IProduct> {
    // const { name, amount } = newProduct;
    const result = await this.productModel.addProduct(newProduct);
    return result;
  }
}
