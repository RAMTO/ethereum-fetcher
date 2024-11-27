import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';

import { PrismaService } from '../prisma/prisma.service';

import { Transaction } from './interfaces/transaction.interface';

@Injectable()
export class TransactionsService {
  private readonly provider: ethers.JsonRpcProvider;

  constructor(private prismaService: PrismaService) {
    this.provider = new ethers.JsonRpcProvider(process.env.ETH_NODE_URL);
  }

  async getAllTransactions() {
    return this.prismaService.transaction.findMany();
  }

  async getTransactionsByHashes(transactionHashes: string) {
    const foundTransaction = await this.prismaService.transaction.findFirst({
      where: { transactionHash: transactionHashes },
    });

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

      await this.prismaService.transaction.create({ data: transactionData });

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
