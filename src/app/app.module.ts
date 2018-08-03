import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TransaccionesService } from './servicios/transacciones.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, TransaccionesComponent],
  imports: [BrowserModule, NgbModule.forRoot(), FormsModule],
  providers: [TransaccionesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
