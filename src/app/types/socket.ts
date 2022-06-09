export interface JoinRoomDto {
  userName: string;
  roomNane: string;
}

export enum SocketEventsEnum {
  CREATE_ROOM = 'createRoom',
  JOIN_ROOM = 'joinRoom',
  ROOM_CREATED = 'roomCreated',
  ROOM_JOINED = 'roomJoined',
  CLIENTS_LIST = 'clientsList',
  ERROR = 'error',
  DISCONNECT = 'disconnect',
  USER_READY = 'userReady',
  EVERYBODY_READY = 'everybodyReady',
  SET_SIGN = 'setSign',
  END_GAME = 'endGame',
  PLAY_AGAIN = 'playAgain',
  EVERYBODY_SET_SIGN = 'everybodySetSign'
}
