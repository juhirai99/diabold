import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

    public name : string="";
    public amount : string="";
    constructor() {
    }

    public getAccountType(){
        return this.name;
    }

    public setAccountType(name:string) {
        this.name = name;
    }

    public setAmmount(amount:string) {
      this.amount = amount;
    }

    public getAmmount(){
      return this.amount;
   }
}
