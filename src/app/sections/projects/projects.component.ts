import { async } from '@angular/core/testing';
import { ModifierGroupsService } from './../../providers/modifier-groups.service';
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
  modifierGroups=[];
  quantity=1;

  constructor(
    private categorieService: CategoriesService,
    public dialog: MatDialog,
    private modifierGroupService : ModifierGroupsService
     
  ) {}



  async ngOnInit() {
    this.categories = await this.categorieService.getCategories();
    
  }
  async openScrollableContent(itemSelected) {
    itemSelected.modifier_group_ids.forEach(async element => {
      console.log(element)
      await this.modifierGroupService.getModifierGroup(element).subscribe(
        data => {
          this.modifierGroups.push(data)
        }
      )
      console.log(this.modifierGroups)
    });
    const dialogRef = this.dialog.open(DialogContentExampleDialog,{
      data: {item : itemSelected,modifiergroups: this.modifierGroups,quantity:this.quantity}
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
  modifierGroups = [];
  
  constructor(
    public dialogRef: MatDialogRef<ProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
      
      console.log(data)

    }
    plus()
    {
      console.log(this.data)
      this.data.quantity ++ ;
    }
    moins(){
      this.data.quantity --;
    }

}

