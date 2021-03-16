import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoProcessosComponent } from './resumo-processos.component';

describe('ResumoProcessosComponent', () => {
  let component: ResumoProcessosComponent;
  let fixture: ComponentFixture<ResumoProcessosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumoProcessosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumoProcessosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
