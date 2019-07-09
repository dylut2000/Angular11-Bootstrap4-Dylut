import { Component, OnInit } from '@angular/core';

/**
 * 2 ways to import JQUERY according me
 * first: import * as $ from 'jquery';
 * second: declare var $: any;
 *
 * use any of these 2, they both works, but ill use the first
 */
import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      console.log('Document ready jQuery works');
    });

  }

}
