import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionsService {
  async getAllTransactions() {
    return 'All transactions';
  }

  async getTransactionsByHashes(transactionHashes: string) {
    console.log('transactionHashes', transactionHashes);
    return 'Transactions by hashes';
  }

  async getTransactionsByRlphex(rlphex: string) {
    console.log('transactionHashes', rlphex);
    return 'Transactions by rlphex';
  }
}
