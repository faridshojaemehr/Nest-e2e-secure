import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    { id: 1, name: 'farid', isActive: true },
    { id: 2, name: 'saba', isActive: true },
    { id: 3, name: 'fariborz', isActive: true },
    { id: 4, name: 'sina', isActive: true },
    { id: 5, name: 'jack', isActive: true },
  ];

  getUsers() {
    return this.users;
  }
}
