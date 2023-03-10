import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GroupEtudComponent} from "./components/group-etud/group-etud.component";
import {StudentDataComponent} from "./components/student-data/student-data.component";
import {EmploiComponent} from "./components/emploi/emploi.component";

const routes: Routes = [
  {path:'monGroupe', component:GroupEtudComponent},
  {path:'StudentData', component:StudentDataComponent},
  {path:'StudentScheduel', component:EmploiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionEtudRoutingModule { }
