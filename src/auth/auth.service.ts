import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService,) {}

  async signIn(userName: string, pass: string) {
    const user = await this.usersService.findOne(userName);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = {sub: user.id, username: userName }; // המידע שייכנס לטוקן
    const secretKey = 'your-super-secret-key'; // מפתח סודי חזק!

    
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
