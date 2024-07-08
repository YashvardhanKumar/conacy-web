import { LocalDateTime } from 'neo4j-driver';

export class CreateUserDTO {
  id: string;
  email: string;
  name: string;
  username: string;
  hash: string;
  dob: Date;
}
