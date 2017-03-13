React.createElement('div', {id: 'userbar', className: 'header-bar'},
    React.createElement('p', null,
        this.props.session.session.user ? [
                'Welcome, ',
                React.createElement('a', {href: this.getProfileUrl()},
                    this.props.session.session.user.username
                ),
                ' | ',
                React.createElement('a', {href: '#', onClick: this.handleLogOut},
                    React.createElement(FormattedMessage, {id: 'navigation.signOut'})
                )
        ] : [
            React.createElement('a', {href: '#', onClick: this.handleLoginClick},
                React.createElement(FormattedMessage, {id: 'general.signIn'})
            ),
            ' or ',
            React.createElement('a', {href: '#', onClick: this.handleJoinClick},
                React.createElement(FormattedMessage, {id: 'general.joinScratch'})
            ),
            React.createElement(Registration, {
                key: 'registration',
                isOpen: this.state.registrationOpen,
                onRequestClose: this.closeRegistration,
                onRegistrationDone: this.completeRegistration }),
            ' for an account'
        ]
    )
),
React.createElement('div', {id: 'searchbar', className: 'header-bar'},
    React.createElement(
        Form,
        { onSubmit: this.onSearchSubmit },
        React.createElement(Input, { type: 'text',
            value: this.props.searchTerm,
            'aria-label': formatMessage({ id: 'general.search' }),
            name: 'q' }),
        React.createElement(Button, { type: 'submit',
          className: 'btn-search' },
          formatMessage({ id: 'general.search' }))
    )
)
