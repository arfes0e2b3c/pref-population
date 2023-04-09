import { style } from '@vanilla-extract/css';

export const modeButtonList = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  width: '100%',
  height: '80px',
  '@media': {
    'screen and (max-width:768px)': {
      height: '130px',
    },
  },
});

export const modeButton = style({
  width: '150px',
  height: '50px',
  margin: '0 10px',
  boxShadow: '3px 3px 3px rgba(0,0,0,2), -3px -3px 3px rgba(255,255,255,0.2)',
  textAlign: 'center',
  borderRadius: '5px',
  fontWeight: 'bold',
});

export const current = style({
  boxShadow:
    'inset 3px 3px 3px rgba(0,0,0,2), inset -3px -3px 3px rgba(255,255,255,0.2)',
});
