var seleniumWebdriver = require('selenium-webdriver');

var assert = require('assert');

module.exports = function () {

    this.When(/^I go to the homepage$/, function () {
        return this.driver.get('https://scratch.ly');
    });

    this.Then(/^I should see a link called "([^"]*)" to "([^"]*)"$/, function (linkText, href, callback) {

        this.driver.findElement({linkText: linkText}).getAttribute('href').then( function (url) {
            assert.equal(href, url.substr(-href.length));
            callback();
        });
    });

    this.Then(/^I should see the following links$/, function (table, callback) {
        var driver = this.driver;
        var rows = table.rows();
        rows.forEach(function (row, index) {
            driver.findElement({linkText: row[0]}).getAttribute('href').then( function (url) {
                assert.equal(row[1], url.substr(-row[1].length));
                if (index === rows.length - 1) {
                    callback();
                }
            });
        });
    });
};
