import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'

let apolloClient: ApolloClient<NormalizedCacheObject>

export function initializeApollo(initialState = {}) {
  const apolloClientGlobal = apolloClient ?? createApolloClient()

  if (initialState) apolloClientGlobal.cache.restore(initialState)

  if (typeOfWindowIsUndefined()) return apolloClientGlobal

  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClient
}

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeOfWindowIsUndefined(),
    link: new HttpLink({ uri: 'http://localhost:1337/graphql' }),
    cache: new InMemoryCache()
  })
}

function typeOfWindowIsUndefined() {
  return typeof window === 'undefined'
}
