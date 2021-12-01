

import { AccueilComponent } from './accueil.component';

import { HttpService } from '../service/http.service';

describe('AccueilComponent', () => {

  let fixture: AccueilComponent;
  let httpServiceMock: HttpService;

  beforeEach(() => {
    fixture = new AccueilComponent(
      httpServiceMock
    );
  });
  for (let i = 0; i < 3; i++) {
    it(`should have as nomApplication a string`, () => {
      let AccueilTitre = fixture.Title
      expect(typeof AccueilTitre).toBe('string');
    });

    it(`should have as Titre a string`, () => {
      let AccueilMusicTime = fixture.time
      expect(typeof AccueilMusicTime).toBe('number');
    });

    it(`should have as Titre a string`, () => {
      let AccueilGetMusicTime = fixture.getTime()
      expect(typeof AccueilGetMusicTime).toBe('number');
    });

    it(`should have as Titre a string`, () => {
      let AccueilGetMusicTitle = fixture.getTitle()
      expect(typeof AccueilGetMusicTitle).toBe('string');
    });
  }

});
