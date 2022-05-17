(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@babel/runtime/helpers/taggedTemplateLiteral'), require('react'), require('react-svg'), require('styled-components')) :
  typeof define === 'function' && define.amd ? define(['@babel/runtime/helpers/taggedTemplateLiteral', 'react', 'react-svg', 'styled-components'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["react-awesome-buttons"] = factory(global._taggedTemplateLiteral, global.React, global.reactSvg, global.styled));
})(this, (function (_taggedTemplateLiteral, React, reactSvg, styled) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var _taggedTemplateLiteral__default = /*#__PURE__*/_interopDefaultLegacy(_taggedTemplateLiteral);
  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
  var StyledSVGIcon = styled__default["default"](reactSvg.ReactSVG)(_templateObject || (_templateObject = _taggedTemplateLiteral__default["default"](["\n  svg {\n    fill: black;\n    ", "\n    ", "\n    path {\n      ", "\n    }\n    rect {\n      ", "\n    }\n    circle {\n      ", "\n    }\n  }\n"])), function (_ref) {
    var size = _ref.size;
    return size && styled.css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral__default["default"](["\n        width: ", "px;\n        height: ", "px;\n      "])), size, size);
  }, function (_ref2) {
    var transform = _ref2.transform;
    return transform && styled.css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral__default["default"](["\n        transform: ", ";\n      "])), transform);
  }, function (_ref3) {
    var color = _ref3.color;
    return color && styled.css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral__default["default"](["\n          fill: ", ";\n        "])), color);
  }, function (_ref4) {
    var color = _ref4.color;
    return color && styled.css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral__default["default"](["\n          fill: ", ";\n        "])), color);
  }, function (_ref5) {
    var color = _ref5.color;
    return color && styled.css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral__default["default"](["\n          fill: ", ";\n        "])), color);
  });

  var SMIcon = function SMIcon(props) {
    return /*#__PURE__*/React__default["default"].createElement(StyledSVGIcon, {
      src: require("./icons/".concat(props.name, ".svg")),
      color: props.color,
      size: props.size,
      transform: props.transform
    });
  };

  return SMIcon;

}));
