#!/usr/bin/env node
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
//# sourceMappingURL=index.d.ts.map