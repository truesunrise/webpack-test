var _ = require('lodash');    // require: 노드에 포함된 스펙, 브라우저가 인식을 못함 -> 웹팩의 필요성
// named import 규칙 : 반드시 {} 안에 동일한 이름을 사용
import {area, circumference} from './circle';
// default import 규칙: {} 없이 이름을 바꿀 수 있다.
import cube from './cube'

import './style.css';
import './hello.scss';

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // _ : lodash 라이브러리에서 등록을 해줘야만 사용할 수 있음
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}
console.log('webpack test');
console.log(area(5));
console.log(cube(5));
document.body.appendChild(component());