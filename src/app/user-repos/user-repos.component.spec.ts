import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReposComponent } from './user-repos.component';

describe('UserReposComponent', () => {
  let component: UserReposComponent;
  let fixture: ComponentFixture<UserReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
