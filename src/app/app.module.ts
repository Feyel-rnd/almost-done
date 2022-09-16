import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialExampleModule} from '../material/material.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {MainPageComponent} from './main-page/main-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing-module/app-routing-module.module'
import { YourGuard } from './your-guard.guard';

@NgModule({
  imports:      [ BrowserModule, FormsModule,MaterialExampleModule,ReactiveFormsModule,BrowserAnimationsModule,MatInputModule,MatFormFieldModule,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [YourGuard],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
