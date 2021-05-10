import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmPaymentDialogComponent } from '../confirm-payment-dialog/confirm-payment-dialog.component';
import { gsap, Power3 } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { DataserviceService } from '../services/dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css']
})
export class CashComponent implements OnInit {
  //dialog = false
  accountType = ''
  amount =''
  constructor(private dialog : MatDialog , private dataService : DataserviceService) { }

  ngOnInit(): void {
  this.accountType = this.dataService.getAccountType();  
  gsap.timeline().from('.note-card',{duration: 2 ,opacity : 0 , delay:0.5})
  gsap.timeline().from('#header',{ opacity : 0, scale :0 , ease:'back' , duration:1.5 ,delay:0.5})
  gsap.timeline().from('#atm img',{ y : 160, stagger :0.1 , duration: 1.5 ,ease :'back' ,delay:0.9})
  gsap.timeline().from('#atm1 img',{ y : 160, stagger :0.1 , duration: 1.5 ,ease :'back' ,delay: 1.2})
  gsap.timeline().from('#atm2 img',{ y : 160, stagger :0.1 , duration: 1.5 ,ease :'back' ,delay:1.5})
  gsap.timeline().from('#atm3 img',{ y : 160, stagger :0.1 , duration: 1.5 ,ease :'back' ,delay:1.6})
  gsap.timeline().from('#atm4 img',{ y : 160, stagger :0.1 , duration: 1.5 ,ease :'back' ,delay:1.8})
  
  gsap.timeline().from('.check-card1',{duration: 2 ,opacity : 0 , delay:0.5})
  gsap.timeline().from('#title1',{ opacity : 0, scale :0 , ease:'back' , duration:1.5 ,delay:0.5})
  gsap.timeline().from('#atm5 img',{ y : 160, stagger :0.1 , duration: 1.5 ,ease :'back' ,delay:0.9})
  gsap.timeline().from('#amount1',{ y : 160, stagger :0.1 , duration: 1.5 ,ease :'back' ,delay:0.9})
  }
  
  openDialog(data:string) {
    this.dataService.setAmmount(data)
    this.dialog.open(ConfirmPaymentDialogComponent);
  };


}
