import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { ClienteService } from './cliente.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AltaClienteComponent,
    ListadoClientesComponent
  ],
  exports: [
    AltaClienteComponent,
    ListadoClientesComponent
  ],
  providers: [
    ClienteService
  ]
})
export class ClientesModule { }
