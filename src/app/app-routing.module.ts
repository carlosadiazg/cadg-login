import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MicrositeComponent } from './components/microsite/microsite.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { PasswordUpdateComponent } from './components/password-update/password-update.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'password-recovery', component: PasswordRecoveryComponent },
	{ path: 'password-update', component: PasswordUpdateComponent },
	{ path: 'microsite', component: MicrositeComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
