import { Component } from '@angular/core';
import{Todo}from './todo';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),

  ]
})
export class AppComponent {
  title = 'ANG';
todoValue:string;
list:Todo[];

ngOnInit(){
this.list=[];
this.todoValue="";
window.addEventListener("beforeunload", function (e) {
  var confirmationMessage = "\o/";
  console.log("cond");
  e.returnValue = confirmationMessage;     // Gecko, Trident, Chrome 34+
  return confirmationMessage;              // Gecko, WebKit, Chrome <34
});
}

addItem(){
if(this.todoValue !== ""){
const newItem:Todo={
id:Date.now(),
value:this.todoValue,
isDone:false
};
this.list.push(newItem);
}
this.todoValue="";
}

deleteItem(id:number){
this.list=this.list.filter(item=>item.id!== id);
}

}

