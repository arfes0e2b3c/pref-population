import { style } from '@vanilla-extract/css';

export const checkbox = style({
  margin: '5px 7px',
  borderRadius: '5px',
  boxShadow: '3px 3px 3px rgba(0,0,0,2), -3px -3px 3px rgba(255,255,255,0.2)',
  transition: '.2s',
  ':hover': {
    opacity: '0.8',
  },
  '@media': {
    'screen and (max-width: 768px)': {
      margin: '3px 4px',
    },
  },
});

export const checkboxLabelBox = style({
  width: '100%',
  height: '100%',
});

export const checkboxLabel = style({
  display: 'inline-block',
  padding: '8px 20px',
  fontWeight: 'bold',
  cursor: 'pointer',
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '5px 10px',
    },
  },
});

export const disable = style({
  display: 'none',
});

export const clicked = style({
  color: '#aaa',
  boxShadow:
    'inset 3px 3px 3px rgba(0,0,0,2), inset -3px -3px 3px rgba(255,255,255,0.2)',
  ':hover': {
    opacity: '1',
    color: 'white',
  },
});
