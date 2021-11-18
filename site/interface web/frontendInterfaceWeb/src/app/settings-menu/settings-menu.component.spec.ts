import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { SettingsMenuComponent } from './settings-menu.component';

describe('SettingsMenuComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ]
        })});

    it(`should have as nomApplication is string`, () => {
        const fixture = TestBed.createComponent(SettingsMenuComponent);
        const app = fixture.debugElement.componentInstance;
        expect(typeof app.nomApplication).toBe('string');
    });

    it(`should have as volumeApplication is number`, () => {
        const fixture = TestBed.createComponent(SettingsMenuComponent);
        const app = fixture.debugElement.componentInstance;
        expect(typeof app.volumeApplication).toBe('number');
    });

    it(`should have as volumeApplication is 0`, () => {
        const fixture = TestBed.createComponent(SettingsMenuComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.volumeApplication).toEqual(0);
    });

    it(`should have as displayYoutubeForm is false`, () => {
        const fixture = TestBed.createComponent(SettingsMenuComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.displayYoutubeForm).toBeFalsy();
    });

    it(`should have as onYTForm is true when function is called`, () => {
        const fixture = TestBed.createComponent(SettingsMenuComponent);
        const app = fixture.debugElement.componentInstance;
        app.onYtForm();
        expect(app.displayYoutubeForm).toBeTruthy();
    });

    it(`should have as displayGeneralForm is false`, () => {
        const fixture = TestBed.createComponent(SettingsMenuComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.displayGeneralForm).toBeFalsy();
    });

    it(`should have as onGnForm is true when function is called`, () => {
        const fixture = TestBed.createComponent(SettingsMenuComponent);
        const app = fixture.debugElement.componentInstance;
        app.onGnForm();
        expect(app.displayGeneralForm).toBeTruthy();
    });

    it(`should have as displayDabForm is false`, () => {
        const fixture = TestBed.createComponent(SettingsMenuComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.displayDabForm).toBeFalsy();
    });

    it(`should have as onDabForm is true when function is called`, () => {
        const fixture = TestBed.createComponent(SettingsMenuComponent);
        const app = fixture.debugElement.componentInstance;
        app.onDabForm();
        expect(app.displayDabForm).toBeTruthy();
    });

    it(`should have as onAnnulerFormYtb is false when function is called`, () => {
        const fixture = TestBed.createComponent(SettingsMenuComponent);
        const app = fixture.debugElement.componentInstance;
        app.onAnnulerFormYtb();
        expect(app.displayYoutubeForm).toBeFalsy();
    });

    it(`should have as onAnnulerFormGeneral is false when function is called`, () => {
        const fixture = TestBed.createComponent(SettingsMenuComponent);
        const app = fixture.debugElement.componentInstance;
        app.onAnnulerFormGeneral();
        expect(app.displayGeneralForm).toBeFalsy();
    });

    it(`should have as onAnnulerFormDab is false when function is called`, () => {
        const fixture = TestBed.createComponent(SettingsMenuComponent);
        const app = fixture.debugElement.componentInstance;
        app.onAnnulerFormDab();
        expect(app.displayDabForm).toBeFalsy();
    });

});
