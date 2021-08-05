#!/usr/bin/env node
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk = require('chalk');
var merge = require('deepmerge');
var cfg = {
    prefix: '[gulog]',
    prefix_color: 'magenta',
    info: {
        prefix: '[INFO]',
        prefix_color: 'cyan',
        text_color: 'white',
        show_prefix: true
    },
    error: {
        prefix: '[ERROR]',
        prefix_color: 'red',
        text_color: 'red',
        show_prefix: true
    },
    warning: {
        prefix: '[WARN]',
        prefix_color: 'yellow',
        text_color: 'yellow',
        show_prefix: true
    }
};
module.exports = {
    setup: function (config) {
        cfg = merge(cfg, config);
    },
    info: function (message) {
        var _a, _b, _c, _d, _e;
        if (((_a = cfg.info) === null || _a === void 0 ? void 0 : _a.show_prefix) === true) {
            console.log(chalk(templateObject_1 || (templateObject_1 = __makeTemplateObject(["{", " ", "} {", " ", "} {", " ", "}"], ["{", " ", "} {", " ", "} {", " ", "}"])), cfg.prefix_color, cfg.prefix, (_b = cfg.info) === null || _b === void 0 ? void 0 : _b.prefix_color, (_c = cfg.info) === null || _c === void 0 ? void 0 : _c.prefix, (_d = cfg.info) === null || _d === void 0 ? void 0 : _d.text_color, message));
        }
        else {
            console.log(chalk(templateObject_2 || (templateObject_2 = __makeTemplateObject(["{", " ", "} {", " ", "}"], ["{", " ", "} {", " ", "}"])), cfg.prefix_color, cfg.prefix, (_e = cfg.info) === null || _e === void 0 ? void 0 : _e.text_color, message));
        }
    },
    error: function (message) {
        var _a, _b, _c, _d, _e;
        if (((_a = cfg.error) === null || _a === void 0 ? void 0 : _a.show_prefix) === true) {
            console.log(chalk(templateObject_3 || (templateObject_3 = __makeTemplateObject(["{", " ", "} {", " ", "} {", " ", "}"], ["{", " ", "} {", " ", "} {", " ", "}"])), cfg.prefix_color, cfg.prefix, (_b = cfg.error) === null || _b === void 0 ? void 0 : _b.prefix_color, (_c = cfg.error) === null || _c === void 0 ? void 0 : _c.prefix, (_d = cfg.error) === null || _d === void 0 ? void 0 : _d.text_color, message));
        }
        else {
            console.log(chalk(templateObject_4 || (templateObject_4 = __makeTemplateObject(["{", " ", "} {", " ", "}"], ["{", " ", "} {", " ", "}"])), cfg.prefix_color, cfg.prefix, (_e = cfg.error) === null || _e === void 0 ? void 0 : _e.text_color, message));
        }
    },
    warn: function (message) {
        var _a, _b, _c, _d, _e;
        if (((_a = cfg.warning) === null || _a === void 0 ? void 0 : _a.show_prefix) === true) {
            console.log(chalk(templateObject_5 || (templateObject_5 = __makeTemplateObject(["{", " ", "} {", " ", "} {", " ", "}"], ["{", " ", "} {", " ", "} {", " ", "}"])), cfg.prefix_color, cfg.prefix, (_b = cfg.warning) === null || _b === void 0 ? void 0 : _b.prefix_color, (_c = cfg.warning) === null || _c === void 0 ? void 0 : _c.prefix, (_d = cfg.warning) === null || _d === void 0 ? void 0 : _d.text_color, message));
        }
        else {
            console.log(chalk(templateObject_6 || (templateObject_6 = __makeTemplateObject(["{", " ", "} {", " ", "}"], ["{", " ", "} {", " ", "}"])), cfg.prefix_color, cfg.prefix, (_e = cfg.warning) === null || _e === void 0 ? void 0 : _e.text_color, message));
        }
    }
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=index.js.map