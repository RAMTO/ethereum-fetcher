import { Injectable } from '@nestjs/common';
import { Transaction } from './interfaces/transaction.interface';
import { ethers } from 'ethers';

@Injectable()
export class TransactionsService {
  private readonly transactions: Transaction[] = [];
  private readonly provider: ethers.JsonRpcProvider;

  constructor() {
    this.provider = new ethers.JsonRpcProvider(process.env.ETH_NODE_URL);
  }

  async getAllTransactions() {
    return this.transactions;
  }

  async getTransactionsByHashes(transactionHashes: string) {
    const foundTransaction = this.transactions.find(
      (transaction) => transaction.transactionHash === transactionHashes,
    );

    if (foundTransaction) {
      return foundTransaction;
    } else {
      const transactionRawData =
        await this.provider.getTransaction(transactionHashes);

      const transactionData: Transaction = {
        transactionHash: transactionRawData.hash,
        transactionStatus: transactionRawData.type,
        blockHash: transactionRawData.blockHash,
        blockNumber: transactionRawData.blockNumber,
        from: transactionRawData.from,
        to: transactionRawData.to,
        contractAddress: null,
        logsCount: 0,
        input: transactionRawData.data,
        value: transactionRawData.value.toString(),
      };

      this.transactions.push(transactionData);

      return transactionData;
    }
  }

  async getTransactionsByRlphex(rlphex: string) {
    console.log('transactionHashes', rlphex);
    return 'Transactions by rlphex';
  }

  async getTransactionData(transactionHash: string) {
    try {
      const transaction = await this.provider.getTransaction(transactionHash);

      return transaction;
    } catch (error) {
      console.log(error);
    }
  }
}
