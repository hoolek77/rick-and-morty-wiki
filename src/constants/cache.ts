import { InMemoryCache } from '@apollo/client';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        characters: {
          // please don't delete me or I'm gonna break the app
          keyArgs: false,
          merge(existing = { results: [] }, incoming) {
            return {
              info: incoming.info,
              results: [...existing.results, ...incoming.results],
            };
          },
        },
      },
    },
  },
});
