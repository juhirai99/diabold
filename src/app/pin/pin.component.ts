import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {gsap, Power3 } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { UserIdleService } from 'angular-user-idle';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.css']
})
export class PinComponent implements OnInit {
  hide = true;
  constructor(private router : Router , private userIdle: UserIdleService) { }
  pinValue = "";
  ngOnInit(): void {
    gsap.to("#atm", {keyframes: [
      {x: 100, duration: 1},
      {y: 1, duration: 1}, //create a 0.5 second gap
      {rotation: 360, duration: 1} //overlap by 0.25 seconds
    ], ease: "power3.inOut"});

    gsap.to("#pin", {keyframes: [
      {x: 100, duration: 1},
      {y: 0, duration: 1, delay: 0.1}, //create a 0.5 second gap
//overlap by 0.25 seconds
    ], ease: "power3.inOut"});

    gsap.to("#confirm", {keyframes: [
      {x: 100, duration: 1},
      {y: 0, duration: 1, delay: 0.1}//create a 0.5 second gap
       //overlap by 0.25 seconds
    ], ease: "power3.inOut"});
    this.userIdle.startWatching();

        // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe(count => console.log(count));

        // Start watch when time is up.
      this.userIdle.onTimeout().subscribe(() => console.log('Time is up!'));
      
  }
  changeView(){
  this.router.navigate(['/option'])
  }
}
