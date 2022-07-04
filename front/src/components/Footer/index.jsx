import styled from 'styled-components'
import colors from '../../utils/style/color'

export default function Footer() {
    const FooterContainer = styled.footer`
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: center;
        padding-top: 60px;
    `

    const NightModeButton = styled.button`
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: ${colors.secondary};
    `

    return(

        <FooterContainer>
            <NightModeButton>Night Mode</NightModeButton>
        </FooterContainer>
    )
}