window.scratch14Messages = {
    'general.home': 'Home',
    'general.discuss': 'Forums',
    'general.studios': 'Galleries',
    'general.help': 'Support',
    'general.signIn': 'Login',
    'general.signIn2': 'Log In',
    'general.joinScratch': 'Signup',
    'navigation.signOut': 'Logout',
    'login.needHelp': 'Did you forget?',
    'splash.featuredStudios': 'Featured Galleries',
    'splash.projectsCuratedBy': 'Projects Selected by ',
    'splash.recentlySharedProjects': 'Newest Projects',
    'splash.projectsByScratchersFollowing': "My Friends' Latest Projects",
    'splash.projectsLovedByScratchersFollowing': 'Projects Loved by My Friends',
    'splash.projectsInStudiosFollowing': "Projects in Galleries I'm Following"
};
window.eval = function (script) {
    var args = arguments.callee.caller.arguments;

    var files = {
        intl: {
            pattern: '//# sourceURL=webpack:///./~/react-intl/lib/index.js?',
            handler: function (script) {
                script = script.replace(
                    'return message || defaultMessage || id;',
                    'return (locale === "en" ? window.scratch14Messages[id] : null) || message || window.scratch14Messages[id] || defaultMessage || id;'
                );
                return script;
            }
        },
        navigation: {
            pattern: '//# sourceURL=webpack:///./src/components/navigation/www/navigation.jsx?',
            handler: function (script) {
                // Inject new navbar and comment out the old one
                script = script.replace(
                    /React\.createElement\(\s+'ul',/,
                    $$navigation$$ + ', /* $&'
                );
                script = script.replace(
                    /React\.createElement\(\s+Modal,/,
                    '*/ $&'
                );
                return script;
            }
        },
        login: {
            pattern: '//# sourceURL=webpack:///./src/components/login/login.jsx?',
            handler: function (script) {
                script = script.replace(
                    "'general.signIn'",
                    "'general.signIn2'"
                );
                return script;
            }
        },
        footer: {
            pattern: '//# sourceURL=webpack:///./src/components/footer/www/footer.jsx?',
            handler: function (script) {
                window.languageChooserId = +script.match(/var LanguageChooser = __webpack_require__\((\d+)\);/)[1];
                script = script.replace(
                    'React.createElement(LanguageChooser, { locale: this.props.intl.locale }),',
                    ''
                );
                return script;
            }
        },
        splash: {
            pattern: '//# sourceURL=webpack:///./src/views/splash/splash.jsx?',
            handler: function (script) {
                // Comment out splash header
                script = script.replace(
                    'this.props.session.status === sessionActions.Status.FETCHED',
                    '/* $&'
                );
                script = script.replace(
                    'featured,',
                    '*/ $&'
                );
                // Fix project carousel scrolling
                script = script.replace(
                    /React\.createElement\(Carousel, { /g,
                    '$&settings: { slidesToShow: 3, slidesToScroll: 3 }, '
                );
                // Fix studio carousel scrolling
                script = script.replace(
                    'slidesToShow: 4, slidesToScroll: 4',
                    'slidesToShow: 1, slidesToScroll: 2'
                );
                // Inject right column
                script = script.replace(
                    "{ className: 'splash' },",
                    '$&\n' + $$right_column$$ + ',\n'
                );
                return script;
            }
        },
        explore: {
            pattern: '//# sourceURL=webpack:///./src/views/explore/explore.jsx?',
            handler: function (script) {
                script = script.replace(
                    "React.createElement(FormattedMessage, { id: 'general.explore' })",
                    "$&, ' ', " + $$explore_header$$
                );
                return script;
            }
        },
        grid: {
            pattern: '//# sourceURL=webpack:///./src/components/grid/grid.jsx?',
            handler: function (script) {
                script = script.replace(
                    /return React\.createElement\(\s+'div',/,
                    $$explore_list$$ + ';\n$&'
                );
                return script;
            }
        }
    };

    for (var file in files) {
        if (files.hasOwnProperty(file)) {
            var pattern = files[file].pattern;
            var handler = files[file].handler;
            if (script.endsWith(pattern)) {
                script = handler(script);
                break;
            }
        }
    }

    var func = new Function(
        'module', 'exports', '__webpack_require__',
        'var eval = window.pureEval;eval(' + JSON.stringify(script) + ');'
    );
    func.apply(null, args);
};
