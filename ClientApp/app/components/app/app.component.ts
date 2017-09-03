
import { Component } from '@angular/core';
import { DataService } from '../Data.service'

@Component({
    selector: 'app',
    template: './app.component.html',
    styles: ['./app.component.css'],
    providers: [DataService]
})
export class AppComponent {
}
