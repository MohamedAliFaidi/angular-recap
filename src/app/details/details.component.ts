import {Component, EventEmitter,Input, Output} from '@angular/core';
import { TMessage } from '../../types/type';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  @Input() message : TMessage = {
    name: '',
    email: '',
    subject: '',
    isSubmite: false
  }
  @Input() index :number = -1

  @Output()
  remove: EventEmitter<number | string > = new EventEmitter();
  deleteMessage  (){
 this.remove.emit(this.index)
  }
}



