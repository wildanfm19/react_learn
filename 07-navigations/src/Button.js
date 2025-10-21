import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
    children ,
    primary , 
    secondary ,
    success,
    warning,
    danger ,
    outline,
    rounded
}) => {
   

  return (
   <button>{children}</button>
  )
}

Button.propTypes = {
    checkVariationValue : ({primary , secondary , success , warning, danger , outline , rounded}) => {
       const count = Number (!!primary)
       + Number (!!secondary) 
       + Number (!! warning)
       + Number (!! success)
       + Number (!! danger)
       + Number (!!outline)
       + Number (!!rounded)

       if(count > 1) {
        return new Error("Only one of primary , secondary , success , warning , danger , outline , rounded can be true at once!!")
       } ;
    }
}

export default Button