//angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//angular material
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';


import { AppRoutingModule } from './app-routing.module';

//nebular
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

//components
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutMeComponent } from './components/aboutme/aboutme.component';
import { ProyectComponent } from './components/proyect/proyect.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ResgistroComponent } from './components/resgistro/resgistro.component';
import { ButtonUpComponent } from './components/button-up/button-up.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    Page404Component,
    LoginComponent,
    ProfileComponent,
    EducacionComponent,
    ExperienciasComponent,
    NavbarComponent,
    FooterComponent,
    AboutMeComponent,
    ProyectComponent,
    SkillsComponent,
    ResgistroComponent,
    ButtonUpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    MatCardModule, MatProgressSpinnerModule, MatButtonModule, 
    MatGridListModule, MatInputModule, MatFormFieldModule,
    FormsModule, ReactiveFormsModule, MatTabsModule,MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
