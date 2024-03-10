import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { IssueController } from './issues.controller';
import { IssueService } from './issues.service';
import {
  UserIssues
} from './entities/user-issues.entity'

@Module({
  imports: [
    MikroOrmModule.forFeature([UserIssues]),
  ],
  controllers: [IssueController],
  providers: [IssueService],
})
export class IssueModule {}
