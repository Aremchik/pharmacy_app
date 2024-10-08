import React from 'react';
import {Svg, Path, G, Defs, Rect, clipPath, } from 'react-native-svg';

export const GreenLoveSvg = ({color}) => {
  return (
    <Svg width="26.7" height="23" viewBox="-1 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M10.6859 18.3535C10.3007 18.7166 9.69929 18.7166 9.31409 18.3535L8.55 17.6332C3.4 12.7978 0 9.59836 0 5.69482C0 2.49537 2.42 0 5.5 0C7.24 0 8.91 0.838692 10 2.15368C11.09 0.838692 12.76 0 14.5 0C17.58 0 20 2.49537 20 5.69482C20 9.59836 16.6 12.7978 11.45 17.6332L10.6859 18.3535Z" stroke="#91D337" fill={color}/>
    </Svg>
  );
};