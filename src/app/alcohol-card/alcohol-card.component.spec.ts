import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoholCardComponent } from './alcohol-card.component';

describe('AlcoholCardComponent', () => {
  let component: AlcoholCardComponent;
  let fixture: ComponentFixture<AlcoholCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlcoholCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcoholCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
