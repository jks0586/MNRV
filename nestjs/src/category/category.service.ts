import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './category.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import moment from 'moment';
@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('category') private readonly categoryModel: Model<Category>,
  ) {}
  create(createCategoryDto: CreateCategoryDto) {
    // console.log(createCategoryDto);
    const newCategory = new this.categoryModel(createCategoryDto);
    newCategory.save();
    return newCategory;
  }

  findAll() {
    const all = this.categoryModel.find({});
    // all.map((item,index)=>{
    //   item.createdAt.moment().format("YYYY-MM-DD");
    // })
    return all;
  }

  findOne(id) {
    const category = this.categoryModel.findOne({ _id: id });
    console.log(id);
    return category;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
