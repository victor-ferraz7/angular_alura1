import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';

@NgModule({
  declarations: [
    AppComponent, // Photo será acessível ao App Component
  
  ],
  imports: [
    BrowserModule,
    PhotosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Primeiro Módulo a ser carregado pela aplicação / Root module