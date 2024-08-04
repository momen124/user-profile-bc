import { Resolver, Mutation, Args, Query, Int } from '@nestjs/graphql';
import { UserType, UpdateUserBasicInfoPayload } from './user.type';
import { GraphqlService } from './graphql.service';
import { UpdateUserBasicInfoInput } from './user.input';

@Resolver(() => UserType)
export class UserResolver {
  constructor(private readonly graphqlService: GraphqlService) {}

  @Query(() => UserType)
  async user(@Args('id', { type: () => Int }) id: number): Promise<UserType> {
    return this.graphqlService.getUser(id);
  }

  @Mutation(() => UpdateUserBasicInfoPayload)
  async updateUserBasicInfo(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdateUserBasicInfoInput,
  ): Promise<UpdateUserBasicInfoPayload> {
    const updatedUser = await this.graphqlService.updateUser(id, input);
    return updatedUser;
  }
}
