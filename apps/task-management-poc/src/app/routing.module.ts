import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { LoginComponent } from '@task-management-poc/ui-login';
import { SignupComponent } from '@task-management-poc/ui-signup';
import { UserGuard } from '@task-management-poc/core-data';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }