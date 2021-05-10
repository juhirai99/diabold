import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { gsap, Power3 } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  gsap.timeline().from('.example-card1',{duration: 2 ,opacity : 0 , delay:0.5})
  gsap.timeline().from('#title2',{ opacity : 0, scale :0 , ease:'back' , duration:1.5 ,delay:0.5})
  gsap.timeline().from('#card2 img',{ y : 160, stagger :0.1 , duration: 1.5 ,ease :'back' ,delay:0.5})

  gsap.timeline().from('.example-card2',{duration: 2 ,opacity : 0 , delay:0.5})
  gsap.timeline().from('#title3',{ opacity : 0, scale :0 , ease:'back' , duration:1.5 , delay:0.8})
  gsap.timeline().from('#card3 img',{ y : 160, stagger :0.1 , duration: 1.5,ease :'back' , delay:0.8})

  gsap.timeline().from('.example-card3',{duration: 2 ,opacity : 0 ,delay: 1 })
  gsap.timeline().from('#title4',{ opacity : 0, scale :0 , ease:'back' , duration:1.5 , delay: 1})
  gsap.timeline().from('#card4 img',{ y : 160, stagger :0.1 , duration: 1.5,ease :'back' ,delay: 1})

  gsap.timeline().from('.example-card',{duration: 2 ,opacity : 0})
  gsap.timeline().from('#title1',{ opacity : 0, scale :0 , ease:'back' , duration:1 })
  gsap.timeline().from('#card1 img',{ y : 160, stagger :0.1 , duration: 1,ease :'back'})


  }

  cashWithdraw(){
  this.route.navigate(['/accounttype'])
  };
  checkBalance(){
  this.route.navigate(['/checkBalance'])
  };
  loadMoneyTransfer(){
    this.route.navigate(['/transfer'])
  };
  loadDeposit(){
    this.route.navigate(['/deposit'])
  }
 
}
