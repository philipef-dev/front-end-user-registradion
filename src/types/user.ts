export type User = {
    id?: string;
    name: string;
    email: string;
    age: number;
  }

export type NewUser = Omit<User, 'id'>;