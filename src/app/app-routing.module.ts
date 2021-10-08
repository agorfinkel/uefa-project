import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './views/main/components/main.components';

const routes: Routes = [{
  path: 'main', component: MainComponent
},
{
  path: '', redirectTo: 'main', pathMatch: 'full',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
