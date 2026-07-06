import { Injectable } from '@nestjs/common';
@Injectable()
export class AuthService {
  validateUser() { return { success: true }; }
}