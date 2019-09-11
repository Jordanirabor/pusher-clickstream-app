
// src/app/services/pusher.service.ts

import { Injectable } from '@angular/core';
import * as Pusher from 'pusher-js';

@Injectable({
  providedIn: 'root'
})
export class PusherService {
  channel: Pusher.Channel;
  constructor() {
    const pusher = new Pusher('APP_KEY', {
      cluster: 'eu',
      authEndpoint: 'http://localhost:5000/pusher/auth'
    });
    this.channel = pusher.subscribe('private-click-stream');
  }
  sendClickEvent(data) {
    this.channel.trigger('client-click', data);
  }
}