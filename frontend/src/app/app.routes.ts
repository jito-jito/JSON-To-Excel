import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { DocsComponent } from './pages/docs/docs.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'docs',
    component: DocsComponent
  },
  {
    path: '**',
    redirectTo: '',
    component: MainComponent
  }
];
