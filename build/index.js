'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);

var defaultTheme = {
    black: '#000',
    white: '#fff',
    energy: '#FFD600',
    calm: '#00E4F2',
    health: '#FE1C5F',
    grey5: '#444A53',
    grey4: '#888B91',
    grey3: '#CCCDD0',
    grey2: '#EEEEEF',
    grey1: '#FAFAFA',
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var GlobalStyle = styled.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  body {\n    font-family: 'Source Sans Pro', sans-serif;\n    font-size: '16px';\n  }\n"], ["\n  body {\n    font-family: 'Source Sans Pro', sans-serif;\n    font-size: '16px';\n  }\n"])));
var templateObject_1;

var Button = styled__default.button.attrs(function (props) { return ({
    size: props.size || 'normal',
}); })(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  padding: 0px 16px;\n  cursor: pointer;\n  font-style: italic;\n  font-weight: 900;\n  text-transform: uppercase;\n  transition: background-color 0.15s ease-in-out;\n\n  height: ", ";\n\n  border-radius: ", ";\n\n  background: #000000;\n  color: #ffffff;\n  border: none;\n\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  padding: 0px 16px;\n  cursor: pointer;\n  font-style: italic;\n  font-weight: 900;\n  text-transform: uppercase;\n  transition: background-color 0.15s ease-in-out;\n\n  height: ",
    ";\n\n  border-radius: ",
    ";\n\n  background: #000000;\n  color: #ffffff;\n  border: none;\n\n  ",
    "\n"])), function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'normal' : _b;
    switch (size) {
        case 'tiny':
            return '36px';
        case 'small':
            return '40px';
        case 'large':
            return '48px';
        case 'huge':
            return '52px';
        case 'normal':
        default:
            return '44px';
    }
}, function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'normal' : _b;
    switch (size) {
        case 'tiny':
            return '8px 0px;';
        case 'small':
            return '10px 0px;';
        case 'large':
            return '16px 0px;';
        case 'huge':
            return '18px 0px;';
        case 'normal':
        default:
            return '12px 0px;';
    }
}, function (_a) {
    var disabled = _a.disabled;
    return !!disabled &&
        "\n    background-color: #EEEEEF;\n    color: #72757E;\n    cursor: not-allowed;\n  ";
});
var templateObject_1$1;

exports.Button = Button;
exports.GlobalStyle = GlobalStyle;
exports.defaultTheme = defaultTheme;
//# sourceMappingURL=index.js.map
