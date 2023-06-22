import { Component, OnInit } from '@angular/core';
import { LibTestTinSpaService } from 'lib-test-tin-spa';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'child1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count: number=0;
  constructor(private commonPKService: LibTestTinSpaService) { }
  ngOnInit(): void {
    fromEvent(window, 'eventCustom').subscribe((event: any) => {
      console.log(event);
      this.count++;
    });
    this.commonPKService.currentState.subscribe(state => {
      debugger;
      this.count = state;
    });
  }
  title = 'child1';
}
