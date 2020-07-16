import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '' , redirectTo: '/home' , pathMatch : 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'settings' ,
    component: SettingsComponent,
    children: [
      { path: '' , redirectTo: 'profile' , pathMatch : 'full' },
      { path: 'profile' , component: ProfileComponent },
      { path: 'contact' , component: ContactComponent },
      { path: '**' , redirectTo : 'profile' ,pathMatch : 'full' }
    ]
  },
  { path: '**' , component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
