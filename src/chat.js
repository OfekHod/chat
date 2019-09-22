class Message extends React.Component {
	render() {
		return(
			<button className="message">
			{this.props.message}
			</button>
		)
	}
}