import React from "react"

import '~components/container/container.scss';

const classModifiers = function (options) {

  let classList = [];

  if (!options) return '';

  if (options.fullWidth && options.fullWidth === true) {
    classList.push('container--full-width');
  }

  if (options.wrap && options.wrap === true) {
    classList.push('container--no-wrap');
  }

  if (classList.length === 0) {
    return '';
  }

  return ' ' + classList.join(' ')

}


const Container = ({ children, options }) => {

  const modifiers = classModifiers(options);

  return (
    <div className={'container' + modifiers}>{children}</div>
  )

}

export default Container;