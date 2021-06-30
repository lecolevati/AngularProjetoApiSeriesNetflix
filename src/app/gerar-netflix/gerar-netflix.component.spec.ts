import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarNetflixComponent } from './gerar-netflix.component';

describe('GerarNetflixComponent', () => {
  let component: GerarNetflixComponent;
  let fixture: ComponentFixture<GerarNetflixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerarNetflixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerarNetflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
