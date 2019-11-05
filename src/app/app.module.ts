import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ListaEstudantesComponent } from "./estudantes/lista-estudantes.component";
import { SexoPipe } from "./compartilhado/sexo.pipe";
import { AlturaComponent } from "./compartilhado/altura.component";
import { EstudanteService } from "./estudantes/estudantes.service";

@NgModule({
  declarations: [
    AppComponent,
    ListaEstudantesComponent,
    SexoPipe,
    AlturaComponent
  ],
  providers: [EstudanteService],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
