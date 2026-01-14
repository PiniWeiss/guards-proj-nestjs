
import { Shift } from './shift.entity';

export const shiftsProviders = [
  {
    provide: 'SHIFTS_REPOSITORY',
    useValue: Shift,
  },
];
