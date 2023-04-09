import { style } from '@vanilla-extract/css';

export const checkbox = style({
  border: '1px solid red',
  borderRadius: '5px',
});

export const checkboxLabel = style({
  width: '100%',
  height: '100%',
  padding: '5px 20px',
  cursor: 'pointer',
});

export const disable = style({
  display: 'none',
});

export const clicked = style({
  backgroundColor: 'blue',
});
