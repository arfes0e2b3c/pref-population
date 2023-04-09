import { style } from '@vanilla-extract/css';

export const header = style({
  width: '100%',
  height: '80px',
  color: 'white',
  backgroundColor: '#000',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media': {
    'screen and (max-width:768px)': {
      height: '60px',
    },
  },
});

export const headerTitle = style({
  fontSize: '32px',
  fontWeight: 'bold',
  '@media': {
    'screen and (max-width:768px)': {
      fontSize: '20px',
    },
  },
});
