import { NavContainer } from './styled-components'
import { navOptions } from './navOptions'
import Option from './Option'
import { RefObject } from 'react'

interface NavProps {
    currentPage: String,
    onNavigate: (page: String) => void
}

const Nav: React.FC<NavProps> = ({ currentPage, onNavigate }) => {
    return (
        <NavContainer>
            {navOptions.map((op) => {
                return (
                    <Option 
                        onNavigate={onNavigate}
                        option={op} 
                        isSelected={currentPage === op.val} 
                    />
                )
            })}
        </NavContainer>
    )
}

export default Nav;