#!/usr/bin/env node
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

let setup_used = false;
let config = {};

function check_config() {
    if (!config.prefix) config.prefix = "[GULOG]";
    if (!config.prefix_color) config.prefix_color = "yellow";
    if (!config.default_color) config.default_color = "white";
    
    if (!config.error) config.error = {};
    if (!config.error.prefix) config.error.prefix = "[ERROR]";
    if (!config.error.prefix_color) config.error.prefix_color = "red";
    if (!config.error.text_color) config.error.text_color = "red";
    
    if (!config.warning) config.warning = {};
    if (!config.warning.prefix) config.warning.prefix = "[WARN]";
    if (!config.warning.prefix_color) config.warning.prefix_color = "yellow";
    if (!config.warning.text_color) config.warning.text_color = "yellow";
}

// config = {
//     prefix: "[GULOG]",
//     prefix_color: "yellow",
//     default_color: "white",
//     error: {
//         prefix: "[ERROR]",
//         prefix_color: "red",
//         text_color: "red",
//     },
//     warning: {
//         prefix: "[WARN]",
//         prefix_color: "yellow",
//         text_color: "white",
//     }
// }

module.exports = {
    setup: async (json) => {
        let create_json = {};

        if (json.prefix) create_json.prefix = json.prefix;
        if (json.prefix_color) create_json.prefix_color = json.prefix_color;
        if (json.default_color) create_json.default_color = json.default_color;
        if (json.error) create_json.error = json.error;
        if (json.warning) create_json.error = json.warning;

        config = create_json;
        
        check_config();

        setup_used = true;
    },
    info: async (message) => {
        if (!setup_used) check_config();
        console.log(chalk`{${config.prefix_color} ${config.prefix}} {${config.default_color} ${message}}`);
    },
    error: async (message) => {
        if (!setup_used) check_config();
        console.log(chalk`{${config.prefix_color} ${config.prefix}} {${config.error.prefix_color} ${config.error.prefix}} {${config.error.text_color} ${message}}`);
    },
    warn: async (message) => {
        if (!setup_used) check_config();
        console.log(chalk`{${config.prefix_color} ${config.prefix}} {${config.warning.prefix_color} ${config.warning.prefix}} {${config.warning.text_color} ${message}}`);
    }
}