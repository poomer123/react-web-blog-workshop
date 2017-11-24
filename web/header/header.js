import React from 'react'
import css from './header.module.scss'

class Header extends React.Component {
	render() {
		return (
			<div className={css.container}>
				<div className={css.pugHeading}> Pug Clug Blog </div>
			</div>
		)
	}
}

export default Header

