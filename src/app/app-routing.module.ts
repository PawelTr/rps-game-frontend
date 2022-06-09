import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { JoinRoomPageComponent } from './pages/join-room-page/join-room-page.component';
import { CreateRoomPageComponent } from './pages/create-room-page/create-room-page.component';
import { RoomPageComponent } from './pages/room-page/room-page.component';
import { RoomResolver } from './room.resolver';

const routes: Routes = [
  {
    path: 'create',
    component: CreateRoomPageComponent,
  },
  {
    path: 'join',
    component: JoinRoomPageComponent,
  },
  {
    path: 'room/:roomId',
    component: RoomPageComponent,
    resolve: [RoomResolver],
  },
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
