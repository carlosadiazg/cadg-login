import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordUpdateModel } from 'src/app/models/password-update/password-update.model';
import { ApiService } from '../../services/api.service';
import { AlertsComponent } from '../shared/alerts/alerts.component';

@Component({
	selector: 'app-password-update',
	templateUrl: './password-update.component.html',
	styleUrls: [ './password-update.component.css' ]
})
export class PasswordUpdateComponent extends AlertsComponent implements OnInit {
	passwordUpdate: PasswordUpdateModel;
	passwordUpdateGroup: FormGroup;

	constructor(private api: ApiService, private fb: FormBuilder) {
		super();
		this.passwordUpdate = new PasswordUpdateModel();
	}

	ngOnInit(): void {
		this.passwordUpdateGroup = this.fb.group({
			password: new FormControl(null, [ Validators.required, Validators.minLength(8), Validators.maxLength(15) ])
		});
	}

	submitForm() {
		if (this.passwordUpdateGroup.status == 'VALID') {
			this.showLoading('Actualizando contraseña');
			this.prepareData();
			this.callService();
		}
	}

	prepareData() {
		this.passwordUpdate.password = this.passwordUpdateGroup.value.password;
	}

	callService() {
		this.api.passwordUpdate(this.passwordUpdate).subscribe((res) => {
			console.log(res);
		});
	}
}
