import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma-service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  // SIGNUP
  async signup(email: string, password: string) {
    const userExists = await this.prisma.user.findUnique({
      where: { email },
    });

    if (userExists) {
      throw new BadRequestException('Email already in use');
    }

    return this.prisma.user.create({
      data: { email, password },
    });
  }

  // LOGIN
  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user || user.password !== password) {
      throw new BadRequestException('Invalid User');
    }

    return user;
  }
}
