import "jsdom-global/register";
var expect = require("chai").expect;
var assert = require("chai").assert;

import Spinner from '../src/App.js';

describe("spinner", function() {

	describe("regular spinner, no options", function() {
		let regularSpinner = new Spinner({entry: '.entry'});
    regularSpinner.create();

    it("should have a class matching the entry", function() {
			expect(regularSpinner.settings.entry).to.equal(".entry");
		});

		it("should be a new instance of Spinner", function() {
			expect(regularSpinner).to.be.an.instanceof(Spinner);
		});

		it("should have settings", function() {
			assert.isObject(regularSpinner.settings);
		});

    it("should have default colors", function() {
      expect(regularSpinner.settings.spinnerColor).to.equal("#5394b4");
    });

    it("should not have a loader, percent or logo", function() {
      expect(regularSpinner.settings.type).to.equal("default");
    });
	});

  describe("regular spinner, custom colour", function() {
		let regularSpinnerColour = new Spinner({entry: '.entry', spinnerColor: '#cccccc'});
    regularSpinnerColour.create();

		it("should have a custom color", function() {
      expect(regularSpinnerColour.settings.spinnerColor).to.equal("#cccccc");
    });
	});

  describe("loader spinner", function() {

    let loaderElm;
    let loaderSpinner = new Spinner({entry: '.entry', type: 'loader'});
    loaderSpinner.create();

      before(function(){
        
        loaderElm = document.createElement('div');
        loaderElm.classList.add('entry');
        document.body.appendChild(loaderElm);

      });

    it("should have a loader type", function() {
      expect(loaderSpinner.settings.type).to.equal("loader");
    });

		it("should have a container elm", function() {
      let container = document.querySelector(".entry");
      expect(container).to.exist;
    });

    it("should have loader elm", function() {
      let loader = document.querySelector(".loader");
      expect(loader).to.exist;
    });

	});

  describe("percent spinner", function() {

    let percentElm;
    let percentSpinner = new Spinner({entry: '.entry', type: 'percent'});
    percentSpinner.create();

      before(function(){
        
        percentElm = document.createElement('div');
        percentElm.classList.add('entry');
        document.body.appendChild(percentElm);

      });

    it("should have a percent type", function() {
      expect(percentSpinner.settings.type).to.equal("percent");
    });

		it("should have a container elm", function() {
      let container = document.querySelector(".entry");
      expect(container).to.exist;
    });

    it("should have percent elm", function() {
      let percent = document.querySelector(".percent");
      expect(percent).to.exist;
    });

	});

  describe("logo spinner", function() {

    let logoElm;
    let logoSpinner = new Spinner({entry: '.entry', type: 'logo'});
    logoSpinner.create();

      before(function(){
        
        logoElm = document.createElement('div');
        logoElm.classList.add('entry');
        document.body.appendChild(logoElm);

      });

    it("should have a logo type", function() {
      expect(logoSpinner.settings.type).to.equal("logo");
    });

		it("should have a container elm", function() {
      let container = document.querySelector(".entry");
      expect(container).to.exist;
    });

    it("should have logo elm", function() {
      let logo = document.querySelector(".logo");
      expect(logo).to.exist;
    });

	});

  describe("removing regular spinner", function() {

    let removeElm;
    let removeSpinner = new Spinner({entry: '.entry'});
    removeSpinner.create();

      before(function(){
        
        removeElm = document.createElement('div');
        removeElm.classList.add('entry');
        document.body.appendChild(removeElm);

      });


		it("should exist with container elm", function() {
      let spinnerElm = document.querySelector(".spinner");
      expect(spinnerElm).to.exist;
    });

    it("should no longer exist", function() {
      let spinnerElm = document.querySelector(".spinner");
      removeSpinner.destroy(".entry");
      expect(spinnerElm).to.be.empty;
    });

	});

});