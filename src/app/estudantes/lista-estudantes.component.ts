import { IEstudante } from "./estudantes";
import { Component, OnInit } from "@angular/core";
import { EstudantesService } from "./estudantes.service";

@Component({
  selector: "jedi-estudantes",
  templateUrl: "./lista-estudantes.component.html"
})
export class ListaEstudantesComponent implements OnInit {
  tituloPagina: string = "Lista de Estudantes";
  larguraImagem: number = 50;
  margemImagem: number = 2;
  exibirImagem: boolean = false;
  estudantesFiltrados: IEstudante[];
  _filtroLista: string = "luke";
  get filtroLista(): string {
    return this._filtroLista;
  }
  set filtroLista(valor: string) {
    this._filtroLista = valor;
    this.estudantesFiltrados = this.filtroLista
      ? this.executarFiltro(this.filtroLista)
      : this.estudantes;
  }
  alturaMaxima: number;
  alturasEstudantes: number[];
  estudantes: IEstudante[] = [];
  mensagemErro: string;

  constructor(private estudantesService: EstudantesService) {}

  ngOnInit(): void {
    // Exibe a lista completa
    this.getEstudantes();
    // Configura o valor inicial do filtro
    this.filtroLista = "luke";
  }
  getEstudantes(): void {
    this.estudantesService.getEstudantes().subscribe(
      estudantes => {
        this.estudantes = estudantes;
        this.estudantesFiltrados = this.estudantes;
        this.alturasEstudantes = this.estudantes.map(e => e.altura);
        this.alturaMaxima = Math.max(...this.alturasEstudantes);
      },
      error => (this.mensagemErro = <any>error)
    );
  }

  alternarImagem(): void {
    this.exibirImagem = !this.exibirImagem;
  }

  executarFiltro(filtrarPor: string): IEstudante[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.estudantes.filter(
      (estudante: IEstudante) =>
        estudante.nome.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }
}
