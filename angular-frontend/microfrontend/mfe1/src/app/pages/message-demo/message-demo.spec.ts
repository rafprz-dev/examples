import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageDemo } from './message-demo';

describe('MessageDemo', () => {
  let component: MessageDemo;
  let fixture: ComponentFixture<MessageDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(MessageDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
