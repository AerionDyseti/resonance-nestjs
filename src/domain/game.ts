import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'A game or narrative.' })
export class Character {
  @Field(() => ID, { description: `This game's unique Identifier.` })
  id: string;

  @Field({ description: `This game's name.` })
  name: string;

  @Field({
    nullable: true,
    description: `(Optional) A brief description of this game.`,
  })
  description?: string;

  @Field({ description: `The date (in UTC) this game was created.` })
  createdDate: Date;

  @Field({
    nullable: true,
    description: `The date (in UTC) this game was deleted, null if the game has not been deleted.`,
  })
  deletionDate?: Date;

  @Field(() => [Character])
  characters: Character;
}
