import { TodoSearch } from './components/todoSearch/TodoSearch'
import { TodoCounter } from './components/todoCounter/TodoCounter'
import { TodoList } from './components/todoList/TodoList'
import { Button } from './components/Button/Button'
import { TodoItem } from './components/todoItem/TodoItem'
import { Header } from './components/header/Header'
import { Body, StyledApp } from './App.styled'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme'

function App() {
	const todos: Array<{ text: String; completed: boolean }> = [
		{ text: 'Comprar pan', completed: false },
		{ text: 'Comprar hojas A4', completed: false },
		{ text: 'Ver House of the Dragon', completed: false },
	]
	return (
		<ThemeProvider theme={theme}>
			<StyledApp>
				<Header />
				<Body>
					<TodoCounter quantyTask={todos.length} />
					<TodoSearch />

					<TodoList>
						{todos.map((todo, index) => (
							<TodoItem
								key={index}
								text={todo.text}
								completed={todo.completed}
							/>
						))}
					</TodoList>

					<Button>Create Todo</Button>
				</Body>
			</StyledApp>
		</ThemeProvider>
	)
}

export default App
