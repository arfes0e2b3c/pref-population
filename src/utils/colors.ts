const colors = [
  '#FF00FF',
  '#00FFFF',
  '#FF4500',
  '#00FF00',
  '#FFD700',
  '#AAAAAA',
  '#FFFF00',
  '#7FFFD4',
  '#00FA9A',
  '#8B0000',
];
export const supplyStrokeColor = (index: number) => {
  return colors[index % 10];
};
