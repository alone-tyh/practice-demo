import React, { useEffect } from 'react';
import './style.less'

export const EventDemo: React.FC = () => {

  useEffect(() => {
    // 比较懒，只是演示直接就用匿名函数了，实际使用请勿模仿
    document.body.addEventListener('click', (e:MouseEvent) => {
      console.log(e, 'document冒泡阶段回调');
      alert('document冒泡阶段回调')
    }, false);
    document.body.addEventListener('click', (e:MouseEvent) => {
      console.log(e, 'document捕获阶段回调');
    }, true);
    // document.onclick = (e:MouseEvent) => {
    //   console.log(e, 'document的onclick');
    // }
  }, [])

  function handleClick(e: React.MouseEvent, name: string) {
    // e.persist();
    alert(`${name}的回调`)
    console.log(e, `${name}的回调`);
  }


  return (
    <div className="box box-1" onClick={(e) => handleClick(e, 'box-1')}>
      <div className="box box-2">
        <div className="box box-3"></div>
      </div>
      <div className="box box-useless"></div>
    </div>
  )
}

