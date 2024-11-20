import { Controller, Get, Param, Query } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('')
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  @Get('all')
  getAllTransactions() {
    return this.transactionsService.getAllTransactions();
  }

  @Get('eth')
  getTransactionsByHashes(
    @Query('transactionHashes') transactionHashes: string,
  ) {
    return this.transactionsService.getTransactionsByHashes(transactionHashes);
  }

  @Get('eth/:rlphex')
  getTransactionsByRlphex(@Param('rlphex') rlphex: string) {
    return this.transactionsService.getTransactionsByRlphex(rlphex);
  }
}
