import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNetflixComponent } from './lista-netflix.component';

describe('ListaNetflixComponent', () => {
  let component: ListaNetflixComponent;
  let fixture: ComponentFixture<ListaNetflixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaNetflixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaNetflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
