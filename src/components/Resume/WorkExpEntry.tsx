import { WorkExp } from "./types"
import { ExpEntryContainer, EntryHeader, EntryBody } from "./styled-components"

interface WorkExpEntryProps {
    expEntry: WorkExp
}

const ResumeEntry: React.FC<WorkExpEntryProps> = ({ expEntry }) => {
    const { company, title, startDate, endDate, bulletPoints } = expEntry
    return (
        <ExpEntryContainer>
            <EntryHeader>
                <h2>{company}</h2>
                <p>{title}</p>
                <p>{startDate} - {endDate}</p>
            </EntryHeader>
            <EntryBody>
                {bulletPoints.map((point, i) => {
                    return (<p key={i}>- {point}</p>)
                })}
            </EntryBody>
        </ExpEntryContainer>
    )
}

export default ResumeEntry