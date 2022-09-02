import React from 'react';
import '../Button/index.scss';

/*----------------------------------------------------------------------------*/

interface LinkProps {
  text?: string;
  fillColor?: string;
  backColor?: string;
  href?: string;
  className?: string;
}

function Link(props: LinkProps) {
  const { text, fillColor, backColor, href } = props;

  const styles = {
    '--fill-color': fillColor ?? "black",
    '--back-color': backColor ?? "white",
  } as React.CSSProperties;

  const className = "input-button " + (props.className ?? "");

  return (
    <a href={href ?? "#"} className={className} style={styles}>{text}</a>
  );
}

/*----------------------------------------------------------------------------*/

export default React.memo(Link);