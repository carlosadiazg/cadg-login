import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterModel } from 'src/app/models/register/register.model';
import { ApiService } from '../../services/api.service';
import { AlertsComponent } from '../shared/alerts/alerts.component';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.css' ]
})
export class RegisterComponent extends AlertsComponent implements OnInit {
	register: RegisterModel;
	registerGroup: FormGroup;

	constructor(private api: ApiService, private fb: FormBuilder) {
		super();
		this.register = new RegisterModel();
	}

	ngOnInit(): void {
		this.registerGroup = this.fb.group({
			email: new FormControl(null, [ Validators.required, Validators.email ]),
			password: new FormControl(null, [ Validators.required, Validators.minLength(8), Validators.maxLength(15) ])
		});
	}

	onCaptchaExpired(event: any) {
		console.log(event);
	}

	onCaptchaResponse(event: any) {
		console.log(event);
	}

	submitForm() {
		if (this.registerGroup.status == 'VALID') {
			this.showLoading('Registrando información');
			this.prepareData();
			this.callService();
		}
	}

	prepareData() {
		this.register.email = this.registerGroup.value.email;
		this.register.password = this.registerGroup.value.password;
	}

	callService() {
		// this.api.register(this.register).subscribe((res) => {
		// 	console.log(res);
		// });
	}
}
