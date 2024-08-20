import React from "react"
import { EduExp } from "./types"
import { EntryHeader, ExpEntryContainer } from "./styled-components"

interface EduExpEntryProps {
    expEntry: EduExp
}

const EduExpEntry: React.FC<EduExpEntryProps> = ({ expEntry }) => {
    const { degree, school, graduationDate } = expEntry
    return (
        <ExpEntryContainer>
            <EntryHeader>
                <h2>{degree}</h2>
                <p>{school}</p>
                <p>{graduationDate}</p>
            </EntryHeader>
        </ExpEntryContainer>
    )
}

export default EduExpEntry