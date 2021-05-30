import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeTachesComponent } from './admin/liste-taches/liste-taches.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PublierTacheComponent } from './admin/publier-tache/publier-tache.component';
import { TacheComponent } from './user/tache/tache.component';
import { ErreurComponent } from './erreur/erreur.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import {ProgressBarModule} from 'primeng/progressbar';
import {ToastModule} from 'primeng/toast';
import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    AppComponent,
    ListeTachesComponent,
    LoginComponent,
    SignupComponent,
    PublierTacheComponent,
    TacheComponent,
    ErreurComponent
  ],
  imports: [ConfirmDialogModule,
    BrowserModule,FormsModule,ProgressBarModule,ToastModule,BrowserAnimationsModule,CalendarModule,
    AppRoutingModule,TableModule,AngularFireStorageModule,AngularFireAuthModule,AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig,"stage-5af26"),ButtonModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
