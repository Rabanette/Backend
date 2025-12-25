import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ReviewModule } from './Reviews/Review.module';

@Module({
  imports: [AuthModule,ReviewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
