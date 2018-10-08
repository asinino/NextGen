import { async, TestBed } from '@angular/core/testing';
import { FireauthModule } from './fireauth.module';

describe('FireauthModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FireauthModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FireauthModule).toBeDefined();
  });
});
