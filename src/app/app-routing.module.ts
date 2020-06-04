import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule  } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LenguajesComponent } from './componentes/lenguajes/lenguajes.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent  },
  {path: 'lenguajes', component: LenguajesComponent  },
  {path: 'detalle', component: DetalleComponent  },
  {path: '**', pathMatch:  'full', redirectTo:'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule
     
  ]
})
export class AppRoutingModule { }
