import { style } from '@vanilla-extract/css';

export const index = style({
  width: '100%',
  height: '150vh',
  padding: '50px 0',
  color: 'white',
  backgroundColor: '#333',
  '@media': {
    'screen and (max-width: 768px)': {
      height: '180vh',
    },
  },
});

export const indexInner = style({
  maxWidth: '1000px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
