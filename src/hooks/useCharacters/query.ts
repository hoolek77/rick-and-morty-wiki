import { gql } from '@apollo/client';
import { CORE_CHARACTER } from 'fragments';

export const CHARACTERS_QUERY = gql`
  query AllCharacters($page: Int!, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        ...CoreCharacter
      }
      info {
        next
      }
    }
  }
  ${CORE_CHARACTER}
`;
