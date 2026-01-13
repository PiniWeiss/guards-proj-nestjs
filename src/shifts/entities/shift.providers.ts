
import { User } from './shift.entity';

export const usersProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useValue: User,
  },
];
