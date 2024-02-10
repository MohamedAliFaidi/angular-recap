import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormComponent } from './components/form/form.component';
import { DetailsComponent } from './components/details/details.component';
import { ListComponent } from './components/list/list.component';
import { FirstService } from './services/first.service';
import { AboutComponent } from './components/about/about.component';
import
{
  ProductsComponent
} from "./components/products/products.component";
import { CardComponent } from './components/products/card/card.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    DetailsComponent,
    ListComponent,
    AboutComponent,
    ProductsComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [
    provideClientHydration(),
    //providing service in the app module
    FirstService,
    importProvidersFrom(HttpClientModule)

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
