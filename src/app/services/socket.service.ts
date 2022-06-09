import { Injectable, NgZone, OnInit } from '@angular/core';

import { io, Socket } from 'socket.io-client';
import { JoinRoomDto, SocketEventsEnum } from '../types/socket';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { RoomService } from './room.service';
import { UserService } from './user.service';
import { User } from '../types/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;

  public currentUser$: ReplaySubject<User> = new ReplaySubject<User>(1);
  public roomUsers$: Subject<Array<User>> = new Subject<Array<User>>();
  public isEverybodyReady$: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.socket = io(environment.socketUrl);

    this.socket.on(SocketEventsEnum.ROOM_JOINED, data => console.log(data));
  }

  listenEvent(eventName: SocketEventsEnum): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on(eventName, (data: any) => {
        observer.next(data);
      })
    })
  }

  emit(eventName: SocketEventsEnum, body?: any): void {
    this.socket.emit(eventName, body);
  }

  smth(): void {

    this.socket.on(SocketEventsEnum.ERROR, (data: any) => {
    })

    this.socket.on(SocketEventsEnum.CLIENTS_LIST, (data: Array<User>) => {
      this.roomUsers$.next(data);
    })

    this.socket.on(SocketEventsEnum.EVERYBODY_READY, (isReady: boolean) => {
      this.isEverybodyReady$.next(isReady);
    })

    this.socket.on(SocketEventsEnum.DISCONNECT, () => {
      this.roomUsers$.next([]);
    })
  }
}
