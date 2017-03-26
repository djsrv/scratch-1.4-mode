var ExploreListItem = React.createClass({
    render: function render () {
        var info = [];
        if (this.props.type === 'project') {
            info.push(React.createElement('p', null,
                React.createElement('strong', null, 'By:'), ' ',
                React.createElement('a', { href: '/users/' + this.props.creator + '/' },
                    this.props.creator
                )
            ));
            info.push(React.createElement('p', null,
                React.createElement('strong', null, 'Views:'), ' ',
                this.props.views,
                ' | ',
                React.createElement('strong', null, "LoveIt's:"), ' ',
                this.props.loves
            ));
        } else {
            info.push(React.createElement('p', null,
                React.createElement('strong', null, 'Created:'), ' ',
                moment(this.props.created).fromNow()
            ));
        }
        info.push(React.createElement('p', { className: 'description' },
            React.createElement('strong', null, 'Description:'), ' ',
            this.props.description
        ));
        if (this.props.type === 'studio') {
            info.push(React.createElement('p', null,
                React.createElement('strong', null, 'Number of Followers:'), ' ',
                this.props.followers
            ));
        }
        return React.createElement('div', { className: 'explore-list-item' },
            React.createElement('div', { className: 'left' },
                React.createElement('a', { className: 'thumbnail', href: this.props.href },
                    React.createElement('img', {
                        src: this.props.image,
                        width: 148,
                        height: 111
                    })
                )
            ),
            React.createElement('div', { className: 'right' },
                React.createElement('h3', null,
                    React.createElement('a', { href: this.props.href },
                        this.props.title
                    )
                ),
                info
            )
        );
    }
});
return React.createElement(
    'div',
    { className: 'explore-list' },
    this.props.items.map(function (item, key) {
        var href = '/' + this.props.itemType + '/' + item.id + '/';
        if (this.props.itemType === 'projects') {
            return React.createElement(ExploreListItem, {
                key: key,
                type: 'project',
                href: href,
                title: item.title,
                image: item.image,
                creator: item.author.username,
                views: item.stats.views,
                loves: item.stats.loves,
                description: item.description
            });
        } else {
            return React.createElement(ExploreListItem, {
                key: key,
                type: 'studio',
                href: href,
                title: item.title,
                image: item.image,
                created: item.history.created,
                description: item.description,
                followers: item.stats.followers
            });
        }
    }.bind(this))
);
