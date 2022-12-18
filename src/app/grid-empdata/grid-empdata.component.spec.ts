import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridEmpdataComponent } from './grid-empdata.component';

describe('GridEmpdataComponent', () => {
  let component: GridEmpdataComponent;
  let fixture: ComponentFixture<GridEmpdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridEmpdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridEmpdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
