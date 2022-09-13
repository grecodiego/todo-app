import {
	HiddenCheckbox,
	StyledCheckbox,
	CheckboxContainer,
} from './CheckBox.styled'
import { Props } from './CheckBox.types'

export const Checkbox = ({ checked }: Props) => (
	<CheckboxContainer>
		<HiddenCheckbox checked={checked} />
		<StyledCheckbox checked={checked} />
	</CheckboxContainer>
)
