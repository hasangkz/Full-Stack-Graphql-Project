import { ApolloClient, InMemoryCache } from '@apollo/client';

import { gql } from '@apollo/client';

export const GET_MACHINES = gql`
  query getMachines {
    machines {
      id
      name
      machineStat {
        id
        averageCycle
        idealCycle
        status
        prodAmount
        defectAmount
        workDuration
        failureDuration
        availability
        performance
        quality
        oee
      }
      operator {
        username
        first_name
        last_name
      }
    }
  }
`;

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

export default client;
