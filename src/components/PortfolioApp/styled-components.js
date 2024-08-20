'use client'
'use client'

import styled from "styled-components";

export const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    font-family: monospace;
    transition: 1s;
`

export const Display = styled.div`
    width: 90%;
    height: 90%;
    border: 1px solid white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99999;
    overflow: hidden;
`

export const NameNavContainer = styled.div`
    height: 100%;
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 32px 0 0 32px;
    gap: 32px;
    position: relative;
`

export const NameContainer = styled.div`
    width: 90%;
    display: flex;
    gap: 8px;
    flex-direction: column;
    white-space: nowrap;
    #title-name {}
    #title-desc {
        font-size: 12px;
    }
`

export const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    transition: 0.5s;
    overflow-x: visible;
`