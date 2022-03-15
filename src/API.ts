/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateContractInput = {
  id?: string | null;
  date: string;
  fee: number;
  type: string;
};

export type ModelContractConditionInput = {
  date?: ModelStringInput | null;
  fee?: ModelIntInput | null;
  type?: ModelStringInput | null;
  and?: Array<ModelContractConditionInput | null> | null;
  or?: Array<ModelContractConditionInput | null> | null;
  not?: ModelContractConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Contract = {
  __typename: 'Contract';
  id: string;
  date: string;
  fee: number;
  beardRemovals?: ModelBeardRemovalConnection | null;
  type: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ModelBeardRemovalConnection = {
  __typename: 'ModelBeardRemovalConnection';
  items: Array<BeardRemoval>;
  nextToken?: string | null;
};

export type BeardRemoval = {
  __typename: 'BeardRemoval';
  id: string;
  area: string;
  number: number;
  type: string;
  createdAt: string;
  updatedAt: string;
  contractBeardRemovalsId?: string | null;
  progressBeardRemovalsId?: string | null;
  owner?: string | null;
};

export type UpdateContractInput = {
  id: string;
  date?: string | null;
  fee?: number | null;
  type?: string | null;
};

export type DeleteContractInput = {
  id: string;
};

export type CreateBeardRemovalInput = {
  id?: string | null;
  area: string;
  number: number;
  type: string;
  contractBeardRemovalsId?: string | null;
  progressBeardRemovalsId?: string | null;
};

export type ModelBeardRemovalConditionInput = {
  area?: ModelStringInput | null;
  number?: ModelIntInput | null;
  type?: ModelStringInput | null;
  and?: Array<ModelBeardRemovalConditionInput | null> | null;
  or?: Array<ModelBeardRemovalConditionInput | null> | null;
  not?: ModelBeardRemovalConditionInput | null;
  contractBeardRemovalsId?: ModelIDInput | null;
  progressBeardRemovalsId?: ModelIDInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateBeardRemovalInput = {
  id: string;
  area?: string | null;
  number?: number | null;
  type?: string | null;
  contractBeardRemovalsId?: string | null;
  progressBeardRemovalsId?: string | null;
};

export type DeleteBeardRemovalInput = {
  id: string;
};

export type CreateProgressInput = {
  id?: string | null;
  date: string;
  type: string;
};

export type ModelProgressConditionInput = {
  date?: ModelStringInput | null;
  type?: ModelStringInput | null;
  and?: Array<ModelProgressConditionInput | null> | null;
  or?: Array<ModelProgressConditionInput | null> | null;
  not?: ModelProgressConditionInput | null;
};

export type Progress = {
  __typename: 'Progress';
  id: string;
  date: string;
  beardRemovals?: ModelBeardRemovalConnection | null;
  type: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateProgressInput = {
  id: string;
  date?: string | null;
  type?: string | null;
};

export type DeleteProgressInput = {
  id: string;
};

export type ModelContractFilterInput = {
  id?: ModelIDInput | null;
  date?: ModelStringInput | null;
  fee?: ModelIntInput | null;
  type?: ModelStringInput | null;
  and?: Array<ModelContractFilterInput | null> | null;
  or?: Array<ModelContractFilterInput | null> | null;
  not?: ModelContractFilterInput | null;
};

export type ModelContractConnection = {
  __typename: 'ModelContractConnection';
  items: Array<Contract>;
  nextToken?: string | null;
};

export type ModelBeardRemovalFilterInput = {
  id?: ModelIDInput | null;
  area?: ModelStringInput | null;
  number?: ModelIntInput | null;
  type?: ModelStringInput | null;
  and?: Array<ModelBeardRemovalFilterInput | null> | null;
  or?: Array<ModelBeardRemovalFilterInput | null> | null;
  not?: ModelBeardRemovalFilterInput | null;
  contractBeardRemovalsId?: ModelIDInput | null;
  progressBeardRemovalsId?: ModelIDInput | null;
};

export type ModelProgressFilterInput = {
  id?: ModelIDInput | null;
  date?: ModelStringInput | null;
  type?: ModelStringInput | null;
  and?: Array<ModelProgressFilterInput | null> | null;
  or?: Array<ModelProgressFilterInput | null> | null;
  not?: ModelProgressFilterInput | null;
};

export type ModelProgressConnection = {
  __typename: 'ModelProgressConnection';
  items: Array<Progress>;
  nextToken?: string | null;
};

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export enum ModelSortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type CreateContractMutationVariables = {
  input: CreateContractInput;
  condition?: ModelContractConditionInput | null;
};

export type CreateContractMutation = {
  createContract?: {
    __typename: 'Contract';
    id: string;
    date: string;
    fee: number;
    beardRemovals?: {
      __typename: 'ModelBeardRemovalConnection';
      items: Array<{
        __typename: 'BeardRemoval';
        id: string;
        area: string;
        number: number;
        type: string;
        createdAt: string;
        updatedAt: string;
        contractBeardRemovalsId?: string | null;
        progressBeardRemovalsId?: string | null;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    type: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type UpdateContractMutationVariables = {
  input: UpdateContractInput;
  condition?: ModelContractConditionInput | null;
};

export type UpdateContractMutation = {
  updateContract?: {
    __typename: 'Contract';
    id: string;
    date: string;
    fee: number;
    beardRemovals?: {
      __typename: 'ModelBeardRemovalConnection';
      items: Array<{
        __typename: 'BeardRemoval';
        id: string;
        area: string;
        number: number;
        type: string;
        createdAt: string;
        updatedAt: string;
        contractBeardRemovalsId?: string | null;
        progressBeardRemovalsId?: string | null;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    type: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type DeleteContractMutationVariables = {
  input: DeleteContractInput;
  condition?: ModelContractConditionInput | null;
};

export type DeleteContractMutation = {
  deleteContract?: {
    __typename: 'Contract';
    id: string;
    date: string;
    fee: number;
    beardRemovals?: {
      __typename: 'ModelBeardRemovalConnection';
      items: Array<{
        __typename: 'BeardRemoval';
        id: string;
        area: string;
        number: number;
        type: string;
        createdAt: string;
        updatedAt: string;
        contractBeardRemovalsId?: string | null;
        progressBeardRemovalsId?: string | null;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    type: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type CreateBeardRemovalMutationVariables = {
  input: CreateBeardRemovalInput;
  condition?: ModelBeardRemovalConditionInput | null;
};

export type CreateBeardRemovalMutation = {
  createBeardRemoval?: {
    __typename: 'BeardRemoval';
    id: string;
    area: string;
    number: number;
    type: string;
    createdAt: string;
    updatedAt: string;
    contractBeardRemovalsId?: string | null;
    progressBeardRemovalsId?: string | null;
    owner?: string | null;
  } | null;
};

export type UpdateBeardRemovalMutationVariables = {
  input: UpdateBeardRemovalInput;
  condition?: ModelBeardRemovalConditionInput | null;
};

export type UpdateBeardRemovalMutation = {
  updateBeardRemoval?: {
    __typename: 'BeardRemoval';
    id: string;
    area: string;
    number: number;
    type: string;
    createdAt: string;
    updatedAt: string;
    contractBeardRemovalsId?: string | null;
    progressBeardRemovalsId?: string | null;
    owner?: string | null;
  } | null;
};

export type DeleteBeardRemovalMutationVariables = {
  input: DeleteBeardRemovalInput;
  condition?: ModelBeardRemovalConditionInput | null;
};

export type DeleteBeardRemovalMutation = {
  deleteBeardRemoval?: {
    __typename: 'BeardRemoval';
    id: string;
    area: string;
    number: number;
    type: string;
    createdAt: string;
    updatedAt: string;
    contractBeardRemovalsId?: string | null;
    progressBeardRemovalsId?: string | null;
    owner?: string | null;
  } | null;
};

export type CreateProgressMutationVariables = {
  input: CreateProgressInput;
  condition?: ModelProgressConditionInput | null;
};

export type CreateProgressMutation = {
  createProgress?: {
    __typename: 'Progress';
    id: string;
    date: string;
    beardRemovals?: {
      __typename: 'ModelBeardRemovalConnection';
      items: Array<{
        __typename: 'BeardRemoval';
        id: string;
        area: string;
        number: number;
        type: string;
        createdAt: string;
        updatedAt: string;
        contractBeardRemovalsId?: string | null;
        progressBeardRemovalsId?: string | null;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    type: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type UpdateProgressMutationVariables = {
  input: UpdateProgressInput;
  condition?: ModelProgressConditionInput | null;
};

export type UpdateProgressMutation = {
  updateProgress?: {
    __typename: 'Progress';
    id: string;
    date: string;
    beardRemovals?: {
      __typename: 'ModelBeardRemovalConnection';
      items: Array<{
        __typename: 'BeardRemoval';
        id: string;
        area: string;
        number: number;
        type: string;
        createdAt: string;
        updatedAt: string;
        contractBeardRemovalsId?: string | null;
        progressBeardRemovalsId?: string | null;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    type: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type DeleteProgressMutationVariables = {
  input: DeleteProgressInput;
  condition?: ModelProgressConditionInput | null;
};

export type DeleteProgressMutation = {
  deleteProgress?: {
    __typename: 'Progress';
    id: string;
    date: string;
    beardRemovals?: {
      __typename: 'ModelBeardRemovalConnection';
      items: Array<{
        __typename: 'BeardRemoval';
        id: string;
        area: string;
        number: number;
        type: string;
        createdAt: string;
        updatedAt: string;
        contractBeardRemovalsId?: string | null;
        progressBeardRemovalsId?: string | null;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    type: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type GetContractQueryVariables = {
  id: string;
};

export type GetContractQuery = {
  getContract?: {
    __typename: 'Contract';
    id: string;
    date: string;
    fee: number;
    beardRemovals?: {
      __typename: 'ModelBeardRemovalConnection';
      items: Array<{
        __typename: 'BeardRemoval';
        id: string;
        area: string;
        number: number;
        type: string;
        createdAt: string;
        updatedAt: string;
        contractBeardRemovalsId?: string | null;
        progressBeardRemovalsId?: string | null;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    type: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type ListContractsQueryVariables = {
  filter?: ModelContractFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListContractsQuery = {
  listContracts?: {
    __typename: 'ModelContractConnection';
    items: Array<{
      __typename: 'Contract';
      id: string;
      date: string;
      fee: number;
      beardRemovals?: {
        __typename: 'ModelBeardRemovalConnection';
        nextToken?: string | null;
      } | null;
      type: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    }>;
    nextToken?: string | null;
  } | null;
};

export type GetBeardRemovalQueryVariables = {
  id: string;
};

export type GetBeardRemovalQuery = {
  getBeardRemoval?: {
    __typename: 'BeardRemoval';
    id: string;
    area: string;
    number: number;
    type: string;
    createdAt: string;
    updatedAt: string;
    contractBeardRemovalsId?: string | null;
    progressBeardRemovalsId?: string | null;
    owner?: string | null;
  } | null;
};

export type ListBeardRemovalsQueryVariables = {
  filter?: ModelBeardRemovalFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListBeardRemovalsQuery = {
  listBeardRemovals?: {
    __typename: 'ModelBeardRemovalConnection';
    items: Array<{
      __typename: 'BeardRemoval';
      id: string;
      area: string;
      number: number;
      type: string;
      createdAt: string;
      updatedAt: string;
      contractBeardRemovalsId?: string | null;
      progressBeardRemovalsId?: string | null;
      owner?: string | null;
    }>;
    nextToken?: string | null;
  } | null;
};

export type GetProgressQueryVariables = {
  id: string;
};

export type GetProgressQuery = {
  getProgress?: {
    __typename: 'Progress';
    id: string;
    date: string;
    beardRemovals?: {
      __typename: 'ModelBeardRemovalConnection';
      items: Array<{
        __typename: 'BeardRemoval';
        id: string;
        area: string;
        number: number;
        type: string;
        createdAt: string;
        updatedAt: string;
        contractBeardRemovalsId?: string | null;
        progressBeardRemovalsId?: string | null;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    type: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type ListProgressesQueryVariables = {
  filter?: ModelProgressFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListProgressesQuery = {
  listProgresses?: {
    __typename: 'ModelProgressConnection';
    items: Array<{
      __typename: 'Progress';
      id: string;
      date: string;
      beardRemovals?: {
        __typename: 'ModelBeardRemovalConnection';
        nextToken?: string | null;
      } | null;
      type: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    }>;
    nextToken?: string | null;
  } | null;
};

export type ContractsByDateQueryVariables = {
  type?: string | null;
  date?: ModelStringKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelContractFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ContractsByDateQuery = {
  contractsByDate?: {
    __typename: 'ModelContractConnection';
    items: Array<{
      __typename: 'Contract';
      id: string;
      date: string;
      fee: number;
      beardRemovals?: {
        __typename: 'ModelBeardRemovalConnection';
        nextToken?: string | null;
      } | null;
      type: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    }>;
    nextToken?: string | null;
  } | null;
};

export type BeardRemovalsByAreaQueryVariables = {
  type?: string | null;
  area?: ModelStringKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelBeardRemovalFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type BeardRemovalsByAreaQuery = {
  beardRemovalsByArea?: {
    __typename: 'ModelBeardRemovalConnection';
    items: Array<{
      __typename: 'BeardRemoval';
      id: string;
      area: string;
      number: number;
      type: string;
      createdAt: string;
      updatedAt: string;
      contractBeardRemovalsId?: string | null;
      progressBeardRemovalsId?: string | null;
      owner?: string | null;
    }>;
    nextToken?: string | null;
  } | null;
};

export type ProgressesByDateQueryVariables = {
  type?: string | null;
  date?: ModelStringKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelProgressFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ProgressesByDateQuery = {
  progressesByDate?: {
    __typename: 'ModelProgressConnection';
    items: Array<{
      __typename: 'Progress';
      id: string;
      date: string;
      beardRemovals?: {
        __typename: 'ModelBeardRemovalConnection';
        nextToken?: string | null;
      } | null;
      type: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    }>;
    nextToken?: string | null;
  } | null;
};

export type OnCreateContractSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateContractSubscription = {
  onCreateContract?: {
    __typename: 'Contract';
    id: string;
    date: string;
    fee: number;
    beardRemovals?: {
      __typename: 'ModelBeardRemovalConnection';
      items: Array<{
        __typename: 'BeardRemoval';
        id: string;
        area: string;
        number: number;
        type: string;
        createdAt: string;
        updatedAt: string;
        contractBeardRemovalsId?: string | null;
        progressBeardRemovalsId?: string | null;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    type: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnUpdateContractSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdateContractSubscription = {
  onUpdateContract?: {
    __typename: 'Contract';
    id: string;
    date: string;
    fee: number;
    beardRemovals?: {
      __typename: 'ModelBeardRemovalConnection';
      items: Array<{
        __typename: 'BeardRemoval';
        id: string;
        area: string;
        number: number;
        type: string;
        createdAt: string;
        updatedAt: string;
        contractBeardRemovalsId?: string | null;
        progressBeardRemovalsId?: string | null;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    type: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnDeleteContractSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeleteContractSubscription = {
  onDeleteContract?: {
    __typename: 'Contract';
    id: string;
    date: string;
    fee: number;
    beardRemovals?: {
      __typename: 'ModelBeardRemovalConnection';
      items: Array<{
        __typename: 'BeardRemoval';
        id: string;
        area: string;
        number: number;
        type: string;
        createdAt: string;
        updatedAt: string;
        contractBeardRemovalsId?: string | null;
        progressBeardRemovalsId?: string | null;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    type: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnCreateBeardRemovalSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateBeardRemovalSubscription = {
  onCreateBeardRemoval?: {
    __typename: 'BeardRemoval';
    id: string;
    area: string;
    number: number;
    type: string;
    createdAt: string;
    updatedAt: string;
    contractBeardRemovalsId?: string | null;
    progressBeardRemovalsId?: string | null;
    owner?: string | null;
  } | null;
};

export type OnUpdateBeardRemovalSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdateBeardRemovalSubscription = {
  onUpdateBeardRemoval?: {
    __typename: 'BeardRemoval';
    id: string;
    area: string;
    number: number;
    type: string;
    createdAt: string;
    updatedAt: string;
    contractBeardRemovalsId?: string | null;
    progressBeardRemovalsId?: string | null;
    owner?: string | null;
  } | null;
};

export type OnDeleteBeardRemovalSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeleteBeardRemovalSubscription = {
  onDeleteBeardRemoval?: {
    __typename: 'BeardRemoval';
    id: string;
    area: string;
    number: number;
    type: string;
    createdAt: string;
    updatedAt: string;
    contractBeardRemovalsId?: string | null;
    progressBeardRemovalsId?: string | null;
    owner?: string | null;
  } | null;
};

export type OnCreateProgressSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateProgressSubscription = {
  onCreateProgress?: {
    __typename: 'Progress';
    id: string;
    date: string;
    beardRemovals?: {
      __typename: 'ModelBeardRemovalConnection';
      items: Array<{
        __typename: 'BeardRemoval';
        id: string;
        area: string;
        number: number;
        type: string;
        createdAt: string;
        updatedAt: string;
        contractBeardRemovalsId?: string | null;
        progressBeardRemovalsId?: string | null;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    type: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnUpdateProgressSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdateProgressSubscription = {
  onUpdateProgress?: {
    __typename: 'Progress';
    id: string;
    date: string;
    beardRemovals?: {
      __typename: 'ModelBeardRemovalConnection';
      items: Array<{
        __typename: 'BeardRemoval';
        id: string;
        area: string;
        number: number;
        type: string;
        createdAt: string;
        updatedAt: string;
        contractBeardRemovalsId?: string | null;
        progressBeardRemovalsId?: string | null;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    type: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnDeleteProgressSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeleteProgressSubscription = {
  onDeleteProgress?: {
    __typename: 'Progress';
    id: string;
    date: string;
    beardRemovals?: {
      __typename: 'ModelBeardRemovalConnection';
      items: Array<{
        __typename: 'BeardRemoval';
        id: string;
        area: string;
        number: number;
        type: string;
        createdAt: string;
        updatedAt: string;
        contractBeardRemovalsId?: string | null;
        progressBeardRemovalsId?: string | null;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    type: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};
