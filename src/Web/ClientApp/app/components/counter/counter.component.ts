import { Component } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    public currentCount = 0;

    constructor() {
        var t = "";
    }

    public incrementCounter() {
        this.currentCount++;
    }
}
