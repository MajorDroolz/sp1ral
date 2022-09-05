import React from 'react';
import './index.scss';

/*----------------------------------------------------------------------------*/

interface InputProps {
  name?: string;
  className?: string;
  label?: string;
  text?: string;
  setText?: (text: string) => void;
  error?: string;
  type?: string;
  i?: number;
}

function Input(props: InputProps, ref: React.Ref<HTMLInputElement>) {
  const { name, className, label, text, setText, error, type, i } = props;

  const handleChange = React.useCallback((event: React.ChangeEvent) => {
    if (event.nativeEvent.target == null) return;
    const target = event.nativeEvent.target as HTMLInputElement;
    setText?.(target.value);
  }, [ setText ]);

  return <>
    <h4 className="input-title">
      {label}
    </h4>
    
    <label htmlFor={name}
          className={`input-label ${className ?? ""}`}>

      <input type={type}
             name={name}
             className="input-inner"
             value={text}
             onChange={handleChange}
             tabIndex={i}
             ref={ref}/>
    </label>
    
    <h4 className="input-error">
      {error}
    </h4>
  </>;
}

/*----------------------------------------------------------------------------*/

export default React.memo(React.forwardRef(Input));