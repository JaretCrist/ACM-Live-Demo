import { Routes } from '@angular/router';
import { ParamPageComponent } from './param-page/param-page.component';
import { FormPageComponent } from './form-page/form-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    component: ParamPageComponent,
    path: 'home',
  },
  {
    component: FormPageComponent,
    path: 'form',
  },
];
