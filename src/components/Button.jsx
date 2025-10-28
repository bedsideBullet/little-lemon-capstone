import React from 'react';


const Button = ({
  children,
  variant = 'primary', 
  size = 'md', 
  onClick,
  disabled = false,
  className,
  ...props
}) => {
  const buttonClasses = `btn btn-${variant} btn-${size} ${className || ''}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
