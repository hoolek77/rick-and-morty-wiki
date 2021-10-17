import { useQuery } from '@apollo/client';

import { LocationDetailsVariables } from './__generated__/LocationDetails';
import { LOCATION_DETAILS_QUERY } from './query';

export interface LocationDetailsLocationResidents {
  __typename: 'Character';
  id: string;
  name: string;
  image: string;
  species: string;
}

export interface LocationDetailsLocation {
  __typename: 'Location';
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: LocationDetailsLocationResidents[];
}

export interface LocationDetails {
  location: LocationDetailsLocation;
}

export const useLocationDetails = (variables: LocationDetailsVariables) => {
  const { data, loading, error } = useQuery<LocationDetails, LocationDetailsVariables>(LOCATION_DETAILS_QUERY, {
    variables,
  });

  return {
    data,
    loading,
    error,
  };
};
