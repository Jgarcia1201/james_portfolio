'use client'

import styled from "styled-components"

export const ResumeContainer = styled.div`
    width: 90%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 12px;
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

export const ExpSection = styled.div`
    display: flex;
    font-size: 16px;
    text-align: right;
    flex-direction: column;
    gap: 32px;
`

export const WorkExpContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 80px;
`

export const ExpEntryContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 16px;
`

export const EntryHeader = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 8px;
`

export const EntryBody = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    gap: 36px;
    font-size: 14px;
    text-align: right;
    max-width: 350px;
`

export const ResumeLink = styled.a`
    border: 1px solid white;
    height: 25px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: end;
    padding: 8px;
    transition: 0.5s;
    &:hover {
        background: white;
        color: black;
    }
`