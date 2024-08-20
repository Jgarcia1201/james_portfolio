'use client'

import styled from "styled-components"

const pageToAnimationMap = {
    'home': 'rotate(0.05turn)',
    'contact': 'rotate(0.075turn)',
    'resume': 'rotate(-0.05turn)',
    'projects': 'rotate(-0.065turn)'
}

export const AnimationContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.25;
    transition: 0.5s;
    z-index: -1;
    object-fit: contain;
    box-sizing: border-box;
    z-index: -9999;
    position: fixed;

    canvas {
        object-fit: contain;
        z-index: -9999;
        height: 90% !important;
        width: 90% !important;
    }
`