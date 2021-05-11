import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { PasswordUpdateComponent } from './components/password-update/password-update.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
	declarations: [
		AppComponent,
		RegisterComponent,
		LoginComponent,
		PasswordRecoveryComponent,
		PasswordUpdateComponent,
		NavbarComponent
	],
	imports: [ BrowserModule, AppRoutingModule, APP_ROUTING ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
