import { Component, OnInit, OnDestroy } from '@angular/core';
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})

export class CommandeComponent implements OnInit,OnDestroy {
  public tableData3: TableData;

  constructor() { }

  ngOnInit() {
    var navbar = document.getElementsByTagName('app-navbar')[0];
        navbar.children[0].classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('sections-page');
    this.tableData3 = {
      headerRow: [ '', '', 'Price', 'Quantity', 'Total'],
      dataRows: [
          ['tables/agenda.png', 'Get Shit Done Notebook', 'Most beautiful agenda for the office.', '49', '1','49'],
          ['tables/stylus.jpg', 'Stylus',  'Design is not just what it looks like and feels like. Design is how it works.', '499', '2', '998'],
          ['tables/evernote.png', 'Evernote iPad Stander', 'A groundbreaking Retina display. All-flash architecture. Fourth-generation Intel processors.', '799', '1', '799']
      ]
  };
  }
  ngOnDestroy() {
    var navbar = document.getElementsByTagName('app-navbar')[0];
    navbar.children[0].classList.add('navbar-transparent');
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('sections-page');
}

}
