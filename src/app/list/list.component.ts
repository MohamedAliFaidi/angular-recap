import { Component, Input } from '@angular/core';
import { TMessage } from '../../types/type';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})


export class ListComponent {
  @Input() messages: Array<TMessage> = []


  del(index: number | string) {
    switch (typeof index) {
      case "number":
        this.messages.splice(index, 1)
        break;
      case "string":
        console.log(index)
        break;
      default:
        break;
    }
  }

}
