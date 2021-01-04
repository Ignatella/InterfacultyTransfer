import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeCodeComponent } from './node-code.component';

describe('NodeCodeComponent', () => {
  let component: NodeCodeComponent;
  let fixture: ComponentFixture<NodeCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
