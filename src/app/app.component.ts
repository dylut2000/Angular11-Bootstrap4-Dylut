import { Component, OnInit } from '@angular/core';

// import jquery
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  title = 'bootstrap4Dylut';

  ngOnInit (): void {

    // testing JQUERY document ready
    $(document).ready(function () {
      console.log('hello world')
    });

  }

}
