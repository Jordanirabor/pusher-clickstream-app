
import { Component, OnInit } from '@angular/core';
import { PusherService } from '../services/pusher.service'; // add this
@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {
  constructor(public pusher: PusherService) { } // add this
  ngOnInit() {
  }
}