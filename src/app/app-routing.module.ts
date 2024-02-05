import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  {path:"new",component :FormComponent}
,
  {path: "about",component :AboutComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
