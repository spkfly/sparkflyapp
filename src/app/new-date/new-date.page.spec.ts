import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewDatePage } from './new-date.page';

describe('NewDatePage', () => {
  let component: NewDatePage;
  let fixture: ComponentFixture<NewDatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewDatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
