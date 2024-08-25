'use client'

import styled from "styled-components"

export const InfoPageContainer = styled.div`
    width: 90%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 16px;
`

export const ScrollContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 32px 0;
    gap: 32px;
    align-items: end;
    overflow-y: auto;
    overflow-x: hidden;
    scroll-behavior: smooth;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &:-webkit-scrollbar {
        display: none;
    }   
`

export const InfoSectionContainer = styled.div`
    display: flex;
    font-size: 16px;
    text-align: right;
    flex-direction: column;
    gap: 32px;
`

export const InfoSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 80px;
`
