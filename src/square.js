import React from 'react';
// import { render } from 'react-dom';

const squreS = {
  background: 'white',
  float: 'left',
  fontSize: '24px',
  lineHeight: '34px',
  height: '34px',
  marginRight: '-1px',
  marginTop: '-1px',
  padding: '0',
  textAlign: 'center',
  width: '34px'
};

export default function Square(props){

    return (
      <button className="square" style={squreS} onClick={props.onClick}>
        {props.value}
      </button>
    );
}
