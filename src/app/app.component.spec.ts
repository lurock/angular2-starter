import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {AppComponent} from './app.component';

describe('AppComponent', () => {
    let appComponent: AppComponent;
    
    beforeEach(() => {
        appComponent = new AppComponent();
    });
    
    it('myValue is 1', () => {
       expect(appComponent.myValue).toEqual(1); 
    });
});