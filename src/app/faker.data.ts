import * as faker from 'faker/locale/en_US';
import { Client } from './clients/store/client.model';
import { Team } from './teams/team.model';

const oneTeam = (i: string): Team => {
  return {
    id: i,
    name: faker.lorem.word(),
    members: [],
    status: faker.random.arrayElement([
      'ACTIVE',
      'ACTIVE',
      'ACTIVE',
      'SUSPENDED',
      'PENDING'
    ])
  };
};
const oneClient = (i: string): Client => {
  return {
    id: i,
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
export const manyTeams = (count = faker.random.number(10)) => {
  console.log('generating fake teams...');
  const res: Team[] = [];
  for (let i = 0; i < count; i++) {
    res.push(oneTeam((i + 1).toString()));
  }
  return res;
};

export const manyClients = (count = faker.random.number(100)) => {
  console.log('generating fake clients...');
  const res: Client[] = [];
  for (let i = 0; i < count; i++) {
    res.push(oneClient((i + 1).toString()));
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
