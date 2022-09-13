// @ts-check
import { FC } from 'react'
import './TodoCounter.styled.ts'
import { TodoCounterTypes } from './TodoCounter.types'

export const TodoCounter: FC<TodoCounterTypes> = ({ quantyTask }) => (
	<h2 className='TodoCounter'>Has completado 2 de {quantyTask} TODOs</h2>
)
