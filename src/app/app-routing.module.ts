import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountTypeComponent } from './account-type/account-type.component';
import { BalanceComponent } from './balance/balance.component';
import { CashComponent } from './cash/cash.component';
import { CheckbalanceComponent } from './checkbalance/checkbalance.component';
import { CollectCashComponent } from './collect-cash/collect-cash.component';
import { DepositChequeComponent } from './deposit-cheque/deposit-cheque.component';
import { DepositComponent } from './deposit/deposit.component';
import { MoneytransferComponent } from './moneytransfer/moneytransfer.component';
import { OptionComponent } from './option/option.component';
import { PinComponent } from './pin/pin.component';

const routes: Routes = [
  { path: 'option', component: OptionComponent },
  { path: 'pin', component: PinComponent },
  {path : 'cash' , component : CashComponent},
  {path:'transfer' , component: MoneytransferComponent},
  {path:'deposit' , component: DepositComponent},
  {path:'checkBalance' , component : CheckbalanceComponent},
  {path:'accounttype' , component : AccountTypeComponent},
  {path:'balance' , component : BalanceComponent},
  {path:'depositCheque' , component : DepositChequeComponent},
  {path:'collectCash' , component : CollectCashComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
