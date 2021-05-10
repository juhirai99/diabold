
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Router} from '@angular/router'; // import router from angular router
import {gsap, Power3 } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  
  title = 'dibold';
  lang : any = '';
  isPinVisible : boolean = false;
  constructor(private translateService : TranslateService , private router : Router){
  this.translateService.setDefaultLang('en')
  this.translateService.use(localStorage.getItem('lang') || 'en');
  document.documentElement.lang = this.lang;
  }
  ngOnInit(): void {
    this.lang = localStorage.getItem('lang')
   }
  changelanguage(lang : string ){
   console.log(lang)
   localStorage.setItem('lang', lang);
   window.location.reload();
   this.isPinVisible = true
   
   let language = ""
   if(this.lang=='ar'){
    language ='Arabic'
   } 
   else{
    language = 'English' 
   }
   alert(' Language Selected')
   this.router.navigate(['/pin']); // navigate to other page

  }
  changeView(){
    this.isPinVisible = true
    gsap.to("#icon", {keyframes: [
      {x: 3000, duration: 1},
      {y: 3000, duration: 1}, //create a 0.5 second gap
      {rotation: 360, duration: 4, delay: -0.25} //overlap by 0.25 seconds
    ], ease: "power3.inOut"});
    this.router.navigate(['/pin']); // navigate to other page
  }
}
