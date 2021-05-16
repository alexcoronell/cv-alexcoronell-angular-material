import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { StudiesComponent } from './components/studies/studies.component';
import { TrainingComponent } from './components/training/training.component';
import { BriefcaseComponent } from './components/briefcase/briefcase.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'experiencia', component: ExperienceComponent },
  { path: 'estudios', component: StudiesComponent },
  { path: 'formacion', component: TrainingComponent },
  { path: 'portafolio', component: BriefcaseComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
