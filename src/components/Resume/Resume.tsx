import { ExpSection, ResumeContainer, WorkExpContainer } from './styled-components'
import { resumeData } from './resumeData'
import ResumeEntry from './WorkExpEntry'
import EduExpEntry from './EduExpEntry'

const Resume: React.FC = () => {
    return (
        <ResumeContainer>
            <ExpSection>
                <h1>Professional Experience</h1>
                <WorkExpContainer>
                    {resumeData.workExp.map((exp) => {
                        return (
                            <ResumeEntry expEntry={exp} />
                        )
                    })}
                </WorkExpContainer>
            </ExpSection>
            <ExpSection>
                <h1>Education</h1>
                {resumeData.education.map((exp) => {
                    return (
                        <EduExpEntry expEntry={exp} />
                    )
                })}
                
            </ExpSection>
        </ResumeContainer>
    )
}

export default Resume