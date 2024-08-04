import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class NationalIdInput {
  @Field()
  idNumber: string;

  @Field()
  expiryDate: string;
}

@InputType()
export class NationalityInput {
  @Field(() => Int)
  countryId: number;
}

@InputType()
export class MaritalStatusInput {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}

@InputType()
export class MilitaryStatusInput {
  @Field()
  name: string;
}

@InputType()
export class UpdateUserInput {
  @Field(() => NationalIdInput, { nullable: true })
  nationalId?: NationalIdInput;

  @Field({ nullable: true })
  employmentCode?: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  fatherName?: string;

  @Field({ nullable: true })
  grandfatherName?: string;

  @Field({ nullable: true })
  familyName?: string;

  @Field({ nullable: true })
  gender?: string;

  @Field(() => [NationalityInput], { nullable: 'items' })
  nationalities?: NationalityInput[];

  @Field({ nullable: true })
  passportNumber?: string;

  @Field(() => MaritalStatusInput, { nullable: true })
  maritalStatus?: MaritalStatusInput;

  @Field({ nullable: true })
  dependants?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  emergencyContactName?: string;

  @Field({ nullable: true })
  emergencyContactPhone?: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  drivingLicenseNumber?: string;

  @Field({ nullable: true })
  drivingLicenseExpiry?: string;

  @Field(() => MilitaryStatusInput, { nullable: true })
  militaryStatus?: MilitaryStatusInput;
}
