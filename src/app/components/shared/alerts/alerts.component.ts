import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-alerts',
	templateUrl: './alerts.component.html',
	styleUrls: [ './alerts.component.css' ]
})
export class AlertsComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	showLoading(text: string) {
		//Swal.showLoading().then(function(dismiss) {});
		Swal({
			text: text,
			allowOutsideClick: false
		}).then(function(dismiss) {});
	}
}
