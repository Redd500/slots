import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
	moduleId: module.id,
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: [ 'app.component.css' ]
})

export class AppComponent implements OnInit  {
	money = 100;
	
	square1 = -1;
	square2 = -1;
	square3 = -1;
	
	bet = 1;
	
	changeSquare1(): void {
		this.square1 = Math.floor(Math.random() * 6);
	}
	
	changeSquare2(): void {
		this.square2 = Math.floor(Math.random() * 6);
	}
	
	changeSquare3(): void {
		this.square3 = Math.floor(Math.random() * 6);
	}
	
	rollSlots(): void {
		this.money -= this.bet;
		Observable.interval(100).take(15).subscribe(t => {
			this.changeSquare1();
		});
		Observable.interval(100).take(25).subscribe(t => {
			this.changeSquare2();
		});
		Observable.interval(100).take(35).subscribe(t => {
			this.changeSquare3();
			if (t == 34) {
				this.checkWin();
			}
		});
		
	}
	
	checkWin(): void {
		if (this.square1 == this.square2 && this.square1 == this.square3)
		{
			this.money += this.bet * 30;
		}
	}
}
