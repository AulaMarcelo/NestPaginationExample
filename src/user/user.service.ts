import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma:PrismaService){}

  async findAllUsers(take:string,skip:string,filter:string) {
    const takeNumber = parseInt(take);
    const skipNumber = parseInt(skip);
    const page = skipNumber * takeNumber

    const users =  await this.prisma.user.findMany({
      skip: page,
      take: takeNumber,
      where:{
        name:{
          contains:filter.toString()
        }
      },
      orderBy: {
      
        name: 'desc'
      
    },
      

    });
    return users;
  }
}
