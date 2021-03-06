import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{
  //  path: 'home',
  //  loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  //},
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
    
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },

  {
    path: 'create-todo',
    loadChildren: () => import('./create-todo/create-todo.module').then( m => m.CreateTodoPageModule)
  },
  {
    path: 'update-todo',
    loadChildren: () => import('./update-todo/update-todo.module').then( m => m.UpdateTodoPageModule)
  },
  {
    path: 'todo-list',
    loadChildren: () => import('./todo-list/todo-list.module').then( m => m.TodoListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
