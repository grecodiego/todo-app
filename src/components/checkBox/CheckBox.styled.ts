import styled from 'styled-components'
import { Props } from './CheckBox.types'

export const CheckboxContainer = styled.div`
	display: inline-block;
	vertical-align: middle;
`
export const StyledCheckbox = styled.div`
	display: inline-block;
	width: 16px;
	height: 16px;
	background: ${({ checked }: Props) => (checked ? 'salmon' : 'papayawhip')};
	border-radius: 3px;
	transition: all 150ms;
`
export const HiddenCheckbox = styled.input.attrs({
	type: 'checkbox',
})`
	// Hide checkbox visually but remain accessible to screen readers.
	// Source: https://polished.js.org/docs/#hidevisually
	border: 0;
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`
