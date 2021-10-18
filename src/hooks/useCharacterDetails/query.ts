import { gql } from '@apollo/client';
import { CORE_CHARACTER } from 'fragments';

export const CHARACTER_DETAILS_QUERY = gql`
  query CharacterDetails($id: ID!) {
    character(id: $id) {
      ...CoreCharacter
      gender
      status
      origin {
        id
        name
      }
      type
      location {
        id
        name
      }
      episode {
        id
        name
        air_date
        episode
      }
    }
  }
  ${CORE_CHARACTER}
`;
