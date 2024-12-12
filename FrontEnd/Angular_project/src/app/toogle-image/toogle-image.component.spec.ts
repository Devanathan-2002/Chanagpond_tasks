import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToogleImageComponent } from './toogle-image.component';

describe('ToogleImageComponent', () => {
  let component: ToogleImageComponent;
  let fixture: ComponentFixture<ToogleImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToogleImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToogleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
