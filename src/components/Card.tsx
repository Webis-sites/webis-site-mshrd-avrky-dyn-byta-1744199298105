'use client';

import React, { ReactNode } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface CardProps {
  /**
   * Card title
   */
  title?: string;
  /**
   * Image source URL
   */
  image?: string;
  /**
   * Alt text for the image
   */
  imageAlt?: string;
  /**
   * Card content as children
   */
  children: ReactNode;
  /**
   * Optional footer content
   */
  footer?: ReactNode;
  /**
   * Optional CSS class name
   */
  className?: string;
  /**
   * Optional card variant
   */
  variant?: 'neumorphic' | 'glassmorphism';
}

const Card: React.FC<CardProps> = ({
  title,
  image,
  imageAlt = '',
  children,
  footer,
  className,
  variant = 'neumorphic',
}) => {
  const cardVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
    tap: { 
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  };

  return (
    <motion.div
      className={clsx(
        'w-full max-w-sm mx-auto overflow-hidden rounded-xl transition-all duration-300',
        'h-full flex flex-col',
        {
          'bg-neutral-100 dark:bg-neutral-800 shadow-neumorphic hover:shadow-neumorphic-hover': variant === 'neumorphic',
          'bg-glass border border-white/20 backdrop-blur-md shadow-glass': variant === 'glassmorphism'
        },
        className
      )}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={cardVariants}
      aria-labelledby={title ? 'card-title' : undefined}
    >
      {image && (
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      
      <div className="flex-1 p-6">
        {title && (
          <h3 
            id="card-title"
            className={clsx(
              'text-xl font-bold mb-4 text-neutral-800 dark:text-white',
              'border-b-2 border-primary pb-2 inline-block',
              {
                'text-shadow-neumorphic': variant === 'neumorphic',
                'text-shadow-glass': variant === 'glassmorphism'
              }
            )}
          >
            {title}
          </h3>
        )}
        
        <div className={clsx(
          'text-neutral-700 dark:text-neutral-200',
          {
            'text-shadow-neumorphic-text': variant === 'neumorphic',
            'text-shadow-glass-text': variant === 'glassmorphism'
          }
        )}>
          {children}
        </div>
      </div>
      
      {footer && (
        <div className={clsx(
          'p-4 mt-auto',
          {
            'border-t border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-850': variant === 'neumorphic',
            'border-t border-white/10 bg-white/5': variant === 'glassmorphism'
          }
        )}>
          {footer}
        </div>
      )}
    </motion.div>
  );
};

export default Card;