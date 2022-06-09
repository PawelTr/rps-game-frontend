import { Component } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { JoinRoomDto, SocketEventsEnum } from '../../types/socket';

@Component({
  selector: 'app-create-room-page',
  templateUrl: './create-room-page.component.html',
  styleUrls: ['./create-room-page.component.scss']
})
export class CreateRoomPageComponent {

  constructor(
    private socketService: SocketService,
  ) { }

  onFormSubmit(formValue: JoinRoomDto): void {
    this.socketService.emit(SocketEventsEnum.CREATE_ROOM, formValue);
  }

}
