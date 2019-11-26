import { IEstudante } from "./estudantes";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class EstudantesService {
  private estudanteUrl = "api/estudantes";
  constructor(private http: HttpClient) {}

  getEstudantes(): Observable<IEstudante[]> {
    return this.http.get<IEstudante[]>(this.estudanteUrl).pipe(
      tap(dados => console.log("Todos: " + JSON.stringify(dados))),
      catchError(this.trataErro)
    );
  }

  private trataErro(erro: HttpErrorResponse) {
    // Em uma aplicação real, podemos enviar o erro para alguma infraestrutura // remota de log, ao invés de simplesmente enviar para o console
    let mensagemErro = "";
    if (erro.error instanceof ErrorEvent) {
      // Um erro no lado cliente ou de rede ocorreu. Tratar adequadamente
      mensagemErro = `Um erro ocorreu: ${erro.error.message}`;
    } else {
      mensagemErro = `Servidor retornou o código: ${erro.status}, a mensagem de erro é ${erro.message}`;
    }
    console.error(mensagemErro);
    return throwError(mensagemErro);
  }
}
