this.props.session.status === sessionActions.Status.FETCHED && this.props.session.session.user ? React.createElement('div', {className: 'right-column'},
    React.createElement(Activity, { key: 'activity', items: this.state.activity }),
    React.createElement(News, { items: this.state.news, messages: messages })
) : []
