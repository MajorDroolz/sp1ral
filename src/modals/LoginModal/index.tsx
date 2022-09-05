import React from 'react';
import { useSelector } from '../../util';
import { SELECT, STORE, GAME } from '../../data';
import { Input, Button } from '../../helpers';
import './index.scss';

/*----------------------------------------------------------------------------*/

type LoginModalProps = any;

function LoginModal(props: LoginModalProps) {
  const isOpen = useSelector(SELECT.modalOpen, "login");
  const [ user, setUser ] = React.useState<string>("");
  const [ pswd, setPswd ] = React.useState<string>("");

  const userRef = React.useRef<HTMLInputElement>(null);
  const pswdRef = React.useRef<HTMLInputElement>(null);

  const className = `modal-back ${isOpen ? "visible": ""}`;

  const handleLogin = React.useCallback((event: React.FormEvent) => {
    event.preventDefault();
    if (userRef.current == null || pswdRef.current == null) return;

    if (user.length === 0) {
      return userRef.current.focus();
    } else if (pswd.length === 0) {
      return pswdRef.current.focus();
    }

    STORE.dispatch(GAME.toggleModal("login"));
  }, [ user, pswd ]);

  return (
    <div className={className}>
      <form className="login-modal" onSubmit={handleLogin}>
        <h2 className="login-title">Log In</h2>

        <Input i={0}
               name="username"
               type="text"
               label="Username"
               text={user}
               setText={setUser}
               ref={userRef}/>

        <Input i={1}
               name="current-password"
               type="password"
               label="Password"
               text={pswd}
               setText={setPswd}
               ref={pswdRef}/>

        <span className="login-buttons">
          <Button className="login-signup" text="Sign Up" backColor="#E2EFDE" fillColor="#171614"/>
          <input className="login-submit" type="submit" value="Submit"/>
        </span>
      </form>
    </div>
  );
}

/*----------------------------------------------------------------------------*/

export default React.memo(LoginModal);