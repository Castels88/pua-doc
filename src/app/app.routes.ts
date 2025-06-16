import { Routes } from '@angular/router';
import { LoginComponent } from './componets/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ImpieghiCreatiComponent } from './pages/impieghi-creati/impieghi-creati.component';
import { BozzeComponent } from './pages/bozze/bozze.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'creati', component: ImpieghiCreatiComponent },
  { path: 'bozze', component: BozzeComponent },
  { path: '**', redirectTo: '' },
];
