import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcontactComponent } from './getcontact.component';

describe('GetcontactComponent', () => {
  let component: GetcontactComponent;
  let fixture: ComponentFixture<GetcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcontactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
