import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';
import { Subject } from 'rxjs';
import { User } from '../types/user';
import { SocketEventsEnum } from '../types/socket';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  public winner$: Subject<User | null> = new Subject<User | null>();
  public roomName: string | null = '';
  public roomUsers$: Subject<Array<User>> = new Subject<Array<User>>();
  public isEverybodyReady$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private socketService: SocketService,
  ) {
    this.socketService.listenEvent(SocketEventsEnum.CLIENTS_LIST).subscribe((clients: Array<User>) => {
      this.roomUsers$.next(clients);
    });

    this.socketService.listenEvent(SocketEventsEnum.EVERYBODY_READY).subscribe((isReady: boolean) => {
      this.isEverybodyReady$.next(isReady);
    });

    this.socketService.listenEvent(SocketEventsEnum.DISCONNECT).subscribe(() => {
      this.roomUsers$.next([]);
    });

    this.socketService.listenEvent(SocketEventsEnum.END_GAME).subscribe((winner: User | null) => {
      this.winner$.next(winner);
    });
  }

  playAgain(): void {
    this.socketService.emit(SocketEventsEnum.PLAY_AGAIN);
  }


}
