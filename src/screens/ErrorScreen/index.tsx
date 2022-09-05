import React from 'react';
import Link from '../../helpers/Link';
import './index.scss';

/*----------------------------------------------------------------------------*/

interface ErrorScreenProps {
  title?: string;
  message?: string;
  link?: string;
  linkTitle?: string;
}

function ErrorScreen(props: ErrorScreenProps) {
  let { title, message, link, linkTitle } = props;

  title ??= "An error has occured!";
  message ??= "";
  linkTitle ??= "Return to Login";
  link ??= "/login";

  return (
    <div className="error-screen">
      <h2 className="error-screen-title">{title}</h2>
      <p className="error-screen-message">{message}</p>
      <Link text={linkTitle}
            fillColor="#E2EFDE"
            backColor="#171614"
            href={link}/>
    </div>
  )
}

/*----------------------------------------------------------------------------*/

export default React.memo(ErrorScreen);