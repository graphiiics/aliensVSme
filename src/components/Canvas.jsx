import React from 'react'
import Sky from './Sky'
import Ground from './Ground'
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';

const Canvas = (props) => {
    // const style = {
    //     border: '1px solid black',
    // }

    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight]

    return (
        <svg
        id="aliens-go-home-canvas"
        preserveAspectRatio="xMaxYMax none"
        viewBox={viewBox}
        onMouseMove={props.trackMouse}
        >
            <Sky />
            <Ground />
            <CannonPipe rotation={props.angle} />
            <CannonBase />
            {/* <circle cx={0} cy={0} r={50} />     */}
        </svg>
    )
}

export default Canvas;

