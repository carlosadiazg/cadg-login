import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { PasswordUpdateComponent } from './components/password-update/password-update.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AlertsComponent } from './components/shared/alerts/alerts.component';
import { ApiService } from './services/api.service';
import { MicrositeComponent } from './components/microsite/microsite.component';
import { PanelComponent } from './components/panel/panel.component';

@NgModule({
	declarations: [
		AppComponent,
		RegisterComponent,
		LoginComponent,
		PasswordRecoveryComponent,
		PasswordUpdateComponent,
		NavbarComponent,
		AlertsComponent,
		MicrositeComponent,
		PanelComponent
	],
	imports: [ BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule ],
	providers: [ ApiService ],
	bootstrap: [ AppComponent ],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
