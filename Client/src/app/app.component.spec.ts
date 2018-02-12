import { TestBed, fakeAsync, async ,tick,getTestBed} from '@angular/core/testing';
import { NO_ERRORS_SCHEMA }          from '@angular/core';
import { AppComponent } from './app.component';
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { Component, NgModule } from '@angular/core';
import {Location} from "@angular/common";

import { Routes, provideRoutes } from '@angular/router';
import {AppModule, appRoutes} from './app.module';
import { AllDealsComponent } from './all-deals/all-deals.component';
import { MyDealsComponent } from './my-deals/my-deals.component';

const testModuleConfig = () => {
  // reset the test environment before initializing it.
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting())
    .configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule.withRoutes(appRoutes),
      ],
      providers: [ provideRoutes(appRoutes) ]
    });
};
describe('AppComponent', () => {
  let location: Location;
  let router: Router;
  let fixture;
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        AllDealsComponent
      ],
      schemas:      [ NO_ERRORS_SCHEMA ],
    }).compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
 
  it('should be able to navigate to `/`',
  fakeAsync(() => {
    const injector = getTestBed();
    const router = injector.get(Router);
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    
    router.navigate(['/'])
        .then(() => {
          expect(router.url).toEqual('/');
        });
    }));
 
});
