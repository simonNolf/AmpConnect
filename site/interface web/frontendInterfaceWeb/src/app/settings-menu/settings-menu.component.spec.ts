
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



    it(`should have as onAnnulerFormGeneral is false when function is called`, () => {
        let annulerGeneral = fixture.onAnnulerFormGeneral()
        expect(fixture.displayGeneralForm).toBeFalsy();
    });


});
