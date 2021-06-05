import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordRecoveryModel } from 'src/app/models/password-recovery/password-recovery.model';
import { ApiService } from '../../services/api.service';
import { AlertsComponent } from '../shared/alerts/alerts.component';

@Component({
	selector: 'app-password-recovery',
	templateUrl: './password-recovery.component.html',
	styleUrls: [ './password-recovery.component.css' ]
})
export class PasswordRecoveryComponent extends AlertsComponent implements OnInit {
	passwordRecovery: PasswordRecoveryModel;
	passwordRecoveryGroup: FormGroup;

	constructor(private api: ApiService, private fb: FormBuilder) {
		super();
		this.passwordRecovery = new PasswordRecoveryModel();
	}

	ngOnInit(): void {
		this.passwordRecoveryGroup = this.fb.group({
			email: new FormControl(null, [ Validators.required, Validators.email ])
		});
	}

	submitForm() {
		if (this.passwordRecoveryGroup.status == 'VALID') {
			this.showLoading('Validando correo...');
			this.prepareData();
			this.callService();
		}
	}

	prepareData() {
		this.passwordRecovery.email = this.passwordRecoveryGroup.value.email;
	}

	callService() {
		this.api.passwordRecovery(this.passwordRecovery).subscribe((res) => {
			console.log(res);
		});
	}
}
