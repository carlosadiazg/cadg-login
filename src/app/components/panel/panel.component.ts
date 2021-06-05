import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
	selector: 'app-panel',
	templateUrl: './panel.component.html',
	styleUrls: [ './panel.component.css' ]
})
export class PanelComponent implements OnInit {
	@Input() titulo: string;
	@Input() regla: string;
	@Input() portal: string;
	@Input() limite: number;

	constructor(private api: ApiService) {}

	ngOnInit(): void {
		this.callService();
	}

	callService() {
		console.log('this.titulo ' + this.titulo);
		console.log('this.regla ' + this.regla);
		console.log('this.portal ' + this.portal);
		console.log('this.limite ' + this.limite);

		this.api.commonsVentas();
	}
}
