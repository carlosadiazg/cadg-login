import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login/login.model';
import { RegisterModel } from '../models/register/register.model';
import { PasswordRecoveryModel } from '../models/password-recovery/password-recovery.model';
import { PasswordUpdateModel } from '../models/password-update/password-update.model';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	private url: string = 'http://localhost:3000/api/firebase/';
	constructor(private http: HttpClient) {}

	login(data: LoginModel) {
		let response = this.http.post(`${this.url}sign-in`, data);
		//console.log(response);
		return response;
	}

	register(data: RegisterModel) {
		let response = this.http.post(`${this.url}create`, data);
		//console.log(response);
		return response;
	}

	passwordRecovery(data: PasswordRecoveryModel) {
		let response = this.http.post(`${this.url}send-recovery-email`, data);
		//console.log(response);
		return response;
	}

	passwordUpdate(data: PasswordUpdateModel) {
		let response = this.http.post(`${this.url}update-password`, data);
		//console.log(response);
		return response;
	}

	commonsVentas(params: string) {
		const headers = new HttpHeaders().set('token-external', 'gBPsYbxHaLbAb1Sj6DrM');

		let url = 'https://dev-api-carrito.solucionesbolivar.com/api/products-sales/' + params;
		let response = this.http.get(url, { headers }).subscribe((data) => {
			console.log(data['result']);
		});
	}
}
