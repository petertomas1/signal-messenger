import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, OnGatewayConnection } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: true })
export class ChatGateway implements OnGatewayConnection {
  @WebSocketServer() server: Server;

  handleConnection() { console.log('Connected'); }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: any) {
    this.server.emit('message', data);
  }
}