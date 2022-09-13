// @ts-check
import { StyledTodoItem } from './TodoItem.styled'
import { TodoItemProps } from './TodoItem.types'

export const TodoItem = ({ completed, text }: TodoItemProps) => (
	<StyledTodoItem>
		<p>{text}</p>
	</StyledTodoItem>
)
