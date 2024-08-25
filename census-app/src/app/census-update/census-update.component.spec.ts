import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CensusUpdateComponent } from './census-update.component';

describe('CensusUpdateComponent', () => {
  let component: CensusUpdateComponent;
  let fixture: ComponentFixture<CensusUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CensusUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CensusUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
