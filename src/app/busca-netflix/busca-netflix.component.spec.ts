import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaNetflixComponent } from './busca-netflix.component';

describe('BuscaNetflixComponent', () => {
  let component: BuscaNetflixComponent;
  let fixture: ComponentFixture<BuscaNetflixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaNetflixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaNetflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
