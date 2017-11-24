import React from 'react'
import css from './header.scss'

class Header extends React.Component {
	render() {
		return (
			<div className="{css.container}">
				<div className="{css.pugheading"> Pug Clug Blog </div>
			</div>
		)
	}
}

export default Header

