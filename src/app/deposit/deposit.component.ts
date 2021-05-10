import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { gsap, Power3 } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  gsap.timeline().from('.example-card',{duration: 2 ,opacity : 0 , delay:0.5})
  gsap.timeline().from('#example-header-image',{ opacity : 0, scale :0 , ease:'back' , duration:1.5 ,delay:0.5})
  gsap.timeline().from('#cash img',{ y : 160, stagger :0.1 , duration: 1.5 ,ease :'back' ,delay:0.9})

  gsap.timeline().from('.example-card1',{duration: 2 ,opacity : 0 , delay:0.5})
  gsap.timeline().from('#example-header-image',{ opacity : 0, scale :0 , ease:'back' , duration:1.5 ,delay:0.5})
  gsap.timeline().from('#cheque img',{ y : 160, stagger :0.1 , duration: 1.5 ,ease :'back' ,delay:0.9})
  
  };

  loadDepositDialog(){
   this.route.navigate(['/balance']) 
  };
}
