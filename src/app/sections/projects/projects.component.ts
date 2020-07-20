import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CategoriesService } from "../../providers/categories.service";

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  categories;
  categorie$;
  selectedCategorie = "all";
  constructor(
    private categorieService: CategoriesService,
    public dialog: MatDialog
  ) {}



  async ngOnInit() {
    this.categories = await this.categorieService.getCategories();
  }
  openScrollableContent() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  async onSelect(e) {
    console.log(e);
    this.selectedCategorie = e.nextId;
    //this.categorie$ = await this.categorieService.getCategorie(e.activeId)
  }
}


