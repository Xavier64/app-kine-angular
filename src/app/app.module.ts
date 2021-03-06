import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timegridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import scrollgridPlugin from '@fullcalendar/scrollgrid';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProgrammeComponent } from './pages/programme/programme.component';
import { ExercicesComponent } from './pages/exercices/exercices.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ParametresComponent } from './pages/parametres/parametres.component';
import { LoginComponent } from './pages/login/login.component';
import { DonComponent } from './pages/don/don.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackgroundComponent } from './components/background/background.component';
import { ProgrammejourComponent } from './pages/programme/programmejour/programmejour.component';
import { HttpClientModule } from '@angular/common/http';
import { BgProgrammeComponent } from './pages/programme/bg-programme/bg-programme.component';
import { BgHomeComponent } from './pages/home/bg-home/bg-home.component';
import { ChangerProgrammeComponent } from './pages/programme/changer-programme/changer-programme.component';
import { BgExercicesComponent } from './pages/exercices/bg-exercices/bg-exercices.component';
import { ListeExercicesComponent } from './pages/exercices/liste-exercices/liste-exercices.component';
import { TriComponent } from './pages/exercices/tri/tri.component';
import { BgProfilComponent } from './pages/profil/bg-profil/bg-profil.component';
import { ProfilPatientComponent } from './pages/profil/profil-patient/profil-patient.component';
import { BilanComponent } from './pages/profil/bilan/bilan.component';
import { HelloComponent } from './pages/home/hello/hello.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { BgContactComponent } from './pages/contact/bg-contact/bg-contact.component';
import { ChangerEtAvisComponent } from './pages/programme/changer-et-avis/changer-et-avis.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgImageSliderModule } from 'ng-image-slider';
import { CarrousselComponent } from './pages/programme/carroussel/carroussel.component';
import { ReactiveFormsModule } from '@angular/forms';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  timegridPlugin,
  interactionPlugin,
  scrollgridPlugin,
]);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProgrammeComponent,
    ExercicesComponent,
    ProfilComponent,
    ContactComponent,
    ParametresComponent,
    LoginComponent,
    DonComponent,
    NotificationsComponent,
    InscriptionComponent,
    NavbarComponent,
    BackgroundComponent,
    ProgrammejourComponent,
    BgProgrammeComponent,
    BgHomeComponent,
    ChangerProgrammeComponent,
    BgExercicesComponent,
    ListeExercicesComponent,
    TriComponent,
    BgProfilComponent,
    ProfilPatientComponent,
    HelloComponent,
    BilanComponent,
    AccordionComponent,
    BgContactComponent,
    ChangerEtAvisComponent,
    ProgressBarComponent,
    CarrousselComponent,

  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FullCalendarModule,
    MatProgressBarModule,
    NgImageSliderModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
