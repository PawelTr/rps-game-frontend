import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JoinRoomDto } from '../../types/socket';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.scss']
})
export class RoomFormComponent implements OnInit {

  @Input('buttonText') buttonText!: string;
  @Output() formValue: EventEmitter<JoinRoomDto> = new EventEmitter<JoinRoomDto>()

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    this.formValue.emit(form.value);
  }

}
