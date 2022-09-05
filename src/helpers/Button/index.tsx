import React, { ReactElement } from 'react';
import './index.scss';

/*----------------------------------------------------------------------------*/

interface ButtonProps {
  text?: string | ReactElement;
  fillColor?: string;
  backColor?: string;
  onClick?: (event: React.MouseEvent) => any;
  className?: string;
}

function Button(props: ButtonProps) {
  const { text, fillColor, backColor, onClick } = props;

  const styles = {
    '--fill-color': fillColor ?? "black",
    '--back-color': backColor ?? "white",
  } as React.CSSProperties;

  const className = "input-button " + (props.className ?? "");

  return (
    <button onClick={onClick} className={className} style={styles}>
      {text}
    </button>
  );
}

/*----------------------------------------------------------------------------*/

export default React.memo(Button);