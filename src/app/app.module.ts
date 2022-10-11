import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SumariComponent } from './sumari/sumari.component';
import { ShowService } from './sumari/show.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReadyComponent } from './ready/ready.component';

@NgModule({
  declarations: [
    AppComponent,
    SumariComponent,
    ReadyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
