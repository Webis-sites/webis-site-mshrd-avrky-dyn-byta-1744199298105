'use client';

import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The content of the button */
  children: ReactNode;
  /** The variant of the button */
  variant?: 'primary' | 'secondary' | 'outline';
  /** The size of the button */
  size?: 'small' | 'medium' | 'large';
  /** Icon to display before the button content */
  startIcon?: ReactNode;
  /** Icon to display after the button content */
  endIcon?: ReactNode;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether the button is full width */
  fullWidth?: boolean;
  /** Additional class names */
  className?: string;
}

/**
 * Button component for משרד עורכי דין ביתא website
 * 
 * Supports primary, secondary, and outline variants with different sizes
 * and optional icons.
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  startIcon,
  endIcon,
  disabled = false,
  fullWidth = false,
  className,
  ...props
}: ButtonProps) => {
  // Base classes for all buttons
  const baseClasses = 'relative inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed';
  
  // Neumorphic and glassmorphism effects
  const effectClasses = 'backdrop-filter backdrop-blur-sm border border-opacity-20 shadow-neumorphic';
  
  // Variant specific classes
  const variantClasses = {
    primary: 'bg-primary bg-opacity-90 text-white border-white hover:bg-opacity-100 hover:shadow-neumorphic-pressed active:shadow-neumorphic-pressed focus-visible:ring-primary',
    secondary: 'bg-secondary bg-opacity-90 text-white border-white hover:bg-opacity-100 hover:shadow-neumorphic-pressed active:shadow-neumorphic-pressed focus-visible:ring-secondary',
    outline: 'bg-transparent bg-opacity-20 border-2 border-primary text-primary hover:bg-primary hover:bg-opacity-10 focus-visible:ring-primary active:bg-opacity-20'
  };
  
  // Size specific classes
  const sizeClasses = {
    small: 'text-sm py-1.5 px-3',
    medium: 'text-base py-2.5 px-5',
    large: 'text-lg py-3 px-6'
  };
  
  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // Combined classes
  const buttonClasses = clsx(
    baseClasses,
    effectClasses,
    variantClasses[variant],
    sizeClasses[size],
    widthClasses,
    className
  );
  
  return (
    <motion.button
      className={buttonClasses}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      aria-disabled={disabled}
      {...props}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </motion.button>
  );
};

export default Button;