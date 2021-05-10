import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OptionComponent } from './option/option.component';
import { PinComponent } from './pin/pin.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { CashComponent } from './cash/cash.component';
import { CheckbalanceComponent } from './checkbalance/checkbalance.component';
import { DepositComponent } from './deposit/deposit.component';
import { MoneytransferComponent } from './moneytransfer/moneytransfer.component';
import { LanguageComponent } from './language/language.component';
import { AccountTypeComponent } from './account-type/account-type.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmPaymentDialogComponent } from './confirm-payment-dialog/confirm-payment-dialog.component';
import { BalanceComponent } from './balance/balance.component';
import { FormsModule } from '@angular/forms';
import { CollectCashComponent } from './collect-cash/collect-cash.component';
import { DepositChequeComponent } from './deposit-cheque/deposit-cheque.component';
import { UserIdleModule } from 'angular-user-idle';
import { BnNgIdleService } from 'bn-ng-idle'; // import bn-ng-idle service


@NgModule({
  declarations: [
    AppComponent,
    OptionComponent,
    PinComponent,
    CashComponent,
    CheckbalanceComponent,
    DepositComponent,
    MoneytransferComponent,
    LanguageComponent,
    AccountTypeComponent,
    ConfirmPaymentDialogComponent,
    BalanceComponent,
    CollectCashComponent,
    DepositChequeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatDialogModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    UserIdleModule.forRoot({idle: 600, timeout: 300, ping: 120})
  ],
  providers: [BnNgIdleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
