import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountUiPage } from './account-ui.page';

describe('AccountUiPage', () => {
  let component: AccountUiPage;
  let fixture: ComponentFixture<AccountUiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountUiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountUiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
