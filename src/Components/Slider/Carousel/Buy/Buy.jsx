import React, {useRef, useEffect} from 'react';

const Buy = props => {

  const btnBuyRef = useRef(null);
  useEffect(() => {
    const canvas = btnBuyRef.current;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;
    ctx.moveTo(0, 10);
    ctx.lineTo(250, 10);
    ctx.lineTo(250, 150);
    ctx.moveTo(260, 130);

    ctx.lineTo(10, 130);
    ctx.moveTo(10, 130);
    ctx.lineTo(10, -80);
    ctx.stroke();
  }, []);

  return (
    <canvas className="slider__container__carousel__box__button-canvas" ref={btnBuyRef} {...props}></canvas>
  );
}

export default Buy;