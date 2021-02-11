import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alcohol-card',
  templateUrl: './alcohol-card.component.html',
  styleUrls: ['./alcohol-card.component.scss']
})
export class AlcoholCardComponent implements OnInit {
  @Input() drink: any;

  @Input() isSearched: boolean;

  constructor() { }

  ngOnInit(): void {
    this.drink;
  }

}
