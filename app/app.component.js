"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var AppComponent = (function () {
    function AppComponent() {
        this.money = 100;
        this.square1 = -1;
        this.square2 = -1;
        this.square3 = -1;
        this.bet = 1;
    }
    AppComponent.prototype.changeSquare1 = function () {
        this.square1 = Math.floor(Math.random() * 6);
    };
    AppComponent.prototype.changeSquare2 = function () {
        this.square2 = Math.floor(Math.random() * 6);
    };
    AppComponent.prototype.changeSquare3 = function () {
        this.square3 = Math.floor(Math.random() * 6);
    };
    AppComponent.prototype.rollSlots = function () {
        var _this = this;
        this.money -= this.bet;
        Rx_1.Observable.interval(100).take(15).subscribe(function (t) {
            _this.changeSquare1();
        });
        Rx_1.Observable.interval(100).take(25).subscribe(function (t) {
            _this.changeSquare2();
        });
        Rx_1.Observable.interval(100).take(35).subscribe(function (t) {
            _this.changeSquare3();
            if (t == 34) {
                _this.checkWin();
            }
        });
    };
    AppComponent.prototype.checkWin = function () {
        if (this.square1 == this.square2 && this.square1 == this.square3) {
            this.money += this.bet * 30;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.css']
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map