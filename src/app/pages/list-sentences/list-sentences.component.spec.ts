import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSentencesComponent } from './list-sentences.component';

describe('ListSentencesComponent', () => {
  let component: ListSentencesComponent;
  let fixture: ComponentFixture<ListSentencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSentencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSentencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
