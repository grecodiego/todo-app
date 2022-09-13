import styled from 'styled-components'

export const StyledApp = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100%;
	width: 100%;
	text-align: center;
	flex-direction: column;
`
export const Body = styled.body`
	display: flex;
	padding: 2em;
	flex-direction: column;
	height: 80%;
	width: auto;
	background-color: ${({ theme }) => theme.color.background}; ;
`
