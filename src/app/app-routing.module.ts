import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import { SecondaryPageComponent } from './secondary-page/secondary-page.component';
import { Routes, RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { YourGuard } from './your-guard.guard';
import { ConnexionFormComponent } from './connexion-form/connexion-form.component';

//const routes: Routes = []; // sets up routes constant where you define your routes
const routes: Routes = [
  { path: '', redirectTo: '/login-component', pathMatch: 'full' },
  { path: 'login-component', component: ConnexionFormComponent },
  {
    path: 'main-component',
    component: MainPageComponent,
    canActivate: [YourGuard],
  },
  { path: 'secondary-component', component: SecondaryPageComponent },
  
  { path: '**',  redirectTo: '/secondary-component', pathMatch: 'full'},
];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppRoutingModule {}
