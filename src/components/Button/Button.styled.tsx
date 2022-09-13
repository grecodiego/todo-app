import styled from 'styled-components'

export const StyledButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	font-size: 2em;
	padding: 0.5em;
	border-radius: 0.5em;
	width: fit-content;
	background-color: ${({ theme }) => theme.color.primary};
`
