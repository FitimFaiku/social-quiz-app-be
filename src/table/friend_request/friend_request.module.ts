import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FriendRequest } from './friend_request.entity';
import { FriendRequestService } from './friend_request.service';

@Module({
  imports: [TypeOrmModule.forFeature([FriendRequest])],
  providers: [FriendRequestService],
  exports: [FriendRequestService],
})
export class FriendRequestModule {}
