import {
  InMemoryDbService,
  RequestInfo,
  ResponseOptions
} from 'angular-in-memory-web-api';
import { manyUsers, manyClients } from './faker.data';

// import { users } from './user-data';

const users = manyUsers(100);
const clients = manyClients(100);
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return { users, clients };
  }

  responseInterceptor(resOptions: ResponseOptions, reqInfo: RequestInfo) {
    resOptions.headers.set('x-test', 'test-header');
    const method = reqInfo.method.toUpperCase();
    const body = JSON.stringify(resOptions);
    console.log(`responseInterceptor: ${method} ${reqInfo.req.url}: \n${body}`);

    return resOptions;
  }
}
