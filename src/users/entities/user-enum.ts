// נגדיר את הרשימה הסגורה
export enum UserRole {
  SOLDIER = 'regolar soldier',
  COMMANDER = 'commander',
}

export class Task {
  id: number;
  username: string;
  text: string;
  role: UserRole;
}
