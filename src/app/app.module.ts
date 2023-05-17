import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BinaryComponent } from './binary/binary.component';
import { ScientificComponent } from './scientific/scientific.component';
import { ScienceComponent } from './science/science.component';

@NgModule({
  declarations: [
    AppComponent,
    BinaryComponent,
    ScientificComponent,
    ScienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
