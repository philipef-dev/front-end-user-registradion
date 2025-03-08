export type User = {
    id: number;
    name: string;
    email: string;
    age: number;
  }

export type NewUser = Omit<User, 'id'>;