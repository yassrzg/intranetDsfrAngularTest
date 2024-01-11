import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContainerComponent} from "./components/container/container.component";
import {ActusComponent} from "./components/body/add-pages/actus/actus.component";
import {OutilsComponent} from "./components/body/add-pages/outils/outils.component";
import {GeneraleComponent} from "./components/body/add-pages/actus/generale/generale.component";
import {RhComponent} from "./components/body/add-pages/actus/rh/rh.component";
import {OEComponent} from "./components/body/add-pages/actus/oe/oe.component";
import {SfComponent} from "./components/body/add-pages/actus/sf/sf.component";



export const ROUTES: Routes = [
  {
    path:'',
    component: ContainerComponent,
    children: [
      {
        path:'',
        redirectTo: 'actus',
        pathMatch: 'full',

      },
      {
        path:'actus',
        component: ActusComponent,
        children: [
          {
            path:'',
            redirectTo: 'general',
            pathMatch: 'full',

          },
          {
            path:'general',
            component: GeneraleComponent,
            pathMatch: 'prefix',

          },
          {
            path:'ressources-humaines',
            component: RhComponent,
            pathMatch: 'prefix',

          },
          {
            path:'operations-emploi',
            component: OEComponent,
            pathMatch: 'prefix',

          },
          {
            path:'soutien-finances',
            component: SfComponent,
            pathMatch: 'prefix',

          },
        ]
      },
      {
        path:'outils',
        component: OutilsComponent,
        pathMatch: 'prefix',

      },
      {
        path:'plus',
        component: OutilsComponent,
        pathMatch: 'prefix',

      },

    ]

  },

  // {
  //   path:'category',
  //   // component: ContainerComponent,
  //
  // },
  // {
  //   path:'user',
  //   // component: ContainerComponent,
  //
  // },
  // {
  //   path:'order',
  //   // component: ContainerComponent,
  //
  // },
  // {
  //   path:'**',
  //   // component: Error404Component,
  //
  // },


];
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
