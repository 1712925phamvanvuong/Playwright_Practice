import { faker } from '@faker-js/faker';
import user from './user';

export class GenerateUtils {
  generateUser(): user {
    const fname = faker.person.firstName();
    const lname = faker.person.lastName();
    return {
      id: faker.string.uuid(),
      name: fname + ' ' + lname,
      email: faker.internet.email({ firstName: fname, lastName: lname }),
      password: faker.internet.password(),
    };
  }

  generateListOfUser(totalUser: number = 3): user[] {
    return faker.helpers.multiple(this.generateUser, {
      count: totalUser,
    });
  }
}
