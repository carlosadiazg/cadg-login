import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogintransversalComponent } from './logintransversal.component';

describe('LogintransversalComponent', () => {
  let component: LogintransversalComponent;
  let fixture: ComponentFixture<LogintransversalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogintransversalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogintransversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
