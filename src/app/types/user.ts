import { SignEnum } from './game';

export interface User {
  userName: string;
  isAdmin: boolean;
  isReady: boolean;
  roomName: string;
  isLost: boolean;
  sign?: SignEnum;
}
