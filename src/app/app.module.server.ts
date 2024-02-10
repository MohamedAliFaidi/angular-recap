import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { provideHttpClient, withFetch } from '@angular/common/http';



import { AppModule } from './app.module';
import { AppComponent } from './app.component';



@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent
  ],
  providers: [provideHttpClient(withFetch())]

})
export class AppServerModule {}
