import { Injectable } from '@nestjs/common';
@Injectable()
export class NotificationService {
  sendNotification() { return 'Notification sent'; }
}