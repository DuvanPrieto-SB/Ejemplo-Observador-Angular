import { Cliente, Grupo } from './../cliente..model';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  clientes: Cliente[] =[];
  clientes$: Observable<Cliente[]>;

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clientes$ = this.clienteService.getClientes$();
    this.clientes$.subscribe( clientes => this.clientes = clientes);
  }

}
