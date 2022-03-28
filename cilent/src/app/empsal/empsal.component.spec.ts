import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpsalComponent } from './empsal.component';

describe('EmpsalComponent', () => {
  let component: EmpsalComponent;
  let fixture: ComponentFixture<EmpsalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpsalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpsalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
