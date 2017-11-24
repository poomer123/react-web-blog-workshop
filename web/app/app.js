import React from 'react'
import Header from '../header/header'

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Header />
				<div className="content">
					The content
				</div>
			</div>
		)
	}
}

export default App