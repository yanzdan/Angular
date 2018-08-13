import { TestBed, async } from '@angular/core/testing';
import { StartComponent } from './start.component';
describe('StartComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StartComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(StartComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'n2-course-theory'`, async(() => {
    const fixture = TestBed.createComponent(StartComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('n2-course-theory');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(StartComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to n2-course-theory!');
  }));
});
