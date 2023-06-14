import { Component } from '@angular/core';

@Component({
  selector: 'app-studienverlaufsplan',
  templateUrl: './studienverlaufsplan.component.html',
  styleUrls: ['./studienverlaufsplan.component.css']
})
export class StudienverlaufsplanComponent {

  hideRow(rowId: string) {
    const row = document.getElementById(rowId) as HTMLElement;
    if (row) {
      row.style.display = 'none';
    }
  }

}
