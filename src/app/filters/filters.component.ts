import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  startTag: number;

  allTags: string[];

  @Input() set filters(val) {
    this.allTags = val;
  }

  selectedFilterText: string;

  @Input() set inputFilterText(val) {
    if (!val) {
      this.selectedFilterText = 'all';
    } else {
    this.selectedFilterText = val;
    }
  }

  get inputFilterText(): string {
    return this.selectedFilterText;
  }

  @Output() selectedFilter: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.startTag = 0;
   }

  ngOnInit(): void {
  }

  handleFilter(event): void {
  this.inputFilterText = event.target.innerHTML;
  this.selectedFilter.emit(this.selectedFilterText);
  }

}
