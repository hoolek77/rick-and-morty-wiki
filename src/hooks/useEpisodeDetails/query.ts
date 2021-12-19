import { gql } from '@apollo/client';
import { CORE_CHARACTER } from 'fragments';

export const EPISODES_DETAILS_QUERY = gql`
  query EpisodeDetails($id: ID!) {
    episode(id: $id) {
      id
      name
      episode
      air_date
      characters {
        ...CoreCharacter
      }
    }
  }

  ${CORE_CHARACTER}
`;
