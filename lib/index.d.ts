#!/usr/bin/env node
import chalk from 'chalk';
declare type fieldConfig = {
    usePrefix?: boolean;
    prefix?: string;
    prefixColor?: typeof chalk.ForegroundColor;
    messageColor?: typeof chalk.ForegroundColor;
};
declare type gulogConfig = {
    usePrefix?: boolean;
    prefix?: string;
    prefixColor?: typeof chalk.ForegroundColor;
    info?: fieldConfig;
    error?: fieldConfig;
    warning?: fieldConfig;
    success?: fieldConfig;
};
declare function setup(config: gulogConfig): void;
declare function info(message: string): void;
declare function warning(message: string): void;
declare function error(message: string): void;
declare function success(message: string): void;
export { setup, info, warning, error, success };
//# sourceMappingURL=index.d.ts.map