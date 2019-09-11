
// src/app/burger/burger.component.ts

import { Component, OnInit } from '@angular/core';
import { PusherService } from '../services/pusher.service'; // add this
@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent implements OnInit {
  constructor(public pusher: PusherService) { } // add this
  ngOnInit() {
  }
}