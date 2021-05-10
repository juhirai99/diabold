import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { gsap, Power3 } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-account-type',
  templateUrl: './account-type.component.html',
  styleUrls: ['./account-type.component.css']
})
export class AccountTypeComponent implements OnInit {

  constructor(private route : Router , private dataService: DataserviceService) { }

  ngOnInit(): void {
  gsap.timeline().from('.current-card',{duration: 2 ,opacity : 0 , delay:0.5})
  gsap.timeline().from('#currentHeader',{ opacity : 0, scale :0 , ease:'back' , duration:1.5 ,delay:0.5})
  gsap.timeline().from('#currentImg img',{ y : 160, stagger :0.1 , duration: 1.5 ,ease :'back' ,delay:0.5})

  gsap.timeline().from('.saving-card',{duration: 2 ,opacity : 0 , delay:0.5})
  gsap.timeline().from('#savingHeader',{ opacity : 0, scale :0 , ease:'back' , duration:1.5 , delay:0.8})
  gsap.timeline().from('#savingImg img',{ y : 160, stagger :0.1 , duration: 1.5,ease :'back' , delay:0.8})

  }; 

  loadAmountPage(type : string){
    this.dataService.setAccountType(type)
    this.route.navigate(['/cash'])
  }
}
