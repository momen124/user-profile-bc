import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
class LocalizedName {
  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;
}

@ObjectType()
class NationalId {
  @Field()
  idNumber: string;

  @Field()
  expiryDate: string; // Keep as string if Date is not supported
}

@ObjectType()
class Country {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}

@ObjectType()
class Nationality {
  @Field(() => Country)
  country: Country;

  @Field(() => Int)
  countryId: number;
}

@ObjectType()
class MaritalStatus {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}

@ObjectType()
export class UserType {
  @Field(() => Int)
  id: number;

  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;

  @Field(() => LocalizedName)
  localizedName: LocalizedName;

  @Field(() => NationalId)
  nationalId: NationalId;

  @Field(() => [Nationality])
  nationalities: Nationality[];

  @Field(() => MaritalStatus)
  maritalStatus: MaritalStatus;

  @Field()
  dependants: string;

  @Field({ nullable: true })
  employmentCode?: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  gender?: string;

  @Field({ nullable: true })
  passportNumber?: string;

  @Field({ nullable: true })
  passportIssueDate?: string;

  @Field({ nullable: true })
  passportExpiryDate?: string;
}
