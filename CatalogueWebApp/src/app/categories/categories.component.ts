import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
categories : any;
  constructor(private catlogueService: CatalogueService) { }

  ngOnInit() {
    this.catlogueService.getAllCategories()
      .subscribe(arg => this.categories = arg);
    
  }

}
