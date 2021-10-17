import { useQuery } from '@apollo/client';

import { AllLocations_locations_info, AllLocationsVariables } from './__generated__/AllLocations';
import { LOCATIONS_QUERY } from './query';

export type LocationsResult = {
  id: string;
  name: string;
  type: string;
};

type Locations = {
  results: LocationsResult[];
  info: AllLocations_locations_info;
};

type AllLocations = {
  locations: Locations;
};

export const useLocations = () => {
  const { data, error, fetchMore, refetch, networkStatus } = useQuery<AllLocations, AllLocationsVariables>(
    LOCATIONS_QUERY,
    {
      variables: {
        page: 1,
      },
      notifyOnNetworkStatusChange: true,
    },
  );

  const next = data?.locations?.info?.next;

  const loadMoreLocations = () => {
    fetchMore({
      variables: { page: next },
    });
  };

  return {
    data: data?.locations?.results || [],
    error,
    loadMoreLocations,
    isNextPage: !!next,
    refetch,
    networkStatus,
  };
};
