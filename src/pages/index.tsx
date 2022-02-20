import type { GraphQLResult } from '@aws-amplify/api-graphql';
import { API, graphqlOperation } from 'aws-amplify';
import { format, subHours } from 'date-fns';
import ja from 'date-fns/locale/ja';
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import type {
  BeardRemoval,
  BeardRemovalsByAreaQuery,
  Contract,
  CreateContractMutation,
  CreateBeardRemovalMutation,
  CreateProgressMutation,
  ContractsByDateQuery,
  Progress,
  ProgressesByDateQuery,
} from '../API';
import {
  createBeardRemoval,
  createContract,
  createProgress,
  deleteContract,
  deleteBeardRemoval,
  deleteProgress,
} from '../graphql/mutations';
import { contractsByDate, beardRemovalsByArea, progressesByDate } from '../graphql/queries';
import { Header } from '../layouts/Header';

registerLocale('ja', ja);

interface BeardRemovalState {
  ids?: Array<string>;
  area: string;
  number: number;
}

const Home: NextPage = () => {
  const [contracts, setContracts] = useState<Array<Contract>>([]);
  const [contractDate, setContractDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [fee, setFee] = useState<number | null>();
  const [faceArea, setFaceArea] = useState('');
  const [numberOfBeards, setNumberOfBeards] = useState<number | null | undefined>();
  const [beardRemovals, setBeardRemovals] = useState<Array<BeardRemovalState>>([]);
  const [contractBeardRemovals, setContractBeardRemovals] = useState<Array<BeardRemovalState>>([]);
  const [totalFee, setTotalFee] = useState(0);

  const [progresses, setProgresses] = useState<Array<Progress>>([]);
  const [removalDate, setRemovalDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [faceAreaResult, setFaceAreaResult] = useState('');
  const [numberOfBeardsResult, setNumberOfBeardsResult] = useState<number | null | undefined>();
  const [beardRemovalResults, setBeardRemovalResults] = useState<Array<BeardRemovalState>>([]);
  const [progressBeardRemovals, setProgressBeardRemovals] = useState<Array<BeardRemoval>>([]);
  const [totalProgressBeardRemovals, setTotalProgressBeardRemovals] = useState<
    Array<BeardRemovalState>
  >([]);
  const [remainingBeardRemovals, setRemainingBeardRemovals] = useState<Array<BeardRemovalState>>(
    [],
  );

  const handleSetDate = (
    date: Date | null,
    setDate: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    const formatDate = format(date ? date : new Date(), 'yyyy-MM-dd');
    setDate(formatDate);
  };

  const handleSetBeardRemovals = (
    area: string,
    number: number | null | undefined,
    setBeardRemovalsState: React.Dispatch<React.SetStateAction<Array<BeardRemovalState>>>,
    setArea: React.Dispatch<React.SetStateAction<string>>,
    setNumber: React.Dispatch<React.SetStateAction<number | null | undefined>>,
  ) => {
    if (area && number) {
      setBeardRemovalsState((prev) => [...prev, { area, number }]);
      setArea('');
      setNumber(null);
    }
  };

  const handleCreateContract = async () => {
    const response = (await API.graphql(
      graphqlOperation(createContract, {
        input: {
          fee,
          date: contractDate,
          type: 'Contract',
        },
      }),
    )) as GraphQLResult<CreateContractMutation>;
    const createContractData = response?.data?.createContract;

    if (createContractData) setContracts((prev) => [...prev, createContractData]);

    return createContractData ? createContractData.id : '';
  };

  const handleDeleteContract = async (id: string) => {
    try {
      await API.graphql(
        graphqlOperation(deleteContract, {
          input: {
            id: id,
          },
        }),
      );
      setContracts((prev) => prev.filter((value) => value.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSetBeardRemovalResults = async (
    models: Array<BeardRemovalState>,
    type: string,
    contractId: string,
    progressId: string,
    setModels: React.Dispatch<React.SetStateAction<Array<BeardRemovalState>>>,
  ) => {
    for (const model of models) {
      let params;
      if (contractId) {
        params = {
          type,
          area: model.area,
          number: model.number,
          contractBeardRemovalsId: contractId,
        };
      } else if (progressId) {
        params = {
          type,
          area: model.area,
          number: model.number,
          progressBeardRemovalsId: progressId,
        };
      }

      const response = (await API.graphql(
        graphqlOperation(createBeardRemoval, {
          input: params,
        }),
      )) as GraphQLResult<CreateBeardRemovalMutation>;
      setModels((prev) => [...prev, response?.data?.createBeardRemoval as BeardRemovalState]);
    }
  };

  const handleDeleteBeardRemoval = async (ids: Array<string>, area: string) => {
    try {
      for (const id of ids) {
        await API.graphql(
          graphqlOperation(deleteBeardRemoval, {
            input: {
              id: id,
            },
          }),
        );
        setContractBeardRemovals((prev) => prev.filter((value) => value.area !== area));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateProgress = async () => {
    const response = (await API.graphql(
      graphqlOperation(createProgress, {
        input: {
          date: removalDate,
          type: 'Progress',
        },
      }),
    )) as GraphQLResult<CreateProgressMutation>;
    const createProgressData = response?.data?.createProgress;
    if (createProgressData) setProgresses((prev) => [...prev, createProgressData]);

    return createProgressData ? createProgressData.id : '';
  };

  const handleDeleteProgress = async (id: string) => {
    try {
      await API.graphql(
        graphqlOperation(deleteProgress, {
          input: {
            id: id,
          },
        }),
      );
      setProgresses((prev) => prev.filter((value) => value.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const init = async () => {
      const listContractsResponse = (await API.graphql(
        graphqlOperation(contractsByDate, { type: 'Contract' }),
      )) as GraphQLResult<ContractsByDateQuery>;
      const contractByDateData = listContractsResponse.data?.contractsByDate;
      if (contractByDateData) {
        setContracts(contractByDateData.items as Array<Contract>);
        for (const contract of contractByDateData.items) {
          setTotalFee((prev) => prev + contract.fee);
        }
      }

      const listProgressesResponse = (await API.graphql(
        graphqlOperation(progressesByDate, { type: 'Progress' }),
      )) as GraphQLResult<ProgressesByDateQuery>;
      const progressesByDateData = listProgressesResponse.data?.progressesByDate;
      if (progressesByDateData) setProgresses(progressesByDateData.items as Array<Progress>);

      const setBeardRemovalsInit = (
        items: Array<BeardRemoval>,
        setBeardRemovals: React.Dispatch<React.SetStateAction<Array<BeardRemovalState>>>,
      ) => {
        let id;
        let ids: Array<string> = [];
        let area = '';
        let number = 0;
        const beardRemovalsArray: Array<BeardRemovalState> = [];
        for (const item of items) {
          if (area === item.area) {
            ids = [...ids, item.id];
            number = number + item.number;
          } else if (area !== item.area && area) {
            const totalBeardRemoval = { ids, area, number };
            beardRemovalsArray.push(totalBeardRemoval);
            id = item.id;
            area = item.area;
            number = item.number;
          } else {
            id = item.id;
            ids = [id];
            area = item.area;
            number = item.number;
          }
        }
        const totalBeardRemoval = { area, number };
        beardRemovalsArray.push(totalBeardRemoval);
        setBeardRemovals(beardRemovalsArray);

        return beardRemovalsArray;
      };

      const listContractBeardRemovals = (await API.graphql({
        query: beardRemovalsByArea,
        variables: {
          filter: {
            contractBeardRemovalsId: {
              attributeExists: true,
              attributeType: 'string',
            },
          },
          type: 'ContractBeardRemoval',
        },
      })) as GraphQLResult<BeardRemovalsByAreaQuery>;

      const contractBeardRemovalsByAreaItems =
        listContractBeardRemovals?.data?.beardRemovalsByArea?.items;
      const contractBeardRemovalsArray = setBeardRemovalsInit(
        contractBeardRemovalsByAreaItems as Array<BeardRemoval>,
        setContractBeardRemovals,
      );

      const listProgressBeardRemovals = (await API.graphql({
        query: beardRemovalsByArea,
        variables: {
          filter: {
            progressBeardRemovalsId: {
              attributeExists: true,
              attributeType: 'string',
            },
          },
          type: 'ProgressBeardRemoval',
        },
      })) as GraphQLResult<BeardRemovalsByAreaQuery>;
      const progressBeardRemovalsByAreaItems =
        listProgressBeardRemovals?.data?.beardRemovalsByArea?.items;
      setProgressBeardRemovals(progressBeardRemovalsByAreaItems as Array<BeardRemoval>);
      const progressBeardRemovalsArray = setBeardRemovalsInit(
        progressBeardRemovalsByAreaItems as Array<BeardRemoval>,
        setTotalProgressBeardRemovals,
      );

      contractBeardRemovalsArray.forEach((contractBeardRemoval, index) => {
        if (contractBeardRemoval.area === progressBeardRemovalsArray[index]?.area) {
          setRemainingBeardRemovals((prev) => [
            ...prev,
            {
              area: contractBeardRemoval.area,
              number: contractBeardRemoval.number - progressBeardRemovalsArray[index].number,
            },
          ]);
        }
      });
    };
    init();
  }, []);

  return (
    <div className=''>
      <Head>
        <title>脱毛管理アプリ</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='m-5 mx-auto p-3 max-w-md'>
        <Header />
        <div className='mt-5'>
          <h2 className='text-lg font-bold'>契約内容</h2>
          <div className='grid grid-cols-5 gap-4'>
            <label className='label col-span-1'>
              <span className='label-text'>契約日</span>
            </label>
            <div className='col-span-4'>
              <DatePicker
                locale='ja'
                selected={contractDate ? subHours(new Date(contractDate), 9) : new Date()}
                onChange={(date) => handleSetDate(date, setContractDate)}
                customInput={
                  <span className='btn'>
                    {contractDate
                      ? format(new Date(contractDate), 'yyyy/MM/dd')
                      : format(new Date(), 'yyyy/MM/dd')}
                  </span>
                }
              />
            </div>
            <label className='label col-span-1'>
              <span className='label-text'>金額</span>
            </label>
            <input
              type='number'
              name='fee'
              value={fee ? fee : ''}
              className='col-span-3 input input-sm input-bordered'
              onChange={(event) => setFee(Number(event.target.value))}
            />
            円
            <div className='col-span-5 grid grid-cols-12'>
              <label className='label col-span-3'>
                <span className='label-text'>顔のエリア</span>
              </label>
              <input
                type='text'
                name='faceArea'
                value={faceArea}
                className='col-span-3 input input-sm input-bordered'
                onChange={(event) => setFaceArea(event.target.value)}
              />
              <label className='label col-span-2 justify-self-end'>
                <span className='label-text'>本数</span>
              </label>
              <input
                type='number'
                name='numberOfBeards'
                value={numberOfBeards ? String(numberOfBeards) : ''}
                className='col-span-3 input input-sm input-bordered'
                onChange={(event) => setNumberOfBeards(Number(event.target.value))}
              />
              <button
                className='mt-1 ml-2 btn btn-outline btn-square btn-xs'
                onClick={() =>
                  handleSetBeardRemovals(
                    faceArea,
                    numberOfBeards,
                    setBeardRemovals,
                    setFaceArea,
                    setNumberOfBeards,
                  )
                }
              >
                +
              </button>
            </div>
            {beardRemovals.map((beardRemoval, beardRemovalIndex) => (
              <div key={beardRemovalIndex} className='col-span-5'>
                <span className='mr-5'>{beardRemoval.area}</span>
                <span className='mr-5'>{beardRemoval.number}</span>本
                <button
                  className='ml-3 btn btn-outline btn-square btn-xs'
                  onClick={() =>
                    setBeardRemovals((prev) =>
                      prev.filter((value, index) => index !== beardRemovalIndex),
                    )
                  }
                >
                  -
                </button>
              </div>
            ))}
            <button
              className='col-span-2 btn btn-sm btn-primary'
              onClick={async () => {
                const createContractId = await handleCreateContract();
                handleSetBeardRemovalResults(
                  beardRemovals,
                  'ContractBeardRemoval',
                  createContractId,
                  '',
                  setContractBeardRemovals,
                );
                setFee(null);
                setBeardRemovals([]);
              }}
            >
              登録
            </button>
          </div>
          <div className='mt-10'>
            <h3 className='text-md font-bold'>契約金額</h3>
            {contracts.map((contract) => (
              <div key={contract.id} className='grid grid-cols-7'>
                <span className='mr-5 col-span-3'>
                  {format(new Date(contract.date), 'yyyy年MM月dd日')}
                </span>
                <span className='mr-5 col-span-3 justify-self-end'>
                  {contract.fee.toLocaleString()}円
                </span>
                <button
                  className='col-span-1 mt-1 ml-2 btn btn-outline btn-square btn-xs'
                  onClick={() => handleDeleteContract(contract.id)}
                >
                  -
                </button>
              </div>
            ))}
            <h4 className='font-bold'>合計金額</h4>
            <p>{totalFee.toLocaleString()}円</p>
          </div>
          <div className='mt-10'>
            <h3 className='text-md font-bold'>契約本数</h3>
            {contractBeardRemovals.map((contractBeardRemoval) => (
              <div key={contractBeardRemoval.area} className='grid grid-cols-7'>
                <span className='col-span-3 mr-5'>{contractBeardRemoval.area}</span>
                <span className='col-span-2 mr-5 justify-self-end'>
                  {contractBeardRemoval.number}本
                </span>
                <button
                  className='col-span-1 mt-1 ml-2 btn btn-outline btn-square btn-xs'
                  onClick={() =>
                    handleDeleteBeardRemoval(
                      contractBeardRemoval.ids as Array<string>,
                      contractBeardRemoval.area,
                    )
                  }
                >
                  -
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-10'>
          <h2 className='text-lg font-bold'>経過観測</h2>
          <div className='mt-2 grid grid-cols-5'>
            <label className='label col-span-1'>
              <span className='label-text'>実施日</span>
            </label>
            <div className='col-span-4'>
              <DatePicker
                locale='ja'
                selected={removalDate ? subHours(new Date(removalDate), 9) : new Date()}
                onChange={(date) => handleSetDate(date, setRemovalDate)}
                customInput={
                  <span className='btn'>
                    {removalDate
                      ? format(new Date(removalDate), 'yyyy/MM/dd')
                      : format(new Date(), 'yyyy/MM/dd')}
                  </span>
                }
              />
            </div>
            <div className='mt-2 col-span-5 grid grid-cols-12'>
              <label className='label col-span-3'>
                <span className='label-text'>顔のエリア</span>
              </label>
              <input
                type='text'
                name='faceArea'
                value={faceAreaResult}
                className='col-span-3 input input-sm input-bordered'
                onChange={(event) => setFaceAreaResult(event.target.value)}
              />
              <label className='label col-span-2 justify-self-end'>
                <span className='label-text'>本数</span>
              </label>
              <input
                type='number'
                name='numberOfBeards'
                value={numberOfBeardsResult ? String(numberOfBeardsResult) : ''}
                className='col-span-3 input input-sm input-bordered'
                onChange={(event) => setNumberOfBeardsResult(Number(event.target.value))}
              />
              <button
                className='mt-1 ml-2 btn btn-outline btn-square btn-xs'
                onClick={() =>
                  handleSetBeardRemovals(
                    faceAreaResult,
                    numberOfBeardsResult,
                    setBeardRemovalResults,
                    setFaceAreaResult,
                    setNumberOfBeardsResult,
                  )
                }
              >
                +
              </button>
            </div>
            {beardRemovalResults.map((beardRemoval, beardRemovalIndex) => (
              <div key={beardRemovalIndex} className='col-span-5'>
                <span className='mr-5'>{beardRemoval.area}</span>
                <span className='mr-5'>{beardRemoval.number}</span>本
                <button
                  className='ml-3 btn btn-outline btn-square btn-xs'
                  onClick={() =>
                    setBeardRemovalResults((prev) =>
                      prev.filter((value, index) => index !== beardRemovalIndex),
                    )
                  }
                >
                  -
                </button>
              </div>
            ))}
            <button
              className='mt-2 col-span-2 btn btn-sm btn-secondary'
              onClick={async () => {
                const createProgressId = await handleCreateProgress();
                handleSetBeardRemovalResults(
                  beardRemovalResults,
                  'ProgressBeardRemoval',
                  '',
                  createProgressId,
                  setTotalProgressBeardRemovals,
                );
                setBeardRemovalResults([]);
              }}
            >
              登録
            </button>
          </div>
          <div className='mt-10'>
            <h3 className='text-md font-bold'>脱毛した合計本数</h3>
            {totalProgressBeardRemovals.map((progressBeardRemoval, index) => (
              <div key={index} className='grid grid-cols-3'>
                <span className=''>{progressBeardRemoval.area}</span>
                <span className='justify-self-end'>{progressBeardRemoval.number}本</span>
              </div>
            ))}
          </div>
          <div className='mt-10'>
            <h3 className='text-md font-bold'>残りの本数</h3>
            {remainingBeardRemovals.map((remainingBeardRemoval) => (
              <div key={remainingBeardRemoval.area} className='grid grid-cols-3'>
                <span className=''>{remainingBeardRemoval.area}</span>
                <span className='justify-self-end'>{remainingBeardRemoval.number}本</span>
              </div>
            ))}
          </div>
          <div className='mt-10'>
            <h3 className='text-md font-bold'>実施記録</h3>
            {progresses.map((progress) => (
              <div key={progress.id}>
                <span>{format(new Date(progress.date), 'yyyy年MM月dd日')}</span>
                <button
                  className='col-span-1 mt-1 ml-2 btn btn-outline btn-square btn-xs'
                  onClick={() => {
                    handleDeleteProgress(progress.id);
                    for (const progressBeardRemoval of progressBeardRemovals) {
                      if (progressBeardRemoval.progressBeardRemovalsId === progress.id) {
                        API.graphql(
                          graphqlOperation(deleteBeardRemoval, {
                            input: {
                              id: progressBeardRemoval.id,
                            },
                          }),
                        );
                      }
                    }
                  }}
                >
                  -
                </button>
                {progressBeardRemovals.map((progressBeardRemoval) => {
                  if (progressBeardRemoval.progressBeardRemovalsId === progress.id) {
                    return (
                      <div
                        key={`${progress.date}${progressBeardRemoval.area}`}
                        className='grid grid-cols-7'
                      >
                        <span className='col-span-2'>{progressBeardRemoval.area}</span>
                        <span className='justify-self-end'>{progressBeardRemoval.number}本</span>
                      </div>
                    );
                  }
                })}
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className='mt-10 mb-5 text-center'>©︎ryichk 2022</footer>
    </div>
  );
};

export default Home;
