import { ExpSection, ResumeContainer, WorkExpContainer, ResumeLink, ScrollContainer } from './styled-components'
import { resumeData } from './resumeData'
import ResumeEntry from './WorkExpEntry'
import EduExpEntry from './EduExpEntry'

const Resume: React.FC = () => {
    return (
        <ResumeContainer>
            <ResumeLink href="/RES.pdf" target="_blank">View PDF</ResumeLink>
            <ScrollContainer>
                <ExpSection>
                    <h1>Professional Experience</h1>
                    <WorkExpContainer>
                        {resumeData.workExp.map((exp) => {
                            return (
                                <ResumeEntry key={exp.company} expEntry={exp} />
                            )
                        })}
                    </WorkExpContainer>
                </ExpSection>
                <ExpSection>
                    <h1>Education</h1>
                    {resumeData.education.map((exp) => {
                        return (
                            <EduExpEntry key={exp.graduationDate} expEntry={exp} />
                        )
                    })}

                </ExpSection>
            </ScrollContainer>
        </ResumeContainer>
    )
}

export default Resume