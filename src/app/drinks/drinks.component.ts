import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {
  
  private ngUnSubscribe: Subject<void> = new Subject();

  public isAlcoholic: boolean;

  public isSearched: boolean;

  public drinks: any;

  public errorMessage: string;

  public searchedString: string;

  constructor(private dataService: DataService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.routeConfig.path !== 'search') {
      this.isAlcoholic = this.route.snapshot.routeConfig.path === 'alcoholic';
      this.isAlcoholic ? this.fetchAlcoholicDrinks() : this.fetchNonAlcoholicDrinks();
    } else {
      this.isSearched = true;
      this.search();
    }
  }

  fetchAlcoholicDrinks(): void {
    this.dataService
      .getAlcoholicDrinks()
      .pipe(takeUntil(this.ngUnSubscribe))
      .subscribe(
        (resp: any) => {
          this.drinks = resp.drinks;
          this.drinks.sort();
        },
        (error) => {
          this.errorMessage= error;             
        }
      );
  }
  fetchNonAlcoholicDrinks(): void {
    this.dataService
      .getNonAlcoholicDrinks()
      .pipe(takeUntil(this.ngUnSubscribe))
      .subscribe(
        (resp: any) => {
          this.drinks = resp.drinks;
          this.drinks.sort();
        },
        (error) => {
          this.errorMessage= error;             
        }
      );
  }

  search(): void {
    this.route.queryParams.subscribe(qparams => {
      this.searchedString = qparams.f;
      this.dataService
          .getDrinksFromTheFirstLetter(qparams.f)
          .pipe(takeUntil(this.ngUnSubscribe))
          .subscribe(
              (resp: any) => {
                  this.drinks = resp.drinks;
                  this.drinks.sort();
              },
              (error) => {
                  this.errorMessage = error;
              }
          );
    });
  }

}
