import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { DocsComponent } from './pages/docs/docs.component';
import { CrearExcelComponent } from './pages/docs/childrenPages/crear-excel/crear-excel.component';
import { IntroductionComponent } from './pages/docs/childrenPages/introduction/introduction.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'crear',
    pathMatch: 'full'
  },
  {
    path: 'crear',
    component: MainComponent
  },
  {
    path: 'docs',
    component: DocsComponent,
    children: [
      {
        path: '',
        component: IntroductionComponent
      },
      {
        path:'crear-excel',
        component: CrearExcelComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    component: MainComponent
  }
];
