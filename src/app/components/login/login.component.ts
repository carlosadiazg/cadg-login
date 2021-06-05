import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from 'src/app/models/login/login.model';
import { ApiService } from '../../services/api.service';
import { AlertsComponent } from '../shared/alerts/alerts.component';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent extends AlertsComponent implements OnInit {
	login: LoginModel;
	loginGroup: FormGroup;

	constructor(private api: ApiService, private fb: FormBuilder) {
		super();
		this.login = new LoginModel();
	}

	ngOnInit(): void {
		this.loginGroup = this.fb.group({
			email: new FormControl(null, [ Validators.required, Validators.email ]),
			password: new FormControl(null, [ Validators.required, Validators.minLength(8), Validators.maxLength(15) ])
		});
	}

	submitForm() {
		if (this.loginGroup.status == 'VALID') {
			this.showLoading('Iniciando sesión');
			this.prepareData();
			this.callService();
		} else {
		}
		console.log(this.login);
	}

	prepareData() {
		this.login.email = this.loginGroup.value.email;
		this.login.password = this.loginGroup.value.password;
	}

	callService() {
		// this.api.login(this.login).subscribe((res) => {
		// 	console.log(res);
		// });
	}
}
