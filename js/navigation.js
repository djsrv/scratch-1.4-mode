React.createElement('div', {id: 'logo'},
    React.createElement('h1', null,
        React.createElement('a', {href: '/', 'aria-label': 'Scratch'})
    ),
    React.createElement('h2', null, 'imagine • program • share')
),
React.createElement(
    'ul',
    null,
    React.createElement(
        'li',
        { className: 'link home' },
        React.createElement(
            'a',
            { href: '/' },
            React.createElement(FormattedMessage, { id: 'general.home' })
        )
    ),
    React.createElement(
        'li',
        { className: 'link create' },
        React.createElement(
            'a',
            { href: createLink },
            React.createElement(FormattedMessage, { id: 'general.create' })
        )
    ),
    React.createElement(
        'li',
        { className: 'link projects' },
        React.createElement(
            'a',
            { href: '/explore/projects/all' },
            React.createElement(FormattedMessage, { id: 'general.projects' })
        )
    ),
    React.createElement(
        'li',
        { className: 'link studios' },
        React.createElement(
            'a',
            { href: '/explore/studios/all' },
            React.createElement(FormattedMessage, { id: 'general.studios' })
        )
    ),
    React.createElement(
        'li',
        { className: 'link help' },
        React.createElement(
            'a',
            { href: '/help' },
            React.createElement(FormattedMessage, { id: 'general.help' })
        )
    ),
    React.createElement(
        'li',
        { className: 'link discuss' },
        React.createElement(
            'a',
            { href: '/discuss' },
            React.createElement(FormattedMessage, { id: 'general.discuss' })
        )
    ),
    React.createElement(
        'li',
        { className: 'link about' },
        React.createElement(
            'a',
            { href: '/about' },
            React.createElement(FormattedMessage, { id: 'general.about' })
        )
    ),
    this.props.session.session.user ? React.createElement(
        'li',
        { className: 'link my-stuff' },
        React.createElement(
            'a',
            { href: '/mystuff/' },
            React.createElement(FormattedMessage, { id: 'general.myStuff' })
        )
    ) : [],
    React.createElement(
        'li',
        { className: 'link right language' },
        React.createElement('div', { className: 'language-chooser-label' }, 'Language'),
        window.hasOwnProperty('languageChooserId') ?
            React.createElement(
                __webpack_require__(window.languageChooserId),
                { locale: this.props.intl.locale }
            ) : []
    )
),
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
),
this.state.loginOpen ? React.createElement(
    'div',
    { id: 'loginbar', className: 'announcement' },
    React.createElement(Login, {
        onLogIn: this.handleLogIn,
        error: this.state.loginError })
) : [],
this.props.session.session.user ? React.createElement('div',
    {
        id: 'messagesbar',
        className: classNames({
            'announcement': true,
            'show': this.state.unreadMessageCount > 0
        })
    },
    React.createElement('p', null,
        'You have ',
        React.createElement('a', {href: '/messages/'},
            this.state.unreadMessageCount + ' ' + (this.state.unreadMessageCount === 1 ? 'message' : 'messages')
        )
    )
) : []
