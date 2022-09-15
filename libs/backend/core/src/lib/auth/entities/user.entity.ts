export class User {
  id!: string;
  username!: string;
  roles!: string[];
}


export class UserWithPassword extends User {
  password!: string;
}