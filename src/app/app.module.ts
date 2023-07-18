import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ShortcutComponent } from './layouts/shortcut/shortcut.component';
import { LoginLayoutComponent } from './account/login-layout/login-layout.component';
import { BaseService } from './services/base';
import { StorageService } from './services/storage.service';
import { HomeComponent } from './account/home/home.component';
import { MasterLayoutComponent } from './account/master-layout/master-layout.component';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    ShortcutComponent,
    LoginLayoutComponent,
    MasterLayoutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BaseService,StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
