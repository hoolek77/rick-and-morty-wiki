import { gql } from '@apollo/client';

export const LOCATIONS_QUERY = gql`
  query AllLocations($page: Int!, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      results {
        __typename
        id
        name
        type
      }
      info {
        next
      }
    }
  }
`;
