import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllFilesComponent } from './all-files/all-files.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:'all', component: AllFilesComponent},
  {path:'', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
