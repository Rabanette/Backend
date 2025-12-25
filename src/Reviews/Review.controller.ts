import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReviewService } from './Review.service';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  // GET /reviews
  @Get()
  listAll() {
    return this.reviewService.listall();
  }

  // POST /reviews
  @Post()
  create(@Body() body: { name: string; text: string }) {
    return this.reviewService.addReview(body.name, body.text);
  }
}
