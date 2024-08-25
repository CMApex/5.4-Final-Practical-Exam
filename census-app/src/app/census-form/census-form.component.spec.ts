import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CensusFormComponent } from './census-form.component';

describe('CensusFormComponent', () => {
  let component: CensusFormComponent;
  let fixture: ComponentFixture<CensusFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CensusFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CensusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
