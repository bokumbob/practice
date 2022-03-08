import React from 'react';
import { useSpring, animated, interpolate } from "react-spring";

const RsTest = () => {
    const props = useSpring({number:0, from: {number:1}})
    const props2 = useSpring({
        vector: [0, 10, 30],
        display: 'block',
        padding: 20,
        background: 'linear-gradient(to right, #009fff, #ec2f4b)',
        transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)',
        boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.4)',
        borderBottom: '10px solid #2D3747',
        shape: 'M20,20 L20,380 L380,380 L380,20 L20,20 Z',
        textShadow: '0px 5px 15px rgba(255,255,255,0.5)'
      })
      const { o, xyz, color } = useSpring({
        from: { o: 0, xyz: [0, 0, 0], color: "red" },
        o: 1,
        xyz: [10, 20, 5],
        color: "green",
      });
    return (
        <>
        <animated.div style={{
            color,
             background: o.interpolate((o)=>`rgba(210,57,77,${o})`),
            transform: xyz.interpolate(
            (x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`
          ),
          border: interpolate([o, color], (o, color) => `${o * 10}px solid ${color}`)
          }}>
            ssasa 
        </animated.div>
        <animated.div style={props2}>
            ssasa 
        </animated.div>
        <animated.div style={
            {padding:o.interpolate({range:[0,0.5,1], output: [0,0,10]}).interpolate((o) => `${o}%`)}
            }>
                aaaaaaaaaaaaaaaaaaaaaaaaaa
        </animated.div>
        </>
    );
};

export default RsTest;