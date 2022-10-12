import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

import { AngularMaterialModule } from './angular-material.module';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { BrowseComponent } from './browse/browse.component';
import { DogsService } from './services/dogs.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    BrowseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [DogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
