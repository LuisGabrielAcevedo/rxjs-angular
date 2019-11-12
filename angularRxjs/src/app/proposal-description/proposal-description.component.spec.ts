import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalDescriptionComponent } from './proposal-description.component';

describe('ProposalDescriptionComponent', () => {
  let component: ProposalDescriptionComponent;
  let fixture: ComponentFixture<ProposalDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
