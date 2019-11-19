import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<App /><Potato />, document.getElementById('root'));
//ㄴ작동하지 않음 , 하나의 component만

/*
<App /> html 처럼 보이지만 html 이 아님
Component, react는 항상 component와 동작함
ㄴhtml을 반환하는 함수 -> ***항상 대문자로 시작***
react는 component를 사용해서 HTML처럼 작성하려는 경우에 필요
*javascript & html = JSX -react에서 나온 개념 > 오직 react에서만
*/


