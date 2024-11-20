import { Injectable } from '@nestjs/common';
import { Transaction } from './interfaces/transaction.interface';

@Injectable()
export class TransactionsService {
  private readonly transactions: Transaction[] = [];

  async getAllTransactions() {
    return this.transactions;
  }

  async getTransactionsByHashes(transactionHashes: string) {
    return this.transactions.filter(
      (transaction) => transaction.transactionHash === transactionHashes,
    );
  }

  async getTransactionsByRlphex(rlphex: string) {
    console.log('transactionHashes', rlphex);
    return 'Transactions by rlphex';
  }
}
