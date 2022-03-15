/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateContract = /* GraphQL */ `
  subscription OnCreateContract($owner: String) {
    onCreateContract(owner: $owner) {
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
export const onUpdateContract = /* GraphQL */ `
  subscription OnUpdateContract($owner: String) {
    onUpdateContract(owner: $owner) {
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
export const onDeleteContract = /* GraphQL */ `
  subscription OnDeleteContract($owner: String) {
    onDeleteContract(owner: $owner) {
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
export const onCreateBeardRemoval = /* GraphQL */ `
  subscription OnCreateBeardRemoval($owner: String) {
    onCreateBeardRemoval(owner: $owner) {
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
export const onUpdateBeardRemoval = /* GraphQL */ `
  subscription OnUpdateBeardRemoval($owner: String) {
    onUpdateBeardRemoval(owner: $owner) {
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
export const onDeleteBeardRemoval = /* GraphQL */ `
  subscription OnDeleteBeardRemoval($owner: String) {
    onDeleteBeardRemoval(owner: $owner) {
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
export const onCreateProgress = /* GraphQL */ `
  subscription OnCreateProgress($owner: String) {
    onCreateProgress(owner: $owner) {
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
export const onUpdateProgress = /* GraphQL */ `
  subscription OnUpdateProgress($owner: String) {
    onUpdateProgress(owner: $owner) {
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
export const onDeleteProgress = /* GraphQL */ `
  subscription OnDeleteProgress($owner: String) {
    onDeleteProgress(owner: $owner) {
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
