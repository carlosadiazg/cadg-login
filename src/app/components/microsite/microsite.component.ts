import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

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

	constructor() {}

	ngOnChanges(changes: SimpleChanges) {
		console.log('ngOnChanges 1');
		// if (changes['token']) {
		// 	console.log('ngOnChanges 2');
		// 	console.log(changes['token']);
		// }
	}

	ngOnInit() {
		setTimeout(() => {
			this.titulo = 'Micrositio';
			this.regla = 'masvendidos';
			this.portal = 'gBPsYbxHaLbAb1Sj6DrM';
			this.limite = 5;
		}, 1500);
	}
}
