import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from './category.model';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'category', schema: CategorySchema }]),
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
