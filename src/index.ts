#!/usr/bin/env node
const chalk = require('chalk');
const merge = require('deepmerge');

export interface Info {
    prefix?: string;
    prefix_color?: string;
    text_color?: string;
    show_prefix?: boolean;
}
export interface Error {
    prefix?: string;
    prefix_color?: string;
    text_color?: string;
    show_prefix?: boolean;
}
export interface Warning {
    prefix?: string;
    prefix_color?: string;
    text_color?: string;
    show_prefix?: boolean;
}
export interface gulogConfig {
    prefix?: string;
    prefix_color?: string;
    info?: Info;
    error?: Error;
    warning?: Warning;
}

let cfg: gulogConfig = {
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
    setup: (config: gulogConfig): void => {
        cfg = merge(cfg, config);
    },
    info: (message: string): void => {
        if (cfg.info?.show_prefix === true) {
            console.log(chalk`{${cfg.prefix_color} ${cfg.prefix}} {${cfg.info?.prefix_color} ${cfg.info?.prefix}} {${cfg.info?.text_color} ${message}}`);
        } else {
            console.log(chalk`{${cfg.prefix_color} ${cfg.prefix}} {${cfg.info?.text_color} ${message}}`);
        }
    },
    error: (message: string): void => {
        if (cfg.error?.show_prefix === true) {
            console.log(chalk`{${cfg.prefix_color} ${cfg.prefix}} {${cfg.error?.prefix_color} ${cfg.error?.prefix}} {${cfg.error?.text_color} ${message}}`);
        } else {
            console.log(chalk`{${cfg.prefix_color} ${cfg.prefix}} {${cfg.error?.text_color} ${message}}`);
        }
    },
    warn: (message: string): void => {
        if (cfg.warning?.show_prefix === true) {
            console.log(chalk`{${cfg.prefix_color} ${cfg.prefix}} {${cfg.warning?.prefix_color} ${cfg.warning?.prefix}} {${cfg.warning?.text_color} ${message}}`);
        } else {
            console.log(chalk`{${cfg.prefix_color} ${cfg.prefix}} {${cfg.warning?.text_color} ${message}}`);
        }
    }
}