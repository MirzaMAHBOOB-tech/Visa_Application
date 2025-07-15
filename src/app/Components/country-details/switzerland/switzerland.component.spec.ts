import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitzerlandComponent } from './switzerland.component';

describe('SwitzerlandComponent', () => {
  let component: SwitzerlandComponent;
  let fixture: ComponentFixture<SwitzerlandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitzerlandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitzerlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
