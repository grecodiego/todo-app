import styled from 'styled-components'
import img from '../../assets/images/png/headerImg.png'
export const StyledHeader = styled.div`
	height: 20%;
	background-color: ${({ theme }) => theme.color.primary};
	width: 100%;
	display: flex;
	justify-content: left;
	align-items: center;
	padding: 1em;
	background-image: url(${img});
	background-repeat: no-repeat;
	background-size: contain;
	background-position: 90%;
`

export const Title = styled.h1`
	color: white;
	font-size: 3em;
`
