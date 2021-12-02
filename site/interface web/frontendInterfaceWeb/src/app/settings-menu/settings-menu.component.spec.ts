
import { NgForm } from '@angular/forms';
import { SettingHttpService } from '../services/settings-http.service';
import { SettingsMenuComponent } from './settings-menu.component';

describe('SettingsMenuComponent', () => {
    
    let fixture: SettingsMenuComponent;
  let httpSettingServiceMock: SettingHttpService;
  let form:NgForm
  const testForm = <NgForm>{
    value: {
        name: "Hello",
        category: "World"
    }
};

  beforeEach(() => {
    fixture = new SettingsMenuComponent(
        httpSettingServiceMock
    );
  });

    it(`should have as nomApplication is string`, () => {
        let appName = fixture.nomApplication
        expect(typeof appName).toBe('string');
    });

    it(`should have as volumeApplication is number`, () => {
        let volume = fixture.volumeApplication
        expect(typeof volume).toBe('number');
    });

    it(`should have as displayYoutubeForm is false`, () => {
        let displayYoutube = fixture.displayYoutubeForm
        expect(displayYoutube).toBeFalsy();
    });

    it(`should have as onYTForm is true when function is called`, () => {
        fixture.onYtForm()
        let displayYoutube = fixture.displayYoutubeForm
        expect(displayYoutube).toBeTruthy();
    });

    it(`should have as displayGeneralForm is false`, () => {
        let displayGeneral = fixture.displayGeneralForm
        expect(displayGeneral).toBeFalsy();
    });

    it(`should have as onGnForm is true when function is called`, () => {
        fixture.onSubmitGeneral(testForm)
        let displayYoutube = fixture.displayYoutubeForm
        expect(displayYoutube).toBeFalsy();
    });

    it(`should have as displayDabForm is false`, () => {
        let displayDab = fixture.displayDabForm
        expect(displayDab).toBeFalsy();
    });

    it(`should have as onDabForm is true when function is called`, () => {
        fixture.onSubmitDAB(testForm)
        let displayYoutube = fixture.displayDabForm
        expect(displayYoutube).toBeFalsy();
    });

    it(`should have as onAnnulerFormYtb is false when function is called`, () => {
        let annulerYoutube = fixture.onAnnulerFormYtb()
        expect(fixture.displayYoutubeForm).toBeFalsy();
    });

    it(`should have as onAnnulerFormGeneral is false when function is called`, () => {
        let annulerGeneral = fixture.onAnnulerFormGeneral()
        expect(fixture.displayGeneralForm).toBeFalsy();
    });

    it(`should have as onAnnulerFormDab is false when function is called`, () => {
        let annulerDab = fixture.onAnnulerFormDab()
        expect(fixture.displayDabForm).toBeFalsy();
    });

});
