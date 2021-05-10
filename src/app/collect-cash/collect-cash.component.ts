import { Component, OnInit } from '@angular/core';
import { gsap, Power3 } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

@Component({
  selector: 'app-collect-cash',
  templateUrl: './collect-cash.component.html',
  styleUrls: ['./collect-cash.component.css']
})
export class CollectCashComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  gsap.timeline().from('.example-card',{ x: 100, duration: 2 ,opacity : 0 , delay:0.5})
  gsap.timeline().from('#example-header-image',{ x: 100 ,opacity : 0, scale :0 , ease:'back' , duration:1.5 ,delay:0.5})
  gsap.timeline().from('#cash img',{ x: 200 ,y : 160, stagger :0.1 , duration: 1.5 ,ease :'back' ,delay:0.9})
  
  }

}
