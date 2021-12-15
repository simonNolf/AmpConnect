import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { AccueilComponent } from './accueil.component';

import {HttpClientModule} from '@angular/common/http';

describe('AccueilComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ]
    })});

  it('should have as title ceci est le titre de la musique', () => {
    const fixture = TestBed.createComponent(AccueilComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.getTitle()).toEqual('ceci est le titre de la musique');
  })

});
