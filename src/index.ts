#!/usr/bin/env node
import chalk from 'chalk';
import merge from 'deepmerge';

interface gulog {
type fieldConfig = {
    usePrefix?: boolean;
    prefix?: string;
    prefixColor?: typeof chalk.ForegroundColor;
    messageColor?: typeof chalk.ForegroundColor;
};

type availableTypes = 'info' | 'error' | 'warning' | 'success';

type gulogConfig = {
    usePrefix?: boolean;
    prefix?: string;
    prefixColor?: typeof chalk.ForegroundColor;
    info?: fieldConfig;
    error?: fieldConfig;
    warning?: fieldConfig;
    success?: fieldConfig;
};

let cfg: gulogConfig = {
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
        prefixColor: 'redBright',
        messageColor: 'red',
    },
    warning: {
        usePrefix: true,
        prefix: '[warn]',
        prefixColor: 'yellowBright',
        messageColor: 'yellow',
    },
    success: {
        usePrefix: true,
        prefix: '[success]',
        prefixColor: 'green',
        messageColor: 'white',
    },
};}


function __base__(message: string, type: availableTypes): void {
    const _prefix =
        cfg.usePrefix === true
            ? chalk`{${cfg.prefixColor} ${cfg.prefix}} `
            : '';
    const _typePrefix =
        cfg[type]?.usePrefix === true
            ? chalk`{${cfg[type]?.prefixColor} ${cfg[type]?.prefix}} `
            : '';
    const _msg = cfg[type]?.prefixColor
        ? chalk`{${cfg[type]?.messageColor} ${message}}`
        : chalk`{reset ${message}}`;
    console.log(chalk`${_prefix}${_typePrefix}${_msg}`);
}

function setup(config: gulogConfig): void {
    cfg = merge(cfg, config);
}

function info(message: string): void {
    __base__(message, 'info');
}

function warning(message: string): void {
    __base__(message, 'warning');
}

function error(message: string): void {
    __base__(message, 'error');
}

function success(message: string): void {
    __base__(message, 'success');
}

export { setup, info, warning, error, success };
