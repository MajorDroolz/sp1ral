import React from 'react';
import Button from '../../helpers/Button';
import './index.scss';

function ErrorScreen(props: any) {
  return (
    <div className="error-screen">
      <h1 className="error-screen-title">
        An ERROR has occured!
      </h1>
      <br/>
      <Button text="Return to Login"
              fillColor="#E2EFDE"
              backColor="#171614"/>
    </div>
  )
}

export default React.memo(ErrorScreen);