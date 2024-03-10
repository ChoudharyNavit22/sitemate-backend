import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IssueService } from './issues.service';
import type { ISingleValueHttpResponse } from '../../interfaces';
import { CreateUserIssuesDto } from './dto/create-user-issues.dto';

@ApiTags('issues')
@Controller('issues')
export class IssueController {
  constructor(private readonly issueService: IssueService) {}

  @Get('/')
  async getUserIssues(): Promise<ISingleValueHttpResponse<any>> {
    try {
      const result = await this.issueService.getUserIssues();
      if(result) {
        return {
          success: true,
          data: result,
        };
      }
      throw new Error("Internal Server Error");
    } catch (err: any) {
      throw new HttpException({
        success: false,
        message: err.message,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('/')
  async createUserIssues(
    @Body() createUserIssueDto: CreateUserIssuesDto,
  ): Promise<ISingleValueHttpResponse<any>> {
    try {
      const result = await this.issueService.addUserIssueToDB(createUserIssueDto);
      if(result) {
        return {
          success: true,
          data: result,
        };
      }
      throw new Error("Internal Server Error");
    } catch (err: any) {
      throw new HttpException({
        success: false,
        message: err.message,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}