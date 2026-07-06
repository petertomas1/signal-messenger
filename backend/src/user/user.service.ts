import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  // TODO: Add Prisma or TypeORM later
  findAll() { return ['user1', 'user2']; }
  findOne(id: string) { return { id, name: 'User' }; }
}