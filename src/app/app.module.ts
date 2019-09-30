import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ListaEstudantesComponent } from "./estudantes/lista-estudantes.component";

@NgModule({
  declarations: [AppComponent, ListaEstudantesComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
