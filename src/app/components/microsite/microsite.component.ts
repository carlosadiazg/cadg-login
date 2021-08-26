import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
//const c_json = require('../../../config/contenido.json');
import * as c_json from '../../../config/contenido.json';

@Component({
	selector: 'app-microsite',
	templateUrl: './microsite.component.html',
	styleUrls: [ './microsite.component.css' ]
})
export class MicrositeComponent implements OnInit, OnChanges {
	public portal: string = ''; //gBPsYbxHaLbAb1Sj6DrM
	public titulo: string = '';
	public regla: string = '';
	public limite: number = 0;
	public param: string = '';
	public idcarrito: number = 0;
	public label: string = '';
	public detail: string = '';

	constructor() {}

	ngOnChanges(changes: SimpleChanges) {
		// if (changes['token']) {
		// 	console.log('ngOnChanges 2');
		// 	console.log(changes['token']);
		// }
	}

	ngOnInit() {

		this.label = c_json.label;
		this.detail = c_json.detail;
		// dev gBPsYbxHaLbAb1Sj6DrM Personas
		// qa  o0zd2oTJyvvvnTqELNVA 100c
		setTimeout(() => {
			this.titulo = 'Micrositio masvendidos';
			this.regla = 'masvendidos';
			this.portal = 'gBPsYbxHaLbAb1Sj6DrM';
			this.limite = 5;
			this.idcarrito = 10;
		}, 1500);
		setTimeout(() => {
			this.titulo = 'Micrositio destacados';
			this.regla = 'destacados';
			this.portal = '40HobcfBzO73DqfaXuB2';
			this.param = 'left';
			this.limite = 3;
			this.idcarrito = 20;
		}, 5000);
	}
}
