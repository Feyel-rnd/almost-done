import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from '../main-page/main-page.component';
import { SecondaryPageComponent } from '../secondary-page/secondary-page.component';
import { Routes, RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {AppComponent} from '../app.component';
import {YourGuard} from '../your-guard.guard';

//const routes: Routes = []; // sets up routes constant where you define your routes
const routes: Routes = [
  { path: 'login-component', component: AppComponent },
  { path: 'main-component', component: MainPageComponent,
  canActivate: [YourGuard] },
  { path: 'secondary-component', component: SecondaryPageComponent, },
];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppRoutingModule {}
