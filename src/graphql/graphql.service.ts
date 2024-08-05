import { Injectable, NotFoundException } from '@nestjs/common';
import { UserType } from './DTO/user.type';
import { UpdateUserInput } from './DTO/UpdateUserInput';

@Injectable()
export class GraphqlService {
  private user: UserType = {
    id: 1,
    firstName: 'Zaria',
    fatherName: 'Edward',
    grandfatherName: 'Ernest',
    familyName: 'Willie',
    localizedName: {
      firstName: 'صفوان',
      fatherName: 'حمدان',
      grandfatherName: 'هشام',
      familyName: 'عباس',
    },
    nationalId: {
      idNumber: '1c1f3fde-0581-4afb-8c7e-abacf3bc5875',
      expiryDate: '2024-07-24T22:45:29.864Z',
    },
    nationalities: [
      {
        country: {
          id: 1016,
          name: 'Bolivia',
        },
        countryId: 1016,
      },
      {
        country: {
          id: 1117,
          name: 'Latvia',
        },
        countryId: 1117,
      },
      {
        country: {
          id: 1225,
          name: 'Virgin Islands, U.S.',
        },
        countryId: 1225,
      },
    ],
    maritalStatus: {
      id: 27,
      name: 'Divorced',
    },
    dependants: '60',
    title: 'Mr.',
    passportNumber: 'A12345678',
    passportExpiryDate: '2025-12-31',
    passportIssueDate: '2020-01-01',
    gender: 'Male',
    employmentCode: 'EMP123456',
  };

  private users = {
    1: this.user,
  };

  getUser(id: number): UserType {
    const user = this.users[id];
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  updateUser(id: number, input: UpdateUserInput): UserType {
    const user = this.users[id];
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    // Merge new data with existing user data
    const updatedUser = {
      ...user,
      ...input,
      localizedName: {
        ...user.localizedName,
        ...input.localizedName,
      },
      nationalId: {
        ...user.nationalId,
        ...input.nationalId,
      },
      nationalities:
        input.nationalities?.map((n) => ({ ...n })) || user.nationalities,
      maritalStatus: {
        ...user.maritalStatus,
        ...input.maritalStatus,
      },
      militaryStatus: input.militaryStatus || user.militaryStatus,
    };

    this.users[id] = updatedUser;
    return updatedUser;
  }
}
