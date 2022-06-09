import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';
import { ReplaySubject } from 'rxjs';
import { User } from '../types/user';
import { Router } from '@angular/router';
import { SocketEventsEnum } from '../types/socket';
import { SignEnum } from '../types/game';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUser$: ReplaySubject<User> = new ReplaySubject<User>(1);
  public currentUser!: User;

  constructor(
    private socketService: SocketService,
    private router: Router,
  ) {
    this.listenEvents();
  }

  listenEvents(): void {
    this.socketService.listenEvent(SocketEventsEnum.ROOM_JOINED).subscribe((currentUser: User) => {
      this.currentUser = currentUser;
      this.currentUser$.next(currentUser);
      this.router.navigateByUrl(`room/${currentUser.roomName}`);
    })

    this.socketService.listenEvent(SocketEventsEnum.ROOM_CREATED).subscribe((currentUser: User) => {
      this.currentUser = currentUser;
      this.currentUser$.next(currentUser);
      this.router.navigateByUrl(`room/${currentUser.roomName}`);
    })

    this.socketService.listenEvent(SocketEventsEnum.CLIENTS_LIST).subscribe((usersList: Array<User>) => {
      this.currentUser = usersList.find((user) => user.userName === this.currentUser?.userName) || this.currentUser;
      this.currentUser$.next(this.currentUser);
    })
  }

  toggleReady(): void {
    this.currentUser.isReady = !this.currentUser.isReady;
    this.currentUser$.next(this.currentUser);
    this.socketService.emit(SocketEventsEnum.USER_READY, this.currentUser.isReady);
  }

  setSign(sign: SignEnum): void {
    const body = {
      userName: this.currentUser.userName,
      sign,
    }
    this.socketService.emit(SocketEventsEnum.SET_SIGN, body);
  }
}
