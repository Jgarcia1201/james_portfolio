'use client'

import styled from "styled-components"

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