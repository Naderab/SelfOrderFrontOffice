import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CategoriesService } from "../../providers/categories.service";



@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  categories;
  categorie$;
  selectedCategorie = "all";
  selctedItem;
  constructor(
    private categorieService: CategoriesService,
    public dialog: MatDialog
  ) {}



  async ngOnInit() {
    this.categories = await this.categorieService.getCategories();
  }
  openScrollableContent(itemSelected) {
    const dialogRef = this.dialog.open(DialogContentExampleDialog,{
      data: {item : itemSelected}
    });

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
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<ProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data)

    }

}

