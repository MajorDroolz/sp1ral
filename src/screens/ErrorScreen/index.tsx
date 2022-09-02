import React from 'react';
import Link from '../../helpers/Link';
import './index.scss';

function ErrorScreen(props: any) {
  return (
    <div className="error-screen">
      <h1 className="error-screen-title">
        An ERROR has occured!
      </h1>
      <br/>
      <Link text="Return to Login"
            fillColor="#E2EFDE"
            backColor="#171614"
            href="/login"/>
    </div>
  )
}

export default React.memo(ErrorScreen);