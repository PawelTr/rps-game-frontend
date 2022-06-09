import { Component, OnInit } from '@angular/core';
import { JoinRoomDto, SocketEventsEnum } from '../../types/socket';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-join-room-page',
  templateUrl: './join-room-page.component.html',
  styleUrls: ['./join-room-page.component.scss']
})
export class JoinRoomPageComponent implements OnInit {

  constructor(
    private _socketService: SocketService,
  ) { }

  ngOnInit(): void {
  }

  onFormSubmit(formValue: JoinRoomDto): void {
    this._socketService.emit(SocketEventsEnum.JOIN_ROOM, formValue);
  }

}
