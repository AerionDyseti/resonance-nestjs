import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'A character within a narrative.' })
export class Character {
  @Field(() => ID, { description: `This character's unique identifier.` })
  id: string;

  @Field({ description: `This character's name.` })
  name: string;

  @Field({ description: `The date (in UTC) this character was created.` })
  createdDate: Date;

  @Field({
    nullable: true,
    description: `The date (in UTC) this character was deleted. Null if character is not deleted.`,
  })
  deletedDate: Date;
}
