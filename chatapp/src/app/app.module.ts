import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { LoginComponent, DialogContentExampleDialog } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { LoginformComponent } from './login/loginform/loginform.component';
import { SignupformComponent } from './login/signupform/signupform.component';
import { LoginService } from './login.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HomeComponent } from './home/home.component';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import  {  NgxEmojiPickerModule  }  from  'ngx-emoji-picker';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import { AuthguardService } from './authguard.service';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    LoginformComponent,
    SignupformComponent,
    DialogContentExampleDialog,
    HomeComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatDividerModule,
    NgxEmojiPickerModule.forRoot(),
    NgxUiLoaderModule,
    MatSidenavModule,
    MatMenuModule,
    MatExpansionModule,
    MatTabsModule,


 

  ],
  providers: [
    LoginService,
    AuthguardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
