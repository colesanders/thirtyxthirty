export interface Message {
  message: string;
}

export interface Lesson {
  "id": number,
  "title": string,
  "description": string,
  "favorite": boolean,
  "percentComplete": number
}

export interface Login {
  "id": number,
  "username": string,
  "password": string,
}
