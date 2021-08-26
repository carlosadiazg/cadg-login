import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
	selector: 'app-panel',
	templateUrl: './panel.component.html',
	styleUrls: [ './panel.component.css' ]
})
export class PanelComponent implements OnInit, OnChanges {
	@Input() titulo: string;
	@Input() regla: string;
	@Input() portal: string;
	@Input() limite: number;
	private params: string;
	private _regla: string;
	private _limite: string;
	private _count: number;

	constructor(private api: ApiService) {}

	ngOnInit(): void {
		// console.log('PanelComponent ngOnInit');
		this.params = this.regla + '/' + this.limite;
		//this.callService();
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes['regla']) {
			this._regla = changes['regla'].currentValue;
			this._count++;
		}
		if (changes['limite']) {
			this._limite = changes['limite'].currentValue;
			this._count++;
		}
		if ((this._count = 2)) {
			this.params = this._regla + '/' + this._limite;
			this.callService();
		}
	}

	callService() {
		this.api.commonsVentas(this.params);
	}
}
