#!/usr/bin/env node
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.success = exports.error = exports.warning = exports.info = exports.setup = void 0;
var chalk_1 = __importDefault(require("chalk"));
var deepmerge_1 = __importDefault(require("deepmerge"));
var cfg = {
    usePrefix: true,
    prefix: '[gulog]',
    prefixColor: 'magenta',
    info: {
        usePrefix: true,
        prefix: '[info]',
        prefixColor: 'cyan',
        messageColor: 'white',
    },
    error: {
        usePrefix: true,
        prefix: '[error]',
        prefixColor: 'red',
        messageColor: 'white',
    },
    warning: {
        usePrefix: true,
        prefix: '[warn]',
        prefixColor: 'yellow',
        messageColor: 'white',
    },
    success: {
        usePrefix: true,
        prefix: '[success]',
        prefixColor: 'green',
        messageColor: 'white',
    },
};
function __base__(message, type) {
    var _a, _b, _c, _d, _e;
    var _prefix = cfg.usePrefix === true
        ? (0, chalk_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["{", " ", "} "], ["{", " ", "} "])), cfg.prefixColor, cfg.prefix) : '';
    var _typePrefix = ((_a = cfg[type]) === null || _a === void 0 ? void 0 : _a.usePrefix) === true
        ? (0, chalk_1.default)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["{", " ", "} "], ["{", " ", "} "])), (_b = cfg[type]) === null || _b === void 0 ? void 0 : _b.prefixColor, (_c = cfg[type]) === null || _c === void 0 ? void 0 : _c.prefix) : '';
    var _msg = ((_d = cfg[type]) === null || _d === void 0 ? void 0 : _d.prefixColor)
        ? (0, chalk_1.default)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["{", " ", "}"], ["{", " ", "}"])), (_e = cfg[type]) === null || _e === void 0 ? void 0 : _e.messageColor, message) : (0, chalk_1.default)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["{reset ", "}"], ["{reset ", "}"])), message);
    console.log((0, chalk_1.default)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["", "", "", ""], ["", "", "", ""])), _prefix, _typePrefix, _msg));
}
function setup(config) {
    cfg = (0, deepmerge_1.default)(cfg, config);
}
exports.setup = setup;
function info(message) {
    __base__(message, 'info');
}
exports.info = info;
function warning(message) {
    __base__(message, 'warning');
}
exports.warning = warning;
function error(message) {
    __base__(message, 'error');
}
exports.error = error;
function success(message) {
    __base__(message, 'success');
}
exports.success = success;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=index.js.map