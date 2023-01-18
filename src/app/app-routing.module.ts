import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ServiceComponent } from './components/service/service.component';
import { GuardGuard } from './guards/guard.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [GuardGuard] },
  { path: 'service', component: ServiceComponent, canActivate: [GuardGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [GuardGuard],
  },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
