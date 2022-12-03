import { useContractRead, useAccount } from "wagmi";
import DataDaoFactoryABI from "../constants/abi/DataDaoFactory.json";
import DataDaoABI from "../constants/abi/DataDao.json";
import Contracts from "../constants/contracts";
import { ethers } from "ethers";

const dataDaoFactoryAddress = Contracts.DataDAOFactory;
const chainID = 31415;

export const useSmartContract = () => {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://wallaby.node.glif.io/rpc/v0"
  );

  var privateKey =
    "dede2bb74dfc0048cc820fe667a88245c3602894c10b373f32bcd02c9e1322b0";
  var wallet = new ethers.Wallet(privateKey, provider);

  const dataDaoFactoryContract = new ethers.Contract(
    dataDaoFactoryAddress,
    DataDaoFactoryABI,
    wallet
  );

  const { address } = useAccount();

  const getAddress = () => {
    console.log(address);
    return address;
  };

  const createDataDao = async () => {
    console.log("creating your data dao");
    const tx = await dataDaoFactoryContract.createDataDao(address);
    console.log(tx);
    return tx;
  };

  const getContractBalance = async () => {
    console.log("fetching balance");
    const balance = await dataDaoFactoryContract.getContractBalance();
    console.log(parseInt(balance._hex, 16));
    return balance;
  };

  return {
    getAddress,
    createDataDao,
    getContractBalance,
  };
};
