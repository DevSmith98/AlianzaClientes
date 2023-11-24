import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ClientComponent } from './components/client/client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GetClientsService } from './components/client/services/clients.service'

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [GetClientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
