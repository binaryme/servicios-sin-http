import { Component, OnInit } from '@angular/core';
import { TransaccionesService } from '../../servicios/transacciones.service';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css']
})
export class TransaccionesComponent implements OnInit {
  transacciones: any[];
  transaccion: string;
  constructor(private transaccionesService: TransaccionesService) {}
  ngOnInit() {
    this.transacciones = this.transaccionesService.getTransacciones();
  }
  public postTransaccion() {
    this.transaccionesService.postTransaccion(this.transaccion);
    this.transaccion = '';
  }
}
