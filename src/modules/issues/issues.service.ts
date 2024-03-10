import { Injectable } from '@nestjs/common';
import {ConfigService} from '@nestjs/config'
import { EntityRepository, EntityManager, wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import _ from 'lodash';
import {UserIssues} from './entities/user-issues.entity';
import type { IMultiValueHttpResponse, IMutationResult } from '../../interfaces';
import { CreateUserIssuesDto } from './dto/create-user-issues.dto';

@Injectable()
export class IssueService {

    constructor(
      private configService: ConfigService,
      @InjectRepository(UserIssues)
      private readonly userIssuesRepository: EntityRepository<UserIssues>,
      private readonly em: EntityManager,
      ) {}
      
      private async getUserIssuesFromDB() {
        try {
          const result = await this.userIssuesRepository.findAll();
    
          return result || null;
        } catch (err) {
          return null;
        }
      }

      public async addUserIssueToDB(userIssues: CreateUserIssuesDto): Promise<IMutationResult> {
  
        const newUserIssuesbject = this.em.create(UserIssues, userIssues);
    
        try {
          await this.em.persistAndFlush(newUserIssuesbject);
        } catch (err: any) {
          return {
            success: false,
            message: err.message,
          };
        }
        return {
          success: true
        };
      }

      public async getUserIssues(): Promise<IMultiValueHttpResponse<UserIssues>> {
        const result =  await this.getUserIssuesFromDB();
        return {
          count: result.length,
          success: true,
          data: result
        }
      }
}
