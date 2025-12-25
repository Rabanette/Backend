import { Module } from '@nestjs/common';
import { ReviewController } from './Review.controller';
import { ReviewService } from './Review.service';
import { PrismaService } from '../prisma/prisma-service';

@Module({
  controllers: [ReviewController],
  providers: [ReviewService, PrismaService],
})
export class ReviewModule {}
