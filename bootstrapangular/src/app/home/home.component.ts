import { Component, OnInit } from '@angular/core';
import { rating } from '../rank';
import { ranked } from '../data-rank';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  peringkat = ranked;
  constructor() { }

  ngOnInit() {
  }

}
