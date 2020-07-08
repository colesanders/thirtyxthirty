export interface Message {
  message: string;
}

export interface Fruit {
  "id": number,
  "name": string,
  "description": string,
  "color": string,
  "favorite": boolean,
  "icon" : string,
  "amount": number,
}

export interface Login {
  "id": number,
  "username": string,
  "password": string,
}
