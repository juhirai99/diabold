import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-confirm-payment-dialog',
  templateUrl: './confirm-payment-dialog.component.html',
  styleUrls: ['./confirm-payment-dialog.component.css']
})
export class ConfirmPaymentDialogComponent implements OnInit {
  accountType = ''
  amount =''
  constructor(private route : Router ,private dataService: DataserviceService) { }

  ngOnInit(): void {
  this.accountType = this.dataService.getAccountType();  
  this.amount = this.dataService.getAmmount()
  };
  confirmPayment(){
    this.route.navigate(['/collectCash'])
  };
  
}
