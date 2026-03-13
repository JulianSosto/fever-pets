import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/pets/pages/pets-list/pets-list')
        .then(m => m.PetsList)
  },
  {
    path: 'pet/:id',
    loadComponent: () =>
      import('./features/pets/pages/pet-detail/pet-detail')
        .then(m => m.PetDetail)
  }
];