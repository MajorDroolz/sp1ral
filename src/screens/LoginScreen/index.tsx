import React from 'react';
import Link from '../../helpers/Link';
import { AiFillGithub } from 'react-icons/ai';
import './index.scss';

/*----------------------------------------------------------------------------*/

type LoginScreenProps = any;

function LoginScreen(props: LoginScreenProps) {
  return (
    <div className="login-screen">
      <h1 className="login-title">Sp1ral</h1>
      <Link text="Play"
            backColor="#E2EFDE"
            fillColor="#171614"
            href="/main"
            className="login-button"/>
            
      <Link text="Tutorial"
            backColor="#E2EFDE"
            fillColor="#171614"
            href="/tutorial"
            className="login-button"/>

      <Link text={<AiFillGithub/>}
            backColor="#E2EFDE"
            fillColor="#171614"
            href="https://github.com/MajorDroolz/sp1ral"
            className="github-button"
            newPage/>
    </div>
  );
}

/*----------------------------------------------------------------------------*/

export default React.memo(LoginScreen);