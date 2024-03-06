import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormSaveService {
  responseList: ResponseType[] = [];

  constructor() {}

  saveResponse(response: ResponseType) {
    this.responseList.push(response);
  }
}

export interface ResponseType {
  favoriteGame?: string;
  favoriteConsole?: string;
  number: number;
}
