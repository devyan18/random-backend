import { Person } from "./person.entity";

export interface User{
  username: string
  password: string
  email: string
  isActive: boolean
  person?: Person
}
