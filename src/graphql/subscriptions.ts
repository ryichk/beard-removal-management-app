/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateContract = /* GraphQL */ `
  subscription OnCreateContract {
    onCreateContract {
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
export const onUpdateContract = /* GraphQL */ `
  subscription OnUpdateContract {
    onUpdateContract {
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
export const onDeleteContract = /* GraphQL */ `
  subscription OnDeleteContract {
    onDeleteContract {
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
export const onCreateBeardRemoval = /* GraphQL */ `
  subscription OnCreateBeardRemoval {
    onCreateBeardRemoval {
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
export const onUpdateBeardRemoval = /* GraphQL */ `
  subscription OnUpdateBeardRemoval {
    onUpdateBeardRemoval {
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
export const onDeleteBeardRemoval = /* GraphQL */ `
  subscription OnDeleteBeardRemoval {
    onDeleteBeardRemoval {
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
export const onCreateProgress = /* GraphQL */ `
  subscription OnCreateProgress {
    onCreateProgress {
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
export const onUpdateProgress = /* GraphQL */ `
  subscription OnUpdateProgress {
    onUpdateProgress {
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
export const onDeleteProgress = /* GraphQL */ `
  subscription OnDeleteProgress {
    onDeleteProgress {
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
