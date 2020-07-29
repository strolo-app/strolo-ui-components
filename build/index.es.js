import styled, { css, createGlobalStyle } from 'styled-components';
import React from 'react';

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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var BaseButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  outline: none;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  padding: 0px 16px;\n  cursor: pointer;\n  font-style: italic;\n  font-weight: 900;\n  text-transform: uppercase;\n  transition: background-color 0.25s ease-in-out;\n  text-align: center;\n  justify-content: center;\n  ", "\n\n  ", "\n\n  &:active {\n    transform: scale(0.95, 0.95);\n  }\n"], ["\n  outline: none;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  padding: 0px 16px;\n  cursor: pointer;\n  font-style: italic;\n  font-weight: 900;\n  text-transform: uppercase;\n  transition: background-color 0.25s ease-in-out;\n  text-align: center;\n  justify-content: center;\n  ", "\n\n  ",
    "\n\n  &:active {\n    transform: scale(0.95, 0.95);\n  }\n"])), function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "width: 100%;" : "width: fit-content;");
}, function (_a) {
    var size = _a.size;
    switch (size) {
        case 'tiny':
            return "\n          height: 36px;\n          border-radius: 8px 0px;\n          font-size: 0.75rem;\n        ";
        case 'small':
            return "\n          height: 40px;\n          border-radius: 10px 0px;\n          font-size: 0.875rem;\n        ";
        case 'large':
            return "\n          height: 48px;\n          border-radius: 16px 0px;\n          font-size: 1rem;\n        ";
        case 'huge':
            return "\n          height: 52px;\n          border-radius: 18px 0px;\n          font-size: 1.125rem;\n        ";
        case 'normal':
        default:
            return "\n          height: 44px;\n          border-radius: 12px 0px;\n          font-size: 1rem;\n        ";
    }
});
var disabledButtonStyles = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border: none;\n  background-color: ", ";\n  color: ", ";\n  cursor: not-allowed;\n"], ["\n  border: none;\n  background-color: ", ";\n  color: ", ";\n  cursor: not-allowed;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.gray10;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.gray45;
});
var Button = styled(BaseButton)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme, _b = _a.color, color = _b === void 0 ? 'primary' : _b, disabled = _a.disabled;
    return disabled
        ? disabledButtonStyles
        : "\n    border: none;\n    background-color: " + theme.palette[color].main + ";\n    color: " + theme.palette[color].contrastText + ";\n\n    &:focus,\n    &:hover {\n      background-color: " + theme.palette[color].light + ";\n    }\n  ";
});
var OutlinedButton = styled(BaseButton)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled, _b = _a.color, color = _b === void 0 ? 'black' : _b;
    return disabled
        ? disabledButtonStyles
        : "\n  border: 2px solid " + (color === 'white' ? theme.colors.gray0 : theme.palette.primary.main) + ";\n  color: " + (color === 'white' ? theme.colors.gray0 : theme.palette.primary.main) + ";\n  background-color: rgba(0, 0, 0, 0);\n\n  &:focus,\n  &:hover {\n    border: 3px solid " + (color === 'white' ? theme.colors.gray0 : theme.palette.primary.main) + ";\n    padding: 0 15px;\n  }\n  ";
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

/**
 * RATIO is used to calculate the height of the SVG
 */
var RATIO = 1.64;
var Logo = function (_a) {
    var _b = _a.color, color = _b === void 0 ? 'black' : _b, _c = _a.width, width = _c === void 0 ? 50 : _c, props = __rest(_a, ["color", "width"]);
    return (React.createElement("svg", __assign({ width: width, height: width * RATIO, viewBox: "0 0 50 82", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M48.5787 44.7952L33.5405 35.8507C32.1531 35.0256 30.3527 35.4699 29.5191 36.8432L4.79213 77.5796C3.10454 80.3598 6.59645 83.3685 9.14552 81.3305L48.9107 49.5386C50.4943 48.2725 50.3236 45.833 48.5787 44.7952Z", fill: color }),
        React.createElement("path", { d: "M1.42134 37.2048L16.4595 46.1493C17.8469 46.9744 19.6473 46.5301 20.4809 45.1568L45.2079 4.42043C46.8955 1.64021 43.4035 -1.36849 40.8545 0.669475L1.08935 32.4614C-0.494337 33.7275 -0.323603 36.167 1.42134 37.2048Z", fill: color })));
};

var Loader = function () {
    return (React.createElement(LoadingIcon, null,
        React.createElement(Logo, { color: "white", width: 25 })));
};
var LoadingIcon = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  animation-name: spin;\n  animation-duration: 4000ms;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    10% {\n      transform: rotate(0deg);\n    }\n    50% {\n      transform: rotate(360deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  width: 60px;\n  height: 60px;\n  min-width: 60px;\n  min-height: 60px;\n  background-color: black;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  animation-name: spin;\n  animation-duration: 4000ms;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    10% {\n      transform: rotate(0deg);\n    }\n    50% {\n      transform: rotate(360deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  width: 60px;\n  height: 60px;\n  min-width: 60px;\n  min-height: 60px;\n  background-color: black;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var templateObject_1$1;

/**
 * RATIO is used to calculate the height of the SVG
 */
var RATIO$1 = 0.1598;
var LogoText = function (_a) {
    var _b = _a.color, color = _b === void 0 ? 'black' : _b, _c = _a.width, width = _c === void 0 ? 219 : _c, props = __rest(_a, ["color", "width"]);
    return (React.createElement("svg", __assign({ width: width, height: width * RATIO$1, viewBox: "0 0 219 35", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M12.0085 35C9.92296 35 7.82064 34.5153 5.7015 33.546C3.61599 32.542 1.7155 30.863 0 28.5089L5.75195 23.8353C6.62652 25.047 7.66927 26.0336 8.88021 26.7953C10.0911 27.5569 11.3357 27.9377 12.6139 27.9377C13.7912 27.9377 14.7163 27.678 15.389 27.1588C16.0954 26.6395 16.4486 25.9125 16.4486 24.9777C16.4486 24.2161 16.1122 23.6103 15.4395 23.1602C14.7667 22.6756 13.8585 22.0697 12.7148 21.3427L9.88933 19.5252C8.37565 18.5213 7.18153 17.3615 6.30697 16.046C5.46604 14.7305 5.04557 13.0168 5.04557 10.905C5.04557 9.3818 5.36513 7.96241 6.00423 6.64688C6.64334 5.33136 7.50109 4.18892 8.57748 3.21959C9.65386 2.21563 10.9153 1.4367 12.3617 0.88279C13.8417 0.294263 15.4226 0 17.1045 0C19.0218 0 20.855 0.467359 22.6042 1.40208C24.3869 2.30218 25.9511 3.58309 27.2966 5.24481L22.251 10.1261C21.4101 9.26063 20.5523 8.55094 19.6777 7.99703C18.8368 7.44313 17.8782 7.16617 16.8018 7.16617C15.6245 7.16617 14.7499 7.46044 14.1781 8.04896C13.6062 8.60287 13.3203 9.27794 13.3203 10.0742C13.3203 10.7666 13.6567 11.3551 14.3294 11.8398C15.0358 12.2898 16.0449 12.9476 17.3568 13.8131L20.3841 15.7344C21.9651 16.7384 23.0919 17.8462 23.7647 19.0579C24.471 20.2349 24.8242 21.8101 24.8242 23.7834C24.8242 25.3412 24.5215 26.7953 23.916 28.1454C23.3106 29.4956 22.4528 30.6899 21.3428 31.7285C20.2328 32.7324 18.8873 33.5287 17.3063 34.1172C15.7254 34.7057 13.9594 35 12.0085 35Z", fill: color }),
        React.createElement("path", { d: "M42.0202 34.3769L47.1667 7.5816H38.8919L40.2038 0.623147H64.8262L63.5143 7.5816H55.2396L50.0931 34.3769H42.0202Z", fill: color }),
        React.createElement("path", { d: "M72.7497 34.3769L79.3089 0.623147H90.1065C91.7547 0.623147 93.2852 0.778933 94.6979 1.09051C96.1107 1.40208 97.3384 1.92137 98.3812 2.64837C99.424 3.34075 100.231 4.25816 100.803 5.40059C101.409 6.54303 101.711 7.92779 101.711 9.5549C101.711 11.1128 101.509 12.5321 101.106 13.8131C100.736 15.0593 100.198 16.1845 99.4912 17.1884C98.7849 18.1578 97.9439 19.0059 96.9684 19.7329C95.993 20.4253 94.9334 20.9965 93.7897 21.4466L98.6839 34.3769H90.2074L86.4232 22.7448H83.0427L80.8226 34.3769H72.7497ZM84.3545 16.2018H87.2809C89.4674 16.2018 91.0819 15.7171 92.1247 14.7478C93.2011 13.7438 93.7393 12.4283 93.7393 10.8012C93.7393 9.5549 93.3188 8.63749 92.4779 8.04896C91.6706 7.46044 90.5101 7.16617 88.9964 7.16617H86.07L84.3545 16.2018Z", fill: color }),
        React.createElement("path", { d: "M127.207 35C125.323 35 123.591 34.6884 122.01 34.0653C120.463 33.4075 119.134 32.4728 118.024 31.2611C116.914 30.0495 116.039 28.5608 115.4 26.7953C114.795 24.9951 114.492 22.9525 114.492 20.6677C114.492 17.5173 114.963 14.6785 115.905 12.1513C116.88 9.58952 118.142 7.40851 119.689 5.60831C121.27 3.80811 123.069 2.42335 125.088 1.45401C127.14 0.48467 129.259 0 131.445 0C133.329 0 135.044 0.328883 136.592 0.98665C138.173 1.6098 139.518 2.5272 140.628 3.73887C141.738 4.95055 142.596 6.45648 143.201 8.25668C143.84 10.0223 144.16 12.0475 144.16 14.3323C144.16 17.4827 143.672 20.3388 142.697 22.9006C141.755 25.4278 140.493 27.5915 138.913 29.3917C137.365 31.1919 135.566 32.5767 133.514 33.546C131.462 34.5153 129.36 35 127.207 35ZM127.61 27.8338C128.552 27.8338 129.511 27.5223 130.486 26.8991C131.462 26.276 132.353 25.3932 133.161 24.2507C133.968 23.1083 134.624 21.7409 135.128 20.1484C135.633 18.5559 135.885 16.7903 135.885 14.8516C135.885 12.3937 135.448 10.5069 134.573 9.1914C133.732 7.84125 132.555 7.16617 131.041 7.16617C130.1 7.16617 129.141 7.47775 128.165 8.10089C127.19 8.72404 126.299 9.60682 125.491 10.7493C124.684 11.8917 124.028 13.2591 123.524 14.8516C123.019 16.4441 122.767 18.2097 122.767 20.1484C122.767 22.6063 123.187 24.5104 124.028 25.8605C124.903 27.1761 126.097 27.8338 127.61 27.8338Z", fill: color }),
        React.createElement("path", { d: "M156.114 34.3769L162.673 0.623147H170.746L165.499 27.4184H177.406L176.094 34.3769H156.114Z", fill: color }),
        React.createElement("path", { d: "M202.047 35C200.163 35 198.431 34.6884 196.85 34.0653C195.303 33.4075 193.974 32.4728 192.864 31.2611C191.754 30.0495 190.879 28.5608 190.24 26.7953C189.635 24.9951 189.332 22.9525 189.332 20.6677C189.332 17.5173 189.803 14.6785 190.745 12.1513C191.72 9.58952 192.982 7.40851 194.529 5.60831C196.11 3.80811 197.909 2.42335 199.928 1.45401C201.98 0.48467 204.099 0 206.285 0C208.169 0 209.884 0.328883 211.432 0.98665C213.013 1.6098 214.358 2.5272 215.468 3.73887C216.578 4.95055 217.436 6.45648 218.041 8.25668C218.68 10.0223 219 12.0475 219 14.3323C219 17.4827 218.512 20.3388 217.537 22.9006C216.595 25.4278 215.334 27.5915 213.753 29.3917C212.205 31.1919 210.406 32.5767 208.354 33.546C206.302 34.5153 204.2 35 202.047 35ZM202.451 27.8338C203.392 27.8338 204.351 27.5223 205.326 26.8991C206.302 26.276 207.193 25.3932 208.001 24.2507C208.808 23.1083 209.464 21.7409 209.968 20.1484C210.473 18.5559 210.725 16.7903 210.725 14.8516C210.725 12.3937 210.288 10.5069 209.413 9.1914C208.572 7.84125 207.395 7.16617 205.882 7.16617C204.94 7.16617 203.981 7.47775 203.006 8.10089C202.03 8.72404 201.139 9.60682 200.331 10.7493C199.524 11.8917 198.868 13.2591 198.364 14.8516C197.859 16.4441 197.607 18.2097 197.607 20.1484C197.607 22.6063 198.027 24.5104 198.868 25.8605C199.743 27.1761 200.937 27.8338 202.451 27.8338Z", fill: color })));
};

var Select = function (props) {
    return React.createElement(StyledSelect, __assign({}, props));
};
var StyledSelect = styled.select(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  border: 2px solid ", ";\n  border-radius: 2px;\n  height: 56px;\n  width: 100%;\n  padding-left: 16px;\n  font-size: 1.125rem;\n  outline: none;\n  transition: border 0.25s ease-in-out, padding 0.25s ease-in-out;\n  cursor: pointer;\n\n  &::placeholder {\n    color: ", ";\n    font-weight: 600;\n  }\n  &:hover {\n    border: 2px solid ", ";\n  }\n  &:focus {\n    border: 3px solid ", ";\n    padding-left: 15px;\n  }\n"], ["\n  border: 2px solid ", ";\n  border-radius: 2px;\n  height: 56px;\n  width: 100%;\n  padding-left: 16px;\n  font-size: 1.125rem;\n  outline: none;\n  transition: border 0.25s ease-in-out, padding 0.25s ease-in-out;\n  cursor: pointer;\n\n  &::placeholder {\n    color: ", ";\n    font-weight: 600;\n  }\n  &:hover {\n    border: 2px solid ", ";\n  }\n  &:focus {\n    border: 3px solid ", ";\n    padding-left: 15px;\n  }\n"])), function (_a) {
    var theme = _a.theme, error = _a.error;
    return (error ? theme.colors.health30 : theme.colors.gray30);
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.gray45;
}, function (_a) {
    var theme = _a.theme, error = _a.error;
    return (error ? theme.colors.health30 : theme.colors.gray60);
}, function (_a) {
    var theme = _a.theme, error = _a.error;
    return (error ? theme.colors.health30 : theme.colors.gray60);
});
var templateObject_1$2;

var TextInput = styled.input(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  border: 2px solid ", ";\n  border-radius: 2px;\n  height: 56px;\n  width: 100%;\n  padding-left: 16px;\n  font-size: 1.125rem;\n  outline: none;\n  transition: border 0.25s ease-in-out, padding 0.25s ease-in-out;\n\n  &::placeholder {\n    color: ", ";\n    font-weight: 600;\n  }\n  &:hover {\n    border: 2px solid ", ";\n  }\n  &:focus {\n    border: 3px solid ", ";\n    padding-left: 15px;\n  }\n"], ["\n  border: 2px solid ", ";\n  border-radius: 2px;\n  height: 56px;\n  width: 100%;\n  padding-left: 16px;\n  font-size: 1.125rem;\n  outline: none;\n  transition: border 0.25s ease-in-out, padding 0.25s ease-in-out;\n\n  &::placeholder {\n    color: ", ";\n    font-weight: 600;\n  }\n  &:hover {\n    border: 2px solid ", ";\n  }\n  &:focus {\n    border: 3px solid ", ";\n    padding-left: 15px;\n  }\n"])), function (_a) {
    var theme = _a.theme, error = _a.error;
    return (error ? theme.colors.health30 : theme.colors.gray30);
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.gray45;
}, function (_a) {
    var theme = _a.theme, error = _a.error;
    return (error ? theme.colors.health30 : theme.colors.gray60);
}, function (_a) {
    var theme = _a.theme, error = _a.error;
    return (error ? theme.colors.health30 : theme.colors.gray60);
});
var templateObject_1$3;

var Text = styled.span(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return color && "color: " + theme.colors[color] + ";";
}, function (_a) {
    var fontWeight = _a.fontWeight;
    return fontWeight && "font-weight: " + fontWeight + ";";
}, function (_a) {
    var textAlign = _a.textAlign;
    return textAlign && "text-align: " + textAlign + ";";
}, function (_a) {
    var lineHeight = _a.lineHeight;
    return lineHeight && "line-height: " + lineHeight + ";";
}, function (_a) {
    var fontSize = _a.fontSize;
    return fontSize && "font-size: " + fontSize + ";";
}, function (_a) {
    var italic = _a.italic;
    return italic && "font-size: italic;";
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
});
var P1 = styled.p(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  font-size: ", ";\n  ", "\n  ", "\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  ", "\n  ", "\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.typography.typeScale.web.p1;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return color && "color: " + theme.colors[color] + ";";
}, function (_a) {
    var textAlign = _a.textAlign;
    return !!textAlign && "text-align: " + textAlign + ";";
}, function (_a) {
    var theme = _a.theme;
    return theme.media.phoneOnly;
}, function (_a) {
    var theme = _a.theme;
    return theme.typography.typeScale.mobile.p1;
});
var P2 = styled.p(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  font-size: ", ";\n  ", "\n  ", "\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  ", "\n  ", "\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.typography.typeScale.web.p2;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return color && "color: " + theme.colors[color] + ";";
}, function (_a) {
    var textAlign = _a.textAlign;
    return textAlign && "text-align: " + textAlign + ";";
}, function (_a) {
    var theme = _a.theme;
    return theme.media.phoneOnly;
}, function (_a) {
    var theme = _a.theme;
    return theme.typography.typeScale.mobile.p2;
});
var H6 = styled.h6(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  font-weight: bold;\n  font-size: ", ";\n  ", "\n  ", "\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-weight: bold;\n  font-size: ", ";\n  ", "\n  ", "\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.typography.typeScale.web.h6;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return color && "color: " + theme.colors[color] + ";";
}, function (_a) {
    var textAlign = _a.textAlign;
    return textAlign && "text-align: " + textAlign + ";";
}, function (_a) {
    var theme = _a.theme;
    return theme.media.phoneOnly;
}, function (_a) {
    var theme = _a.theme;
    return theme.typography.typeScale.mobile.h6;
});
var H5 = styled.h5(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-weight: bold;\n  font-size: ", ";\n  ", "\n  ", "\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-weight: bold;\n  font-size: ", ";\n  ", "\n  ", "\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.typography.typeScale.web.h5;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return color && "color: " + theme.colors[color] + ";";
}, function (_a) {
    var textAlign = _a.textAlign;
    return textAlign && "text-align: " + textAlign + ";";
}, function (_a) {
    var theme = _a.theme;
    return theme.media.phoneOnly;
}, function (_a) {
    var theme = _a.theme;
    return theme.typography.typeScale.mobile.h5;
});
var H4 = styled.h4(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-weight: bold;\n  font-size: ", ";\n  ", "\n  ", "\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-weight: bold;\n  font-size: ", ";\n  ", "\n  ", "\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.typography.typeScale.web.h4;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return color && "color: " + theme.colors[color] + ";";
}, function (_a) {
    var textAlign = _a.textAlign;
    return textAlign && "text-align: " + textAlign + ";";
}, function (_a) {
    var theme = _a.theme;
    return theme.media.phoneOnly;
}, function (_a) {
    var theme = _a.theme;
    return theme.typography.typeScale.mobile.h4;
});
var H3 = styled.h3(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-weight: bold;\n  font-size: ", ";\n  ", "\n  ", "\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-weight: bold;\n  font-size: ", ";\n  ", "\n  ", "\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.typography.typeScale.web.h3;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return color && "color: " + theme.colors[color] + ";";
}, function (_a) {
    var textAlign = _a.textAlign;
    return textAlign && "text-align: " + textAlign + ";";
}, function (_a) {
    var theme = _a.theme;
    return theme.media.phoneOnly;
}, function (_a) {
    var theme = _a.theme;
    return theme.typography.typeScale.mobile.h3;
});
var H2 = styled.h2(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  font-weight: bold;\n  font-size: ", ";\n  ", "\n  ", "\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-weight: bold;\n  font-size: ", ";\n  ", "\n  ", "\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.typography.typeScale.web.h2;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return color && "color: " + theme.colors[color] + ";";
}, function (_a) {
    var textAlign = _a.textAlign;
    return textAlign && "text-align: " + textAlign + ";";
}, function (_a) {
    var theme = _a.theme;
    return theme.media.phoneOnly;
}, function (_a) {
    var theme = _a.theme;
    return theme.typography.typeScale.mobile.h2;
});
var H1 = styled.h1(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  font-weight: bold;\n  font-size: ", ";\n  ", "\n  ", "\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-weight: bold;\n  font-size: ", ";\n  ", "\n  ", "\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.typography.typeScale.web.h1;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return color && "color: " + theme.colors[color] + ";";
}, function (_a) {
    var textAlign = _a.textAlign;
    return textAlign && "text-align: " + textAlign + ";";
}, function (_a) {
    var theme = _a.theme;
    return theme.media.phoneOnly;
}, function (_a) {
    var theme = _a.theme;
    return theme.typography.typeScale.mobile.h1;
});
var templateObject_1$4, templateObject_2$1, templateObject_3$1, templateObject_4$1, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

// based on https://github.com/styled-components/styled-components/blob/fcf6f3804c57a14dd7984dfab7bc06ee2edca044/src/utils/error.js

/**
 * Parse errors.md and turn it into a simple hash of code: message
 * @private
 */
var ERRORS = {
  "1": "Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",
  "2": "Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",
  "3": "Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",
  "4": "Couldn't generate valid rgb string from %s, it returned %s.\n\n",
  "5": "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",
  "6": "Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",
  "7": "Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",
  "8": "Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",
  "9": "Please provide a number of steps to the modularScale helper.\n\n",
  "10": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "11": "Invalid value passed as base to modularScale, expected number or em string but got \"%s\"\n\n",
  "12": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got \"%s\" instead.\n\n",
  "13": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got \"%s\" instead.\n\n",
  "14": "Passed invalid pixel value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "15": "Passed invalid base value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "16": "You must provide a template to this method.\n\n",
  "17": "You passed an unsupported selector state to this method.\n\n",
  "18": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "19": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "20": "expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "21": "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "22": "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "23": "fontFace expects a name of a font-family.\n\n",
  "24": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "25": "fontFace expects localFonts to be an array.\n\n",
  "26": "fontFace expects fileFormats to be an array.\n\n",
  "27": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "28": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "29": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "30": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "31": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",
  "32": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",
  "33": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",
  "34": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "35": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "36": "Property must be a string value.\n\n",
  "37": "Syntax Error at %s.\n\n",
  "38": "Formula contains a function that needs parentheses at %s.\n\n",
  "39": "Formula is missing closing parenthesis at %s.\n\n",
  "40": "Formula has too many closing parentheses at %s.\n\n",
  "41": "All values in a formula must have the same unit or be unitless.\n\n",
  "42": "Please provide a number of steps to the modularScale helper.\n\n",
  "43": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "44": "Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",
  "45": "Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",
  "46": "Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",
  "47": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "48": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "49": "Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "50": "Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",
  "51": "Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",
  "52": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "53": "fontFace expects localFonts to be an array.\n\n",
  "54": "fontFace expects fileFormats to be an array.\n\n",
  "55": "fontFace expects a name of a font-family.\n\n",
  "56": "linearGradient requries at least 2 color-stops to properly render.\n\n",
  "57": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "58": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "59": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "60": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "61": "Property must be a string value.\n\n",
  "62": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "63": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "64": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",
  "65": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",
  "66": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",
  "67": "You must provide a template to this method.\n\n",
  "68": "You passed an unsupported selector state to this method.\n\n",
  "69": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got %s instead.\n\n",
  "70": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got %s instead.\n\n",
  "71": "Passed invalid pixel value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
  "72": "Passed invalid base value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
  "73": "Please provide a valid CSS variable.\n\n",
  "74": "CSS variable not found.\n"
};
/**
 * super basic version of sprintf
 * @private
 */

function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var a = args[0];
  var b = [];
  var c;

  for (c = 1; c < args.length; c += 1) {
    b.push(args[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 * @private
 */


var PolishedError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(PolishedError, _Error);

  function PolishedError(code) {
    var _this;

    if (process.env.NODE_ENV === 'production') {
      _this = _Error.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/master/src/internalHelpers/errors.md#" + code + " for more information.") || this;
    } else {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      _this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) || this;
    }

    return _assertThisInitialized(_this);
  }

  return PolishedError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

/**
 * CSS to normalize abnormalities across browsers (normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css)
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *    ...normalize(),
 * }
 *
 * // styled-components usage
 * const GlobalStyle = createGlobalStyle`${normalize()}`
 *
 * // CSS as JS Output
 *
 * html {
 *   lineHeight: 1.15,
 *   textSizeAdjust: 100%,
 * } ...
 */
function normalize() {
  var _ref;

  return [(_ref = {
    html: {
      lineHeight: '1.15',
      textSizeAdjust: '100%'
    },
    body: {
      margin: '0'
    },
    main: {
      display: 'block'
    },
    h1: {
      fontSize: '2em',
      margin: '0.67em 0'
    },
    hr: {
      boxSizing: 'content-box',
      height: '0',
      overflow: 'visible'
    },
    pre: {
      fontFamily: 'monospace, monospace',
      fontSize: '1em'
    },
    a: {
      backgroundColor: 'transparent'
    },
    'abbr[title]': {
      borderBottom: 'none',
      textDecoration: 'underline'
    }
  }, _ref["b,\n    strong"] = {
    fontWeight: 'bolder'
  }, _ref["code,\n    kbd,\n    samp"] = {
    fontFamily: 'monospace, monospace',
    fontSize: '1em'
  }, _ref.small = {
    fontSize: '80%'
  }, _ref["sub,\n    sup"] = {
    fontSize: '75%',
    lineHeight: '0',
    position: 'relative',
    verticalAlign: 'baseline'
  }, _ref.sub = {
    bottom: '-0.25em'
  }, _ref.sup = {
    top: '-0.5em'
  }, _ref.img = {
    borderStyle: 'none'
  }, _ref["button,\n    input,\n    optgroup,\n    select,\n    textarea"] = {
    fontFamily: 'inherit',
    fontSize: '100%',
    lineHeight: '1.15',
    margin: '0'
  }, _ref["button,\n    input"] = {
    overflow: 'visible'
  }, _ref["button,\n    select"] = {
    textTransform: 'none'
  }, _ref["button,\n    html [type=\"button\"],\n    [type=\"reset\"],\n    [type=\"submit\"]"] = {
    WebkitAppearance: 'button'
  }, _ref["button::-moz-focus-inner,\n    [type=\"button\"]::-moz-focus-inner,\n    [type=\"reset\"]::-moz-focus-inner,\n    [type=\"submit\"]::-moz-focus-inner"] = {
    borderStyle: 'none',
    padding: '0'
  }, _ref["button:-moz-focusring,\n    [type=\"button\"]:-moz-focusring,\n    [type=\"reset\"]:-moz-focusring,\n    [type=\"submit\"]:-moz-focusring"] = {
    outline: '1px dotted ButtonText'
  }, _ref.fieldset = {
    padding: '0.35em 0.625em 0.75em'
  }, _ref.legend = {
    boxSizing: 'border-box',
    color: 'inherit',
    display: 'table',
    maxWidth: '100%',
    padding: '0',
    whiteSpace: 'normal'
  }, _ref.progress = {
    verticalAlign: 'baseline'
  }, _ref.textarea = {
    overflow: 'auto'
  }, _ref["[type=\"checkbox\"],\n    [type=\"radio\"]"] = {
    boxSizing: 'border-box',
    padding: '0'
  }, _ref["[type=\"number\"]::-webkit-inner-spin-button,\n    [type=\"number\"]::-webkit-outer-spin-button"] = {
    height: 'auto'
  }, _ref['[type="search"]'] = {
    WebkitAppearance: 'textfield',
    outlineOffset: '-2px'
  }, _ref['[type="search"]::-webkit-search-decoration'] = {
    WebkitAppearance: 'none'
  }, _ref['::-webkit-file-upload-button'] = {
    WebkitAppearance: 'button',
    font: 'inherit'
  }, _ref.details = {
    display: 'block'
  }, _ref.summary = {
    display: 'list-item'
  }, _ref.template = {
    display: 'none'
  }, _ref['[hidden]'] = {
    display: 'none'
  }, _ref), {
    'abbr[title]': {
      textDecoration: 'underline dotted'
    }
  }];
}

function colorToInt(color) {
  return Math.round(color * 255);
}

function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}

function hslToRgb(hue, saturation, lightness, convert) {
  if (convert === void 0) {
    convert = convertToInt;
  }

  if (saturation === 0) {
    // achromatic
    return convert(lightness, lightness, lightness);
  } // formulae from https://en.wikipedia.org/wiki/HSL_and_HSV


  var huePrime = (hue % 360 + 360) % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }

  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}

var namedColorMap = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32'
};
/**
 * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
 * @private
 */

function nameToHex(color) {
  if (typeof color !== 'string') return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}

var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i;
var rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var hslaRegex = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = parseToRgb('rgb(255, 0, 0)');
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = parseToRgb('hsla(210, 10%, 40%, 0.75)');
 */

function parseToRgb(color) {
  if (typeof color !== 'string') {
    throw new PolishedError(3);
  }

  var normalizedColor = nameToHex(color);

  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }

  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha: alpha
    };
  }

  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }

  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));

    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }

  var rgbMatched = rgbRegex.exec(normalizedColor);

  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }

  var rgbaMatched = rgbaRegex.exec(normalizedColor);

  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4])
    };
  }

  var hslMatched = hslRegex.exec(normalizedColor);

  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);

    if (!hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, rgbColorString);
    }

    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }

  var hslaMatched = hslaRegex.exec(normalizedColor);

  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);

    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;

    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;

    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";

    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);

    if (!_hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, _rgbColorString);
    }

    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4])
    };
  }

  throw new PolishedError(5);
}

function rgbToHsl(color) {
  // make sure rgb are contained in a set of [0, 255]
  var red = color.red / 255;
  var green = color.green / 255;
  var blue = color.blue / 255;
  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var lightness = (max + min) / 2;

  if (max === min) {
    // achromatic
    if (color.alpha !== undefined) {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness,
        alpha: color.alpha
      };
    } else {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness
      };
    }
  }

  var hue;
  var delta = max - min;
  var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;

    case green:
      hue = (blue - red) / delta + 2;
      break;

    default:
      // blue case
      hue = (red - green) / delta + 4;
      break;
  }

  hue *= 60;

  if (color.alpha !== undefined) {
    return {
      hue: hue,
      saturation: saturation,
      lightness: lightness,
      alpha: color.alpha
    };
  }

  return {
    hue: hue,
    saturation: saturation,
    lightness: lightness
  };
}

/**
 * Returns an HslColor or HslaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a HslColor or HslaColor object back to a string.
 *
 * @example
 * // Assigns `{ hue: 0, saturation: 1, lightness: 0.5 }` to color1
 * const color1 = parseToHsl('rgb(255, 0, 0)');
 * // Assigns `{ hue: 128, saturation: 1, lightness: 0.5, alpha: 0.75 }` to color2
 * const color2 = parseToHsl('hsla(128, 100%, 50%, 0.75)');
 */
function parseToHsl(color) {
  // Note: At a later stage we can optimize this function as right now a hsl
  // color would be parsed converted to rgb values and converted back to hsl.
  return rgbToHsl(parseToRgb(color));
}

/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */
var reduceHexValue = function reduceHexValue(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }

  return value;
};

function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function colorToHex(color) {
  return numberToHex(Math.round(color * 255));
}

function convertToHex(red, green, blue) {
  return reduceHexValue("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}

function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsl(359, 0.75, 0.4),
 *   background: hsl({ hue: 360, saturation: 0.75, lightness: 0.4 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsl(359, 0.75, 0.4)};
 *   background: ${hsl({ hue: 360, saturation: 0.75, lightness: 0.4 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#b3191c";
 *   background: "#b3191c";
 * }
 */
function hsl(value, saturation, lightness) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number') {
    return hslToHex(value, saturation, lightness);
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined) {
    return hslToHex(value.hue, value.saturation, value.lightness);
  }

  throw new PolishedError(1);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsla(359, 0.75, 0.4, 0.7),
 *   background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 }),
 *   background: hsla(359, 0.75, 0.4, 1),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsla(359, 0.75, 0.4, 0.7)};
 *   background: ${hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 })};
 *   background: ${hsla(359, 0.75, 0.4, 1)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(179,25,28,0.7)";
 *   background: "rgba(179,25,28,0.7)";
 *   background: "#b3191c";
 * }
 */
function hsla(value, saturation, lightness, alpha) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number' && typeof alpha === 'number') {
    return alpha >= 1 ? hslToHex(value, saturation, lightness) : "rgba(" + hslToRgb(value, saturation, lightness) + "," + alpha + ")";
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined && alpha === undefined) {
    return value.alpha >= 1 ? hslToHex(value.hue, value.saturation, value.lightness) : "rgba(" + hslToRgb(value.hue, value.saturation, value.lightness) + "," + value.alpha + ")";
  }

  throw new PolishedError(2);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgb(255, 205, 100),
 *   background: rgb({ red: 255, green: 205, blue: 100 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgb(255, 205, 100)};
 *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffcd64";
 *   background: "#ffcd64";
 * }
 */
function rgb(value, green, blue) {
  if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number') {
    return reduceHexValue("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value === 'object' && green === undefined && blue === undefined) {
    return reduceHexValue("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  }

  throw new PolishedError(6);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * Can also be used to fade a color by passing a hex value or named CSS color along with an alpha value.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgba(255, 205, 100, 0.7),
 *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
 *   background: rgba(255, 205, 100, 1),
 *   background: rgba('#ffffff', 0.4),
 *   background: rgba('black', 0.7),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgba(255, 205, 100, 0.7)};
 *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
 *   background: ${rgba(255, 205, 100, 1)};
 *   background: ${rgba('#ffffff', 0.4)};
 *   background: ${rgba('black', 0.7)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,205,100,0.7)";
 *   background: "rgba(255,205,100,0.7)";
 *   background: "#ffcd64";
 *   background: "rgba(255,255,255,0.4)";
 *   background: "rgba(0,0,0,0.7)";
 * }
 */
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === 'string' && typeof secondValue === 'number') {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === 'number' && typeof secondValue === 'number' && typeof thirdValue === 'number' && typeof fourthValue === 'number') {
    return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (typeof firstValue === 'object' && secondValue === undefined && thirdValue === undefined && fourthValue === undefined) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }

  throw new PolishedError(7);
}

var isRgb = function isRgb(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isRgba = function isRgba(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && typeof color.alpha === 'number';
};

var isHsl = function isHsl(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isHsla = function isHsla(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && typeof color.alpha === 'number';
};
/**
 * Converts a RgbColor, RgbaColor, HslColor or HslaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `rgb`, `rgba`, `hsl` or `hsla`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: toColorString({ red: 255, green: 205, blue: 100 }),
 *   background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
 *   background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
 *   background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${toColorString({ red: 255, green: 205, blue: 100 })};
 *   background: ${toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
 *   background: ${toColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
 *   background: ${toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffcd64";
 *   background: "rgba(255,205,100,0.72)";
 *   background: "#00f";
 *   background: "rgba(179,25,25,0.72)";
 * }
 */


function toColorString(color) {
  if (typeof color !== 'object') throw new PolishedError(8);
  if (isRgba(color)) return rgba(color);
  if (isRgb(color)) return rgb(color);
  if (isHsla(color)) return hsla(color);
  if (isHsl(color)) return hsl(color);
  throw new PolishedError(8);
}

// Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-redeclare
function curried(f, length, acc) {
  return function fn() {
    // eslint-disable-next-line prefer-rest-params
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined);
  };
} // eslint-disable-next-line no-redeclare


function curry(f) {
  // eslint-disable-line no-redeclare
  return curried(f, f.length, []);
}

function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}

/**
 * Returns a string value for the lightened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: lighten(0.2, '#CCCD64'),
 *   background: lighten('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${lighten(0.2, '#FFCD64')};
 *   background: ${lighten('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e5e6b1";
 *   background: "rgba(229,230,177,0.7)";
 * }
 */

function lighten(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
  }));
} // prettier-ignore


var curriedLighten = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(lighten);

var primaryFont = '"Source Sans Pro", sans-serif';
var baseFontSize = '16px';
var webTypeScale = {
    h1: '5.25rem',
    h2: '3.5rem',
    h3: '2.5rem',
    h4: '2rem',
    h5: '1.5rem',
    h6: '1.125rem',
    p1: '1rem',
    p2: '0.875rem',
    sub: '0.75rem',
};
var mobileTypeScale = {
    h1: '3rem',
    h2: '2.5rem',
    h3: '2rem',
    h4: '1.5rem',
    h5: '1.125rem',
    h6: '1rem',
    p1: '1rem',
    p2: '0.875rem',
    sub: '0.75',
};

var yellow = '#FFD600';
var blue = '#00E4F2';
var red = '#FE1C5F';
var colors = {
    energy30: yellow,
    energy20: curriedLighten(0.2, yellow),
    calm30: blue,
    calm20: curriedLighten(0.2, blue),
    health30: red,
    health20: curriedLighten(0.2, red),
    gray60: '#000',
    gray50: '#444A53',
    gray45: '#72757E',
    gray40: '#888B91',
    gray30: '#CCCDD0',
    gray20: '#EEEEEF',
    gray10: '#FAFAFA',
    gray0: '#fff',
};
var customMaxMediaQuery = function (maxWidth) { return "@media (max-width: " + maxWidth + "px)"; };
var customMinMediaQuery = function (minWidth) { return "@media (min-width: " + minWidth + "px)"; };
var defaultTheme = {
    colors: colors,
    palette: {
        primary: {
            light: colors.gray50,
            main: colors.gray60,
            contrastText: colors.gray0,
        },
        energy: {
            light: colors.energy20,
            main: colors.energy30,
            contrastText: colors.gray60,
        },
        calm: {
            light: colors.calm20,
            main: colors.calm30,
            contrastText: colors.gray60,
        },
        health: {
            light: colors.health20,
            main: colors.health30,
            contrastText: colors.gray60,
        },
    },
    media: {
        customMax: customMaxMediaQuery,
        customMin: customMinMediaQuery,
        phoneOnly: customMaxMediaQuery(599),
        tabletPortraitUp: customMinMediaQuery(600),
        tabletLandscapeUp: customMinMediaQuery(900),
        tabletDesktopUp: customMinMediaQuery(1200),
    },
    typography: {
        baseFontSize: baseFontSize,
        typeScale: {
            web: webTypeScale,
            mobile: mobileTypeScale,
        },
    },
    elevation: {
        0: 'box-shadow: none;',
        1: "box-shadow: 0px 1px 0px " + colors.gray30 + ";",
    },
};

var GlobalStyle = createGlobalStyle(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  ", "\n\n  html {\n    box-sizing: border-box;\n    font-size: ", "\n  }\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1.7;\n    font-family: ", ";\n    font-size: ", ";\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n"], ["\n  ", "\n\n  html {\n    box-sizing: border-box;\n    font-size: ", "\n  }\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1.7;\n    font-family: ", ";\n    font-size: ", ";\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n"])), normalize(), baseFontSize, primaryFont, baseFontSize);
var templateObject_1$5;

export { Button, GlobalStyle, H1, H2, H3, H4, H5, H6, Loader, Logo, LogoText, OutlinedButton, P1, P2, Select, Text, TextInput, defaultTheme };
//# sourceMappingURL=index.es.js.map
