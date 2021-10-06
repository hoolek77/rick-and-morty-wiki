import { gql } from '@apollo/client';

export const CHARACTER_DETAILS_QUERY = gql`
  query CharacterDetails($id: ID!) {
    character(id: $id) {
      id
      gender
      status
      species
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
      }
    }
  }
`;
