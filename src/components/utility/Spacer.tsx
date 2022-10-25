import React from 'react';

type RestProps = React.HTMLAttributes<HTMLButtonElement>;
type Props = {
  size: number;
  axis?: "vertical"|"horizontal";
  style?: any;
} & RestProps;

const Spacer: React.FC<Props> = ({
  size,
  axis,
  style,
  ...delegated
}) => {
  const width = axis === 'vertical' ? 1 : size;
  const height = axis === 'horizontal' ? 1 : size;
  return (
    <span
      style={{
        display: 'block',
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...style,
      }}
      {...delegated}
    />
  );
};

export default Spacer;
