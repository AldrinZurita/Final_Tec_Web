import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';  // Ensure ContactComponent is declared
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
<<<<<<< Updated upstream
import { HttpClientModule } from '@angular/common/http';
=======
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EventosComponent } from './eventos/eventos.component';

>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,  // Declare ContactComponent
    LoginComponent,
    RegisterComponent,
    UsuariosComponent,
    EventosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // Add FormsModule to the imports array
    HttpClientModule,
    routes,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}