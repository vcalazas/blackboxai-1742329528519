export interface User {
  id: string;
  email: string;
  password: string;
  createdAt: Date;
}

// Simulating a database with an in-memory array
export class UserStore {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }

  async create(user: Omit<User, 'id' | 'createdAt'>): Promise<User> {
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email: user.email,
      password: user.password,
      createdAt: new Date()
    };
    this.users.push(newUser);
    return newUser;
  }
}

export const userStore = new UserStore();