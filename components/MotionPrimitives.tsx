'use client';

import type { ReactNode } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

const EASE_SMOOTH = [0.22, 1, 0.36, 1] as const;

interface MotionFadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  inView?: boolean;
}

export function MotionFadeIn({
  children,
  className = '',
  delay = 0,
  inView = false,
}: MotionFadeInProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  if (inView) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.24, delay, ease: EASE_SMOOTH }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, delay, ease: EASE_SMOOTH }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface MotionStaggerGridProps {
  children: ReactNode;
  className?: string;
  inView?: boolean;
}

export function MotionStaggerGrid({
  children,
  className = '',
  inView = true,
}: MotionStaggerGridProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.035,
      },
    },
  };

  if (inView) {
    return (
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface MotionStaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function MotionStaggerItem({
  children,
  className = '',
}: MotionStaggerItemProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 6 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.2, ease: EASE_SMOOTH },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface MotionDropdownPanelProps {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
}

export function MotionDropdownPanel({
  isOpen,
  children,
  className = '',
}: MotionDropdownPanelProps) {
  const prefersReduced = useReducedMotion();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: -4, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -4, scale: 0.98 }}
          transition={{ duration: prefersReduced ? 0.06 : 0.14, ease: EASE_SMOOTH }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface MotionModalBackdropProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function MotionModalBackdrop({
  children,
  onClick,
  className = '',
}: MotionModalBackdropProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: prefersReduced ? 0.06 : 0.16, ease: EASE_SMOOTH }}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface MotionModalPanelProps {
  children: ReactNode;
  role?: string;
  ariaModal?: boolean;
  ariaLabel?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  className?: string;
}

export function MotionModalPanel({
  children,
  role = 'dialog',
  ariaModal = true,
  ariaLabel,
  onClick,
  className = '',
}: MotionModalPanelProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      role={role}
      aria-modal={ariaModal}
      aria-label={ariaLabel}
      initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 8, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 6, scale: 0.99 }}
      transition={{ duration: prefersReduced ? 0.06 : 0.18, ease: EASE_SMOOTH }}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface MotionCollapseProps {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
}

export function MotionCollapse({
  isOpen,
  children,
  className = '',
}: MotionCollapseProps) {
  const prefersReduced = useReducedMotion();

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={prefersReduced ? { opacity: 0 } : { opacity: 0, height: 0 }}
          transition={{ duration: prefersReduced ? 0.06 : 0.18, ease: EASE_SMOOTH }}
          className={`overflow-hidden ${className}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}