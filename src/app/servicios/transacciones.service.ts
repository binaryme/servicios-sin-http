import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {
  private transacciones: any[] = [
    { _id: 1, transaccion: 'exitosa' },
    { _id: 2, transaccion: 'fallida' }
  ];
  transaccion: string;
  constructor() {}
  public getTransacciones(): any[] {
    return this.transacciones;
  }
  public postTransaccion(transaccion: any) {
    const transaccionobj = {
      _id: new Date().getTime().toString(),
      transaccion: transaccion
    };
    this.transacciones.push(transaccionobj);
    console.log(transaccionobj);
  }
}
