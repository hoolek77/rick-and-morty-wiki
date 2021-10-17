import React from 'react';

import { ApolloError } from '@apollo/client';
import { ErrorMessage } from 'components/ErrorMessage';
import { ListWrapper } from 'components/ListWrapper';
import { Loader } from 'components/Loader';
import { TextCard } from 'components/TextCard';
import { LocationsResult } from 'hooks/useLocations';

interface Props {
  locations: LocationsResult[];
  loading: boolean;
  error?: ApolloError;
}

export const LocationsList = ({ locations, loading, error }: Props) => {
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage>There is nothing here 😵‍💫</ErrorMessage>;
  }

  return (
    <ListWrapper>
      {locations?.map(({ id, name, type }) => {
        return <TextCard title={name} description={type} id={id} path="locations" key={id} />;
      })}
    </ListWrapper>
  );
};
