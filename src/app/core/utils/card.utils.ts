import { CardData, CardElement, CardEntity } from 'src/app/shared/card/typings/card';
import { ArticleEntity, ContestEntity, DealEntity, EventEntity, Maybe, OrganisationEntity, SurveyEntity, UserContextEntity } from "src/schema/schema";

export const dataToElement = (entity: CardEntity, data: CardData): CardElement | undefined => {
  switch(entity) {
    case 'ArticleEntity':
      return articleToCard(data as ArticleEntity);
    case 'ContestEntity':
      return contestToCard(data as ContestEntity);
    case 'DealEntity':
      return dealToCard(data as DealEntity);
    case 'EventEntity':
      return eventToCard(data as EventEntity);
    case 'OrganisationEntity':
      return organisationToCard(data as OrganisationEntity);
    case 'SurveyEntity': 
      return surveyToCard(data as SurveyEntity);
    case 'UserContextEntity': 
      return userToCard(data as UserContextEntity);
  }
}

export const articlesToCards = (entities?: Maybe<ArticleEntity[]>): CardElement[] | undefined =>
  entities?.map(entity => articleToCard(entity));

export const articleToCard = (entity?: Maybe<ArticleEntity>): CardElement => ({
  id: entity?.id,
  categoryTranslatables: entity?.category?.translatables,
  categoryTranslatableField: 'name',
  date: entity?.created,
  dateTime: false,
  creator: entity?.publicAuthor?.name ?? entity?.author?.user?.firstName,
  creatorImage: entity?.author?.titleImage,
  image: entity?.cardImage,
  textTranslatableField: 'shortDescription',
  titleTranslatableField: 'title',
  translatables: entity?.translatables,
});

export const contestsToCards = (entities?: Maybe<ContestEntity[]>): CardElement[] | undefined => 
  entities?.map(entity => contestToCard(entity));

export const contestToCard = (entity: Maybe<ContestEntity>): CardElement => ({
  id: entity?.id,
  image: entity?.cardImage,
  date: entity?.dueDate,
  dateTime: true,
  translatables: entity?.translatables,
  textTranslatableField: 'shortDescription',
  titleTranslatableField: 'name',
});

export const dealsToCards = (entities?: Maybe<DealEntity[]>): CardElement[] => {
  return entities?.map(entity => dealToCard(entity)) as CardElement[];
};

export const dealToCard = (entity: Maybe<DealEntity>): CardElement => ({
  id: entity?.id,
  creator: entity?.contact?.name,
  date: entity?.created,
  dateTime: true,
  creatorImage: entity?.creator?.titleImage,
  image: entity?.cardImage,
  textTranslatableField: 'shortDescription',
  translatables: entity?.translatables,
  titleTranslatableField: 'name',
});

export const eventsToCards = (entities?: Maybe<Maybe<EventEntity>[]>): CardElement[] | undefined =>
  entities?.map(entity => eventToCard(entity));

export const eventToCard = (entity?: Maybe<EventEntity>): CardElement => ({
  id: entity?.id,
  address: entity?.address,
  categoryTranslatables: entity?.category?.translatables,
  categoryTranslatableField: 'name',
  creator: entity?.contact?.name,
  creatorImage: entity?.creator?.titleImage,
  date: entity?.schedule?.startDate,
  dateTime: true,
  image: entity?.cardImage,
  textTranslatableField: 'shortDescription',
  titleTranslatableField: 'name',
  translatables: entity?.translatables,
});

export const organisationsToCards = (entities?: Maybe<OrganisationEntity[]>): CardElement[] | undefined =>
  entities?.map(entity => organisationToCard(entity));

export const organisationToCard = (entity?: Maybe<OrganisationEntity>): CardElement => ({
  id: entity?.id,
  email: entity?.contact?.email,
  creator: entity?.name,
  creatorImage: entity?.avatar,
  dateTime: true,
  translatables: entity?.translatables,
});

export const surveysToCards = (entities?: Maybe<SurveyEntity[]>): CardElement[] | undefined => 
  entities?.map(entity => surveyToCard(entity));

export const surveyToCard = (entity: Maybe<SurveyEntity>): CardElement => ({
  id: entity?.id,
  date: entity?.due_date,
  dateTime: true,
  image: entity?.cardImage,
  translatables: entity?.translatables,
  textTranslatableField: 'description',
  titleTranslatableField: 'name',
});

export const usersToCards = (entities?: Maybe<UserContextEntity[]>): CardElement[] | undefined => 
  entities?.map(entity => userToCard(entity));

export const userToCard = (entity?: Maybe<UserContextEntity>): CardElement => ({
  id: entity?.id,
  email: entity?.user?.email,
  creator: entity?.user?.lastName,
  creatorImage: entity?.avatar,
  dateTime: true,
});