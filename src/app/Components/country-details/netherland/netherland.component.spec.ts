import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetherlandComponent } from './netherland.component';

describe('NetherlandComponent', () => {
  let component: NetherlandComponent;
  let fixture: ComponentFixture<NetherlandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NetherlandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetherlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
