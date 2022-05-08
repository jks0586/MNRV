import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  name: string;
  description: string;
  image:string;
  order:Number;
  parent_id:Number;
  status:Number;
}
