import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RoomFormComponent } from './components/room-form/room-form.component';
import { CreateRoomPageComponent } from './pages/create-room-page/create-room-page.component';
import { JoinRoomPageComponent } from './pages/join-room-page/join-room-page.component';
import { RoomPageComponent } from './pages/room-page/room-page.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RoomFormComponent,
    CreateRoomPageComponent,
    JoinRoomPageComponent,
    RoomPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
