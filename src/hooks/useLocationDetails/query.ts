import { gql } from '@apollo/client';

export const LOCATION_DETAILS_QUERY = gql`
  query LocationDetails($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        name
        image
        species
      }
    }
  }
`;
