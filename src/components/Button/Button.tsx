// @ts-check
import { FC, ReactNode } from 'react'
import { StyledButton } from './Button.styled'

interface Props {
	children: ReactNode
}
export const Button: FC<Props> = ({ children }) => (
	<StyledButton>{children}</StyledButton>
)
