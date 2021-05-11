import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { PasswordUpdateComponent } from './components/password-update/password-update.component';
import { RegisterComponent } from './components/register/register.component';

const APP_ROUTES: Routes = [
	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'password-recovery', component: PasswordRecoveryComponent },
	{ path: 'password-update', component: PasswordUpdateComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
