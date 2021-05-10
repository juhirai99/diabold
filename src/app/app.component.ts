import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Router} from '@angular/router'; // import router from angular router
import { gsap, Power3 } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { BnNgIdleService } from 'bn-ng-idle'; // import it to your component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'dibold';
  lang : any = '';
  isPinVisible : boolean = false;
  constructor(private translateService : TranslateService , private router : Router , private bnIdle: BnNgIdleService){
  this.translateService.setDefaultLang('en')
  this.translateService.use(localStorage.getItem('lang') || 'en');
  document.documentElement.lang = this.lang;
  gsap.to("#language", {keyframes: [
    {x: 1, duration: 1},
    {y: 1, duration: 1, delay: 0.5}, //create a 0.5 second gap
    {rotation: 360, duration: 2, delay: -0.25} //overlap by 0.25 seconds
  ], ease: "power3.inOut"});
  }
  ngOnInit(): void {
  this.lang = localStorage.getItem('lang')
  gsap.to("#icon", {rotation: 360, x: 100, duration: 6 , ease: "elastic"});
  this.bnIdle.startWatching(60).subscribe((isTimedOut: boolean) => {
    if (isTimedOut) {
      alert('Session Expired')
      console.log('Session Expired');
    }
  });

  }
  changelanguage(lang : string ){
   console.log(lang)
   localStorage.setItem('lang', lang);
   window.location.reload();
   this.isPinVisible = true

  }
  changeView(){
    this.isPinVisible = true
    this.router.navigate(['/pin']); // navigate to other page
  }

  
}
