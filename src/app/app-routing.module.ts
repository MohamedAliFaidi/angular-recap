import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent} from "./components/products/products.component";


const routes: Routes = [
  {path:"new",component :FormComponent}
,
  {path: "about",component :AboutComponent}
  ,
  //dynamic route setup
  {path: "about/:username",component :AboutComponent}
  ,


  // this route component demonstrate api data fatching

  {path: "products",component :ProductsComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
