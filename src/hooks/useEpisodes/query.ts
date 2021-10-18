import { gql } from '@apollo/client';
import { CORE_EPISODE } from 'fragments/fragments';

export const EPISODES_QUERY = gql`
  query AllEpisodes($page: Int!, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      results {
        ...CoreEpisode
      }
      info {
        next
      }
    }
  }
  ${CORE_EPISODE}
`;
