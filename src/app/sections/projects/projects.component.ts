import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Component, OnInit } from "@angular/core";
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
  constructor(
    private modalService: NgbModal,
    private categorieService: CategoriesService
  ) {}

  async ngOnInit() {
    this.categories = await this.categorieService.getCategories();
  }
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }

  async onSelect(e) {
    console.log(e);
    this.selectedCategorie = e.nextId;
    //this.categorie$ = await this.categorieService.getCategorie(e.activeId)
  }
}
