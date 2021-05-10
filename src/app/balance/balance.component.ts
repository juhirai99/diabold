import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  amount = ""
  constructor(private route : Router) { }

  ngOnInit(): void {
  }
  submitDetails(){
    alert('Please deposit your cash')
    this.route.navigate(['/depositCheque'])
  }
}
