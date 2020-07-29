import React, { useEffect } from 'react';
import { useState } from 'react';
import './style.less';

const clsPrefix = 'AnimationDemo';
export const AnimationDemo: React.FC = () => {
  const [show, setShow] = useState(false);
  const [style, setStyle] = useState('none');
  const [className, setClassName] = useState('');

  useEffect(() => {
    if (show) {
      setStyle('block');
      setClassName('show')
    } else {
      setClassName('hide')
    }
  }, [show])
  
  return (
    <div className={clsPrefix}>
      <button onClick={() => setShow(!show)}>按钮</button>
      <div
        className={`${clsPrefix}__modle ${className}`}
        style={{display: style}}
        onAnimationEnd={(e) => {
          console.log('事件完成', e);
          setClassName('');
          if (!show){
            setStyle('none');
          }
        }}
      >
        123
      </div>
    </div>
  )
}
