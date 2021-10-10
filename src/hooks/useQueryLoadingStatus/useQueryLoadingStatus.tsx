import { useMemo } from 'react';

import { NetworkStatus } from '@apollo/client';

const isInitialLoadOrRefetchLoad = (networkStatus: NetworkStatus) => {
  return networkStatus === NetworkStatus.refetch || networkStatus === NetworkStatus.setVariables;
};

const isFetchMoreLoad = (networkStatus: NetworkStatus) => {
  return networkStatus === NetworkStatus.fetchMore;
};

export const useQueryLoadingStatus = (networkStatus: NetworkStatus) => {
  const isInitialOrRefetchLoading = useMemo(() => isInitialLoadOrRefetchLoad(networkStatus), [networkStatus]);
  const isFetchMoreLoading = useMemo(() => isFetchMoreLoad(networkStatus), [networkStatus]);

  return {
    isInitialOrRefetchLoading,
    isFetchMoreLoading,
  };
};
