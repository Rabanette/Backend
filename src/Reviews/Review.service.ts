import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma-service';

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}

    async listall(){
        const review = await this.prisma.review.findMany(); 
         if (review.length === 0) {
          throw new NotFoundException('There are no reviews');
        }
        return review;
    }

  

   async addReview(name: string, text: string) {
    if (!name || !text) {
      throw new BadRequestException('Name and text are required');
    }

    return this.prisma.review.create({
      data: {
        name,
        text,
      },
    });
  }
}
