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
          type
          createdAt
          updatedAt
          contractBeardRemovalsId
          progressBeardRemovalsId
          owner
        }
        nextToken
      }
      type
      createdAt
      updatedAt
      owner
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
        type
        createdAt
        updatedAt
        owner
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
      type
      createdAt
      updatedAt
      contractBeardRemovalsId
      progressBeardRemovalsId
      owner
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
        type
        createdAt
        updatedAt
        contractBeardRemovalsId
        progressBeardRemovalsId
        owner
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
          type
          createdAt
          updatedAt
          contractBeardRemovalsId
          progressBeardRemovalsId
          owner
        }
        nextToken
      }
      type
      createdAt
      updatedAt
      owner
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
        type
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const contractsByDate = /* GraphQL */ `
  query ContractsByDate(
    $type: String
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelContractFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contractsByDate(
      type: $type
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        date
        fee
        beardRemovals {
          nextToken
        }
        type
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const beardRemovalsByArea = /* GraphQL */ `
  query BeardRemovalsByArea(
    $type: String
    $area: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBeardRemovalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    beardRemovalsByArea(
      type: $type
      area: $area
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        area
        number
        type
        createdAt
        updatedAt
        contractBeardRemovalsId
        progressBeardRemovalsId
        owner
      }
      nextToken
    }
  }
`;
export const progressesByDate = /* GraphQL */ `
  query ProgressesByDate(
    $type: String
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProgressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    progressesByDate(
      type: $type
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        date
        beardRemovals {
          nextToken
        }
        type
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
