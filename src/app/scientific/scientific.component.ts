import { Component } from '@angular/core';
import { Formula } from './model';


@Component({
  selector: 'app-scientific',
  templateUrl: './scientific.component.html',
  styleUrls: ['./scientific.component.css']
})
export class ScientificComponent {

  result:string='';


  appendNumber(number:number){
    this.result+=number.toString();
  }

appendOperator(operator:string){
  this.result +=operator;
}

calculate(){
try{
  this.result=eval(this.result);

}catch(error){
  this.result="error"
}
}


clear(){
this.result='';
}



}
