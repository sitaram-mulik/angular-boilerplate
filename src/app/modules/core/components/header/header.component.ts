import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    template: ` <p>header works!</p> `,
    styles: [],
})
export class HeaderComponent implements OnInit {
    ngOnInit(): void {
        const log: unknown = 'hey';
        const m: unknown = 10;
        console.log(log);
    }
}