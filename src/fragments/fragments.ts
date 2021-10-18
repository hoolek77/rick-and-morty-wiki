import { gql } from '@apollo/client';

export const CORE_CHARACTER = gql`
  fragment CoreCharacter on Character {
    __typename
    id
    name
    species
    image
  }
`;

export const CORE_LOCATION = gql`
  fragment CoreLocation on Location {
    __typename
    id
    name
    type
  }
`;

export const CORE_EPISODE = gql`
  fragment CoreEpisode on Episode {
    __typename
    id
    name
    airDate: air_date
    episode
  }
`;
