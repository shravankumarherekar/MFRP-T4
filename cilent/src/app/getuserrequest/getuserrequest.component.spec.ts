import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetuserrequestComponent } from './getuserrequest.component';

describe('GetuserrequestComponent', () => {
  let component: GetuserrequestComponent;
  let fixture: ComponentFixture<GetuserrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetuserrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetuserrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
