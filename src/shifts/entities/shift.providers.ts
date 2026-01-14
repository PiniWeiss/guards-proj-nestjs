
import { Shift } from './shift.entity';

export const shiftProviders = [
  {
    provide: 'SHIFTS_REPOSITORY',
    useValue: Shift,
  },
];
