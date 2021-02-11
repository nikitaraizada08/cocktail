import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersComponent } from './filters.component';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    component.filters = [];
    component.inputFilterText = 'all';
    component.tagLimit = 10;
    component.allTags = ['biryani', 'fastfood'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call handleFilter', () => {
    const spy = spyOn(component, 'handleFilter');
    spy.and.callThrough();
    component.handleFilter({target: {innerHtml: '<p></p>'}});
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should call showMoreTags', () => {
    const spy = spyOn(component, 'showMoreTags');
    spy.and.callThrough();
    component.showMoreTags();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should get InputFiltertext', () => {
    component.inputFilterText = 'Test';
    const getter = component.inputFilterText;
    expect(getter).toEqual('Test');
  });

});
