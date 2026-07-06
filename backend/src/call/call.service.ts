import { Injectable } from '@nestjs/common';
@Injectable()
export class CallService {
  startCall() { return 'Call started'; }
}