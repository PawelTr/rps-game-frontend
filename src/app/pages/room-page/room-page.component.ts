import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { UserService } from '../../services/user.service';
import { User } from '../../types/user';
import { SignEnum } from '../../types/game';

@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['./room-page.component.scss']
})
export class RoomPageComponent implements OnInit {

  public winner!: User | null;
  public roomName: string | null = '';
  public roomUsers: Array<User> = [];
  public currentUser!: User;
  public isEverybodyReady: boolean = false;

  public signEnum = SignEnum;

  constructor(
    private roomService: RoomService,
    private userService: UserService,
  ) {
    this.roomService.roomUsers$.subscribe((usersList: Array<User>) => {
      this.roomUsers = usersList;
    })

    this.roomService.isEverybodyReady$.subscribe((isReady: boolean) => {
      this.isEverybodyReady = isReady;
    })

    this.roomService.winner$.subscribe((winner: User | null) => {
      this.winner = winner;
    })
  }

  ngOnInit(): void {
    this.roomName = this.roomService.roomName;

    this.userService.currentUser$.subscribe((user: User) => {
      this.currentUser = user;
    })
  }

  toggleReady(): void {
    this.userService.toggleReady();
  }

  setSign(sign: SignEnum): void {
    this.userService.setSign(sign);
  }

  playAgain(): void {
    this.roomService.playAgain();
  }

}
