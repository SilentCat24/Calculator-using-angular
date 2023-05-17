import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScientificComponent } from './scientific/scientific.component';
import { BinaryComponent } from './binary/binary.component';
import { ScienceComponent } from './science/science.component';


const routes: Routes = [
  {path:'normal',component:ScientificComponent},
  {path:'Binary',component:BinaryComponent},
  {path:"science",component:ScienceComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
