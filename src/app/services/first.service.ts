import { Injectable } from '@angular/core';
import { TMessage } from '../../types/type';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor() {
    this.init()
   }

  messages : Array<TMessage> = [];

  init():void {
    this.insert({
      name: 'MohamedAliFaidi',
      email: 'mouhammedalifaidi@gmail.com',
      subject: 'azertyuiopqsdfghjklmxcvbn,;:!!!',
      isSubmite: false
    })
    this.insert({
      name: 'MohamedAliFaidi',
      email: 'mouhammedalifaidi@gmail.com',
      subject: 'azertyuiopqsdfghjklmxcvbn,;:!!!',
      isSubmite: true
    }) 
    this.insert({
      name: 'MohamedAliFaidi',
      email: 'mouhammedalifaidi@gmail.com',
      subject: 'azertyuiopqsdfghjklmxcvbn,;:!!!',
      isSubmite: true
    })
  }

  insert (message:TMessage):void {
    this.messages.push(message);
  }

  getMessages ():Array<TMessage> {
    return this.messages;
  }


  deleteMsg (index:number):void {
    this.messages.splice(index, 1);
  }

  }


