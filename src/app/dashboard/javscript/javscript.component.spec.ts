import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavscriptComponent } from './javscript.component';

describe('JavscriptComponent', () => {
  let component: JavscriptComponent;
  let fixture: ComponentFixture<JavscriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavscriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
