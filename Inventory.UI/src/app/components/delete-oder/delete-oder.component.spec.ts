import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOderComponent } from './delete-oder.component';

describe('DeleteOderComponent', () => {
  let component: DeleteOderComponent;
  let fixture: ComponentFixture<DeleteOderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteOderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteOderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
