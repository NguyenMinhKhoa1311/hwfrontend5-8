import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogdetailComponent } from './dialogdetail.component';

describe('DialogdetailComponent', () => {
  let component: DialogdetailComponent;
  let fixture: ComponentFixture<DialogdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
