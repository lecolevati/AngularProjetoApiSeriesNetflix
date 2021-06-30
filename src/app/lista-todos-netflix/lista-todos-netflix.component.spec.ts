import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTodosNetflixComponent } from './lista-todos-netflix.component';

describe('ListaTodosNetflixComponent', () => {
  let component: ListaTodosNetflixComponent;
  let fixture: ComponentFixture<ListaTodosNetflixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTodosNetflixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTodosNetflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
