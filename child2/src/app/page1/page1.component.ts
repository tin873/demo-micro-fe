import { Component, OnInit } from '@angular/core';
import { LibTestTinSpaService } from 'lib-test-tin-spa';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'child2-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor( private _tintestService: LibTestTinSpaService ) { }
  name: string='';
  curentCount: number = 0;
  ngOnInit() {
    this._tintestService.currentState.subscribe(state => {
      this.curentCount = state;
    });
  }
  pushData(){
    const event = new CustomEvent('eventCustom', { detail: 1 });
    dispatchEvent(event);
    // debugger;
    // this._tintestService.changeState(this.curentCount + 1);
  }

}
