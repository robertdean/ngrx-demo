import * as faker from 'faker/locale/en_US';
import { Client } from './clients/store/client.model';

const oneClient = (): Client => {
  return {
    id: faker.random.number(1000),
    name: faker.lorem.word(),
    status: faker.random.arrayElement([
      'ACTIVE',
      'ACTIVE',
      'ACTIVE',
      'SUSPENDED',
      'PENDING'
    ])
  };
};
interface User {
  id: number;
  fullname: string;
  networkname: string;
  photo: string;
}
const oneUser = (): User => {
  const fullname = faker.name.findName();
  return {
    id: faker.random.number(1000),
    fullname: fullname,
    networkname: '',
    photo: faker.image.avatar()
  };

  /*
    active: faker.random.boolean(),
    hostname: faker.internet.domainName(),
    category: array.random.arrayElement(['DOV', 'DDOS', 'DFS']),
    description: faker.lorem.sentence(),
    readyDate: faker.date.future(),
    domain: faker.internet.domainName()
  */
};

export const manyClients = (count = faker.random.number(100)) => {
  const res: Client[] = [];
  for (let i = 0; i < count; i++) {
    res.push(oneClient());
  }
  return res;
};

export const manyUsers = (count = faker.random.number(100)) => {
  const res: User[] = [];
  for (let i = 0; i < count; i++) {
    res.push(oneUser());
  }
  return res;
};
