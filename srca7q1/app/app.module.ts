import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomStyleDirective } from './custom-style.directive';
import { LoginComponent } from './login/login.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'; // to create textbox
import{MatFormFieldModule}from '@angular/material/form-field';// to create form field
import{MatButtonModule} from '@angular/material/button'; // to create button

@NgModule({
  declarations: [
    AppComponent,
    CustomStyleDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
