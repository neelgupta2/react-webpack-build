import React from 'react'
import Task from './Task.jsx'

class List extends React.Component {
	render () {
		return (
			<div>
				<p>Inside List Component</p>
				<Task />
			</div>
		)
	}
}

module.exports = List