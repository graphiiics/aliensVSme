import React from 'react'
import PropTypes from 'prop-types'
import { pathFromBezierCurve } from '../utils/formulas'

const CannonPipe = (props ) => {
    const cannonPipeStyle = {
        fill: '#999',
        stroke: '#666',
        strokeWidth: '2px'
    }

    const transform = `rotate(${props.rotation}, 0, 0)`

    const muzzeleWidth = 40;
    const halfMuzzele = 20;
    const height = 100;
    const yBasis = 70;

    const cubicBezierCurve = {
        initialAxis: {
            x: -halfMuzzele,
            y: -yBasis,
        },
        initialControlPoint: {
            x: -40,
            y: height * 1.7,
        },
        endingControlPoint: {
            x: 80,
            y: height * 1.7,
        },
        endingAxis: {
            x: muzzeleWidth,
            y: 0,
        }
    }

    return (
        <g transform={transform}>
            <path 
                style={cannonPipeStyle}
                d={pathFromBezierCurve(cubicBezierCurve)}
            />
            <line 
                x1={-halfMuzzele}
                y1={-yBasis}
                x2={halfMuzzele}
                y2={-yBasis}
                style={cannonPipeStyle}
            />
        </g>
    )
}

CannonPipe.propTypes = {
    rotation: PropTypes.number.isRequired,
}

export default CannonPipe
