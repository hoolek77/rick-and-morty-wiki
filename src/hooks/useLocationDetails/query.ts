import { gql } from '@apollo/client';
import { CORE_CHARACTER, CORE_LOCATION } from 'fragments';

export const LOCATION_DETAILS_QUERY = gql`
  query LocationDetails($id: ID!) {
    location(id: $id) {
      ...CoreLocation
      dimension
      residents {
        ...CoreCharacter
      }
    }
  }
  ${CORE_CHARACTER}
  ${CORE_LOCATION}
`;
