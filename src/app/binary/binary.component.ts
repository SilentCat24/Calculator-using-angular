import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binary',
  templateUrl: './binary.component.html',
  styleUrls: ['./binary.component.css']
})
export class BinaryComponent {
binaryInput:string;
result:any=null;


addBinary(){
  const binaryNumber=parseInt(this.binaryInput,2);
  if(!isNaN(binaryNumber)){
    const sum=binaryNumber+1;
    this.result=sum.toString(2);

  }else{
    this.result=null;
  }
}




}