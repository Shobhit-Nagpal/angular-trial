import { Routes } from '@angular/router';
import { Occupation } from './components/occupation/occupation';
import { Heavy } from './components/heavy-comp/heavy';

export const routes: Routes = [
  {
    path: 'os',
    title: 'OCCUPATION',
    component: Occupation
  },
  {
    path: 'user',
    title: 'HEAVY',
    component: Heavy
  },
];
