import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("take/:take/skip/:skip/:filter?")
  async findAllUsers(
    @Param('take') take:string,
    @Param('skip') skip:string,
    @Param('filter') filter?:string
  ){
    return await this.userService.findAllUsers(take,skip,filter);
  }
}
