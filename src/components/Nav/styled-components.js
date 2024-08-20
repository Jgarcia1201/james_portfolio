'use client'

import styled from "styled-components"

export const NavContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 15px;
`

export const OptionContainer = styled.div`
    transition: opacity 1s;
    &:hover {
    cursor: pointer;
    }
`

export const EmailMe = styled.div`
    align-self: flex-end;
`