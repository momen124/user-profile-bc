import { Injectable, NotFoundException } from '@nestjs/common';
import { UserType } from './user.type';
import { UpdateUserBasicInfoInput } from './user.input';

@Injectable()
export class GraphqlService {
  private user: UserType = {
    id: 1,
    firstName: 'John',
    fatherName: 'Doe',
    grandfatherName: 'Smith',
    familyName: 'Smith',
    localizedName: {
      firstName: 'John',
      fatherName: 'Doe',
      grandfatherName: 'Smith',
      familyName: 'Smith',
    },
    nationalId: {
      idNumber: '1234567890',
      expiryDate: '2025-12-31',
    },
    nationalities: [
      {
        country: {
          id: 1,
          name: 'American',
        },
        countryId: 1,
      },
    ],
    maritalStatus: {
      id: 1,
      name: 'Single',
    },
    dependants: 'None',
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

  updateUser(id: number, input: UpdateUserBasicInfoInput): UserType {
    const user = this.users[id];
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    const updatedUser = { ...user, ...input };
    updatedUser.localizedName = input.localizedName;
    updatedUser.nationalId = input.nationalId;
    updatedUser.nationalities = input.nationalities.map(n => ({ country: { id: n.countryId, name: '' }, countryId: n.countryId }));
    updatedUser.maritalStatus = { id: input.maritalStatus.id, name: '' };
    this.users[id] = updatedUser;

    return updatedUser;
  }
}
