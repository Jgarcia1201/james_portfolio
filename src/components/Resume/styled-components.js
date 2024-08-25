'use client'

import styled from "styled-components"

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