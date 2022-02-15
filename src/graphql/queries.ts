/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContract = /* GraphQL */ `
  query GetContract($id: ID!) {
    getContract(id: $id) {
      id
      date
      fee
      beardRemovals {
        items {
          id
          area
          number
          createdAt
          updatedAt
          contractBeardRemovalsId
          progressBeardRemovalsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listContracts = /* GraphQL */ `
  query ListContracts($filter: ModelContractFilterInput, $limit: Int, $nextToken: String) {
    listContracts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        fee
        beardRemovals {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBeardRemoval = /* GraphQL */ `
  query GetBeardRemoval($id: ID!) {
    getBeardRemoval(id: $id) {
      id
      area
      number
      createdAt
      updatedAt
      contractBeardRemovalsId
      progressBeardRemovalsId
    }
  }
`;
export const listBeardRemovals = /* GraphQL */ `
  query ListBeardRemovals($filter: ModelBeardRemovalFilterInput, $limit: Int, $nextToken: String) {
    listBeardRemovals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        area
        number
        createdAt
        updatedAt
        contractBeardRemovalsId
        progressBeardRemovalsId
      }
      nextToken
    }
  }
`;
export const getProgress = /* GraphQL */ `
  query GetProgress($id: ID!) {
    getProgress(id: $id) {
      id
      date
      beardRemovals {
        items {
          id
          area
          number
          createdAt
          updatedAt
          contractBeardRemovalsId
          progressBeardRemovalsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProgresses = /* GraphQL */ `
  query ListProgresses($filter: ModelProgressFilterInput, $limit: Int, $nextToken: String) {
    listProgresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        beardRemovals {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
