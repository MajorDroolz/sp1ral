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
  const { title, message, link, linkTitle } = props;

  return (
    <div className="error-screen">
      <h1 className="error-screen-title">
        {title ?? "An error has occured!"}
      </h1>
      <p className="error-screen-message">
        {message ?? ""}
      </p>
      <Link text={linkTitle ?? "Return to Login"}
            fillColor="#E2EFDE"
            backColor="#171614"
            href={link ?? "/login"}/>
    </div>
  )
}

/*----------------------------------------------------------------------------*/

export default React.memo(ErrorScreen);