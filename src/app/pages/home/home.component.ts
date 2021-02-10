import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  /**
   * Form control for input field to search drinks with the first letter
   */
  public firstLetter: FormControl;
  private ngUnSubscribe: Subject<void> = new Subject();

  constructor(private router: Router, private dataService: DataService) {
    this.firstLetter = new FormControl('');
  }

  ngOnInit(): void {
  }

  findAlcoholic(): void {
    this.router.navigate(['alcoholic']);
  }

  findNonAlcoholic(): void {
    this.router.navigate(['nonalcoholic']);
  }

  search(): void {
    this.router.navigate(['/search'], {queryParams: {f: this.firstLetter.value}});
  }

}
