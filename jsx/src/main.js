import React from 'react';
import ReactDOM from 'react-dom';

function Title(props) {
  return <h1>{props.label} {props.name}</h1>;
}
function Header() {
  return <div className='header'><Title label='Hello, ' name = 'Jimmy McGill' /></div>;
}
function ErrorMessage() {
  return <div> { isError() ? <h4 style={{color: 'red', fontSize: '20px'}}>an error has occurred, please refresh the page and try again</h4> : null } </div>;
}

function isError() {
  return getRandom() > 5;
}

function getRandom() {
  return Math.random() * (10 - 1) + 1;
}

function Danger() {
  const potentialRisk = '<b>This is raw HTML</b>';
  const html = { __html: potentialRisk };

  return <ul>
    <li>Danger: {potentialRisk}</li>
    <li>Dangerously: <span dangerouslySetInnerHTML={html} /></li>
  </ul>

}

function Page() {
  return <div>
    <Header />
    <Danger />
    <ErrorMessage />
  </div>
}

ReactDOM.render(<Page />, document.getElementById('mountPoint'));
