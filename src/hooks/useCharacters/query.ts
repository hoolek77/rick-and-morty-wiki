import { gql } from '@apollo/client';

export const CHARACTERS_QUERY = gql`
  query AllCharacters($page: Int!, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        __typename
        id
        name
        species
        image
      }
      info {
        next
      }
    }
  }
`;
