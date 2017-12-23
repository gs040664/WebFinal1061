import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides = [
    {
      firstTitle: '1',
      secondTitle: '111'
    },
    {
      firstTitle: '2',
      secondTitle: '222'
    },
    {
      firstTitle: '3',
      secondTitle: '333'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
