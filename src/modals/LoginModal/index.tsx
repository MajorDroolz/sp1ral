import React from 'react';
import { useSelector } from '../../util';
import { SELECT, STORE, GAME } from '../../data';
import { Input } from '../../helpers';
import { MdClear } from 'react-icons/md';
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

  const handleClear = React.useCallback(() => {
    STORE.dispatch(GAME.toggleModal("login"));
  }, [ ]);

  const handleLogin = React.useCallback(() => {
    console.log("LOG IN");
    if (userRef.current == null || pswdRef.current == null) return;

    if (user.length === 0) {
      return userRef.current.focus();
    } else if (pswd.length === 0) {
      return pswdRef.current.focus();
    }

    handleClear();
  }, [ user, pswd, handleClear ]);

  const handleSignup = React.useCallback(() => {
    console.log("SIGN UP");
    handleClear();
  }, [ handleClear ]);

  const handleSubmit = React.useCallback((event: React.FormEvent) => {
    event.preventDefault();
    const native = event.nativeEvent as SubmitEvent;
    const submitter = native.submitter as HTMLInputElement;
    const type = submitter.name;

    switch (type) {
    case "signup":
      return handleSignup();
    case "login":
      return handleLogin();
    default:
      return handleClear();
    }
  }, [ handleLogin, handleSignup, handleClear ]);

  return (
    <div className={className}>
      <form className="login-modal" onSubmit={handleSubmit}>
        <div className="login-top">
          <h2 className="login-title">Log In</h2>
          <button className="input-button smooth login-cancel">
            <MdClear className="login-cancel-inner"/>
          </button>
        </div>

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
          <input className="input-button solid login-submit"
                 type="submit"
                 name="login"
                 value="Log In"/>
          <input className="input-button smooth login-submit"
                 type="submit"
                 name="signup"
                 value="Sign Up"/>
        </span>
      </form>
    </div>
  );
}

/*----------------------------------------------------------------------------*/

export default React.memo(LoginModal);