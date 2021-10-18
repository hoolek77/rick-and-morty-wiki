import { gql } from '@apollo/client';
import { CORE_LOCATION } from 'fragments';

export const LOCATIONS_QUERY = gql`
  query AllLocations($page: Int!, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      results {
        ...CoreLocation
      }
      info {
        next
      }
    }
  }
  ${CORE_LOCATION}
`;
