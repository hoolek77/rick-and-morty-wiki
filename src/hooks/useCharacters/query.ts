import { gql } from '@apollo/client';

export const CHARACTERS_QUERY = gql`
  query AllCharacters($page: Int!) {
    characters(page: $page) {
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
