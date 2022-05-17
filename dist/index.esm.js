import _taggedTemplateLiteral from '@babel/runtime/helpers/taggedTemplateLiteral';
import React from 'react';
import { ReactSVG } from 'react-svg';
import styled, { css } from 'styled-components';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var StyledSVGIcon = styled(ReactSVG)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  svg {\n    fill: black;\n    ", "\n    ", "\n    path {\n      ", "\n    }\n    rect {\n      ", "\n    }\n    circle {\n      ", "\n    }\n  }\n"])), function (_ref) {
  var size = _ref.size;
  return size && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        width: ", "px;\n        height: ", "px;\n      "])), size, size);
}, function (_ref2) {
  var transform = _ref2.transform;
  return transform && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        transform: ", ";\n      "])), transform);
}, function (_ref3) {
  var color = _ref3.color;
  return color && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n          fill: ", ";\n        "])), color);
}, function (_ref4) {
  var color = _ref4.color;
  return color && css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n          fill: ", ";\n        "])), color);
}, function (_ref5) {
  var color = _ref5.color;
  return color && css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n          fill: ", ";\n        "])), color);
});

var SMIcon = function SMIcon(props) {
  return /*#__PURE__*/React.createElement(StyledSVGIcon, {
    src: require("./icons/".concat(props.name, ".svg")),
    color: props.color,
    size: props.size,
    transform: props.transform
  });
};

export { SMIcon as default };
