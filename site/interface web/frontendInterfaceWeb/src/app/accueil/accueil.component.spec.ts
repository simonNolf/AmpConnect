import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { AccueilComponent } from './accueil.component';

describe('AccueilComponents', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ]
    })});

  it(`should have as title equal 'ceci est le titre de la musique'`, () => {
    const fixture = TestBed.createComponent(AccueilComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.Titre).toEqual('ceci est le titre de la musique');
  });

  it(`should have as title contain 'titre de la musique'`, () => {
    const fixture = TestBed.createComponent(AccueilComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.Titre).toContain('titre de la musique');
  });

  it(`should have as title is string`, () => {
    const fixture = TestBed.createComponent(AccueilComponent);
    const app = fixture.debugElement.componentInstance;
    expect(typeof app.Titre).toBe('string');
  });

  it(`should have as time is 0`, () => {
    const fixture = TestBed.createComponent(AccueilComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.time).toEqual(0);
  });

  it(`should have as time is number`, () => {
    const fixture = TestBed.createComponent(AccueilComponent);
    const app = fixture.debugElement.componentInstance;
    expect(typeof app.time).toBe('number');
  });

  it(`should have as musicPlaying is false`, () => {
    const fixture = TestBed.createComponent(AccueilComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.musicPlaying).toBeFalsy();
  });

  it(`should have as audi equal myAudio`, () => {
    const fixture = TestBed.createComponent(AccueilComponent);
    const app = fixture.debugElement.componentInstance;
    const myAudio = new Audio();
    expect(app.audio).toEqual(myAudio);
  });

});