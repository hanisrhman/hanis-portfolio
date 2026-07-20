import type { Variants } from "framer-motion";

/* ===============================
   Fade Up
================================ */

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
    },
  },
};

/* ===============================
   Fade Left
================================ */

export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.7,
    },
  },
};

/* ===============================
   Fade Right
================================ */

export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.7,
    },
  },
};

/* ===============================
   Zoom In
================================ */

export const zoomIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.6,
    },
  },
};

/* ===============================
   Fade In
================================ */

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      duration: 0.7,
    },
  },
};

/* ===============================
   Stagger Container
================================ */

export const staggerContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

/* ===============================
   Scale Card
================================ */

export const scaleCard: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.5,
    },
  },
};

/* ===============================
   Slide Up
================================ */

export const slideUp: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
    },
  },
};

/* ===============================
   Slide Down
================================ */

export const slideDown: Variants = {
  hidden: {
    opacity: 0,
    y: -80,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
    },
  },
};

/* ===============================
   Rotate In
================================ */

export const rotateIn: Variants = {
  hidden: {
    opacity: 0,
    rotate: -8,
    scale: 0.9,
  },

  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,

    transition: {
      duration: 0.6,
    },
  },
};