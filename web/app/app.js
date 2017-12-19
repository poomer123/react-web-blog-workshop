import React from 'react'
import Header from 'header/header'
import css from './app.module.scss'

class App extends React.Component {
	render() {
		return (
			<div className={css.container}>
				<Header />
				<div className={css.content}>
					The content 2
				</div>
			</div>
		)
	}
}

export default App