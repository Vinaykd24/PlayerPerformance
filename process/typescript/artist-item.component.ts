import {Component} from 'angular2/core';

@Component({
    selector:'player-list',
    templateUrl: 'partials/artistitem.html',
    styleUrls: ['css/app-items.css'],
    inputs: ['player']

})

export class ArtistItemComponent {}