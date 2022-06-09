import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { RoomService } from './services/room.service';

@Injectable({
  providedIn: 'root'
})
export class RoomResolver implements Resolve<void> {
  constructor(
    private roomService: RoomService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
    this.roomService.roomName = route.paramMap.get('roomId');
  }
}
