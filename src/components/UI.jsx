import React from 'react';
import { motion } from 'framer-motion';

export function Button({ variant = 'primary', size = 'md', children, ...props }) {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
    danger: 'btn-danger',
    success: 'btn-success',
  };

  const sizes = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export function Card({ children, className = '', ...props }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className={`card ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Badge({ variant = 'primary', children }) {
  const variants = {
    primary: 'badge-primary',
    success: 'badge-success',
    warning: 'badge-warning',
    danger: 'badge-danger',
  };

  return <span className={`badge ${variants[variant]}`}>{children}</span>;
}

export function Alert({ variant = 'info', children, icon }) {
  const variants = {
    info: 'alert-info',
    success: 'alert-success',
    warning: 'alert-warning',
    danger: 'alert-danger',
  };

  return (
    <div className={`alert ${variants[variant]}`}>
      {icon && <span className="text-xl">{icon}</span>}
      <div>{children}</div>
    </div>
  );
}

export function Loader() {
  return <div className="loader" />;
}

export function Input({ label, error, ...props }) {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-semibold mb-2">{label}</label>}
      <input className={error ? 'border-red-500' : ''} {...props} />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
