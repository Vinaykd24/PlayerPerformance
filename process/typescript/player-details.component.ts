import {Component} from 'angular2/core';
import {Player} from './players';

@Component({
  selector: 'player-details',
  templateUrl:'partials/playerdetails.html',
  inputs: ['player']
})

export class PlayerDetailsComponent{}