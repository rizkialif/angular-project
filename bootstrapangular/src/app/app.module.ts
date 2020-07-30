import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { HomeComponent } from './home/home.component';
import { AngularComponent } from './angular/angular.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { FooterComponent } from './footer/footer.component';
// import { HtmlComponent } from './html/html.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    AngularComponent,
    BootstrapComponent,
    FooterComponent,
    // HtmlComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
