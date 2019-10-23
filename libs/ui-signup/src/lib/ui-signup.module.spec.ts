import { async, TestBed } from '@angular/core/testing';
import { UiSignupModule } from './ui-signup.module';

describe('UiSignupModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiSignupModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiSignupModule).toBeDefined();
  });
});
