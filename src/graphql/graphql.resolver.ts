import { Resolver, Mutation, Args, Query, Int } from '@nestjs/graphql';
import { GraphqlService } from './graphql.service';
import { UpdateUserInput } from './DTO/UpdateUserInput';
import { UserType } from './DTO/user.type';

@Resolver(() => UserType)
export class UserResolver {
  constructor(private readonly graphqlService: GraphqlService) {}

  @Query(() => UserType)
  async user(@Args('id', { type: () => Int }) id: number): Promise<UserType> {
    return this.graphqlService.getUser(id);
  }

  @Mutation(() => UserType)
  async updateUser(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdateUserInput,
  ): Promise<UserType> {
    return this.graphqlService.updateUser(id, input);
  }
}
