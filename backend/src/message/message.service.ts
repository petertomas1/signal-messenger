import { Injectable } from '@nestjs/common';
@Injectable()
export class MessageService {
  sendMessage() { return 'Message sent'; }
}