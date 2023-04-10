import { createVar, style } from '@vanilla-extract/css';

export const strokeColor = createVar();

export const populationChart = style({
  width: '100%',
  margin: '30px',
  '@media': {
    'screen and (max-width: 768px)': {
      margin: '30px 0',
    },
  },
});

export const customTooltip = style({
  padding: '20px 30px',
  backgroundColor: 'rgba(0,0,0,0.5)',
});

export const tooltipLabel = style({
  fontWeight: 'bold',
  marginBottom: '10px',
});

export const tooltipItem = style({
  color: strokeColor,
});
