import { Entity, JsonType, PrimaryKey, Property } from '@mikro-orm/core';
import { BaseEntity } from '../../../libs/BaseEntity';
import {
    IUserIssues,
} from '../../../interfaces';

@Entity()
export class UserIssues extends BaseEntity implements IUserIssues {
  @PrimaryKey()
  id: number;

  @Property()
  title: string;

  @Property()
  description: string;

  @Property()
  is_active: boolean;
}
