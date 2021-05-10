import { Component, OnInit } from '@angular/core';
import { gsap, Power3 } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

@Component({
  selector: 'app-moneytransfer',
  templateUrl: './moneytransfer.component.html',
  styleUrls: ['./moneytransfer.component.css']
})
export class MoneytransferComponent implements OnInit {
  accountDetails = ""
  amount = ""
  constructor() { }

  ngOnInit(): void {
  gsap.timeline().from('.example-card',{duration: 2 ,opacity : 0 , delay:0.5})
  gsap.timeline().from('#example-header-image',{ opacity : 0, scale :0 , ease:'back' , duration:1.5 ,delay:0.5})
  gsap.timeline().from('#instruction img',{ y : 160, stagger :0.1 , duration: 1.5 ,ease :'back' ,delay:0.9})
  }
  submitDetail(){
    alert('Payment Confirmed')
  }
}
