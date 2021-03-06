/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createContract = /* GraphQL */ `
  mutation CreateContract($input: CreateContractInput!, $condition: ModelContractConditionInput) {
    createContract(input: $input, condition: $condition) {
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
export const updateContract = /* GraphQL */ `
  mutation UpdateContract($input: UpdateContractInput!, $condition: ModelContractConditionInput) {
    updateContract(input: $input, condition: $condition) {
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
export const deleteContract = /* GraphQL */ `
  mutation DeleteContract($input: DeleteContractInput!, $condition: ModelContractConditionInput) {
    deleteContract(input: $input, condition: $condition) {
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
export const createBeardRemoval = /* GraphQL */ `
  mutation CreateBeardRemoval(
    $input: CreateBeardRemovalInput!
    $condition: ModelBeardRemovalConditionInput
  ) {
    createBeardRemoval(input: $input, condition: $condition) {
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
export const updateBeardRemoval = /* GraphQL */ `
  mutation UpdateBeardRemoval(
    $input: UpdateBeardRemovalInput!
    $condition: ModelBeardRemovalConditionInput
  ) {
    updateBeardRemoval(input: $input, condition: $condition) {
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
export const deleteBeardRemoval = /* GraphQL */ `
  mutation DeleteBeardRemoval(
    $input: DeleteBeardRemovalInput!
    $condition: ModelBeardRemovalConditionInput
  ) {
    deleteBeardRemoval(input: $input, condition: $condition) {
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
export const createProgress = /* GraphQL */ `
  mutation CreateProgress($input: CreateProgressInput!, $condition: ModelProgressConditionInput) {
    createProgress(input: $input, condition: $condition) {
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
export const updateProgress = /* GraphQL */ `
  mutation UpdateProgress($input: UpdateProgressInput!, $condition: ModelProgressConditionInput) {
    updateProgress(input: $input, condition: $condition) {
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
export const deleteProgress = /* GraphQL */ `
  mutation DeleteProgress($input: DeleteProgressInput!, $condition: ModelProgressConditionInput) {
    deleteProgress(input: $input, condition: $condition) {
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
