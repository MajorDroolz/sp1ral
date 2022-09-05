import React, { ReactElement } from 'react';
import '../Button/index.scss';

/*----------------------------------------------------------------------------*/

interface LinkProps {
  text?: string | ReactElement;
  fillColor?: string;
  backColor?: string;
  href?: string;
  className?: string;
  newPage?: boolean;
}

function Link(props: LinkProps) {
  const { text, fillColor, backColor, href, newPage } = props;

  const styles = {
    '--fill-color': fillColor ?? "black",
    '--back-color': backColor ?? "white",
  } as React.CSSProperties;

  const className = "input-button " + (props.className ?? "");

  return (
    <a target={newPage ? "_blank" : undefined}
       rel="noreferrer"
       href={href ?? "#"} 
       className={className}
       style={styles}>
      {text}
    </a>
  );
}

/*----------------------------------------------------------------------------*/

export default React.memo(Link);