const root = "http://localhost:6006"

const map = [
    "button-primary",
    "button-secondary",
    "button-tertiary",
    "button-quaternary",
    "button-destructive"
];

const paths = {
  "bitmaps_reference": "./node_modules/@vonagevolta/core/backstop_data/bitmaps_reference",
  "bitmaps_test": "./backstop_data/bitmaps_test",
  "engine_scripts": "./backstop_data/engine_scripts",
  "html_report": "./backstop_data/html_report",
  "ci_report": "./backstop_data/ci_report"
}

let scenarios = require('./components/vlt-backstop-scenarios.js')(root, map);
let backstopConfig = require('./components/vlt-backstop-defaults.js')(scenarios, paths);

module.exports = backstopConfig;