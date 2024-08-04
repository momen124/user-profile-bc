import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
class LocalizedNameInput {
  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;
}

@InputType()
class NationalIdInput {
  @Field()
  idNumber: string;

  @Field()
  expiryDate: string;
}

@InputType()
class NationalityInput {
  @Field(() => Int)
  countryId: number;
}

@InputType()
class MaritalStatusInput {
  @Field(() => Int)
  id: number;
}

@InputType()
export class UpdateUserBasicInfoInput {
  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;

  @Field(() => LocalizedNameInput)
  localizedName: LocalizedNameInput;

  @Field(() => NationalIdInput)
  nationalId: NationalIdInput;

  @Field(() => [NationalityInput])
  nationalities: NationalityInput[];

  @Field(() => MaritalStatusInput)
  maritalStatus: MaritalStatusInput;

  @Field()
  dependants: string;
}
