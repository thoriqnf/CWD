import React, { Component } from 'react';
import './Hello.css';

const Hello = (props) => {
  return (
    <div className="f1 tc">
      <h1>Hello Haniii</h1>
      <p>{props.greeting}</p>
    </div>
  );
}
export default Hello

// props = property
