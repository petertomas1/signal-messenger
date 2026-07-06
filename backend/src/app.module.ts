import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ChatModule } from './chat/chat.module';
import { MessageModule } from './message/message.module';
import { GroupModule } from './group/group.module';
import { ChannelModule } from './channel/channel.module';
import { AuthModule } from './auth/auth.module';
import { FileModule } from './file/file.module';
import { NotificationModule } from './notification/notification.module';
import { BotModule } from './bot/bot.module';
import { CallModule } from './call/call.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ChatModule,
    MessageModule,
    GroupModule,
    ChannelModule,
    FileModule,
    NotificationModule,
    BotModule,
    CallModule,
  ],
})
export class AppModule {}