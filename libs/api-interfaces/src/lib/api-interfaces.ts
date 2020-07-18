export interface Message {
  message: string;
}

export interface Lesson {
  "id": number,
  "name": string,
  "description": string,
  "percentComplete": number,
  "favorite": boolean,
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

export interface TvShow {
  "id": number,
  "name": string,
  "description": string,
  "type": string,
  "price": number,
  "stars": number,
}

export interface Game {
  "id": number,
  "name": string,
  "description": string,
  "rating": string,
  "price": number,
}

export interface Pizza {
  "id": number,
  "sauce": string,
  "cheese": string,
  "crust": string,
  "extras": string[],
  "price": number,
}

export interface Computer {
  "id": number,
  "cpu": string,
  "gpu": string,
  "ram": number,
  "extras": string[],
  "price": number,
}

export interface Car {
  "id": number,
  "type": string,
  "description": string,
  "color": string,
  "price": number,
}

export interface Login {
  "id": number,
  "username": string,
  "password": string,
  "logged_in": boolean,
}
