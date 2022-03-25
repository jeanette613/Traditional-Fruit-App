const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Index extends React.Component {
    render() {
        const { vegetables } = this.props;
        return (
            <DefaultLayout>
                <a href="/vegetables/new"><button>Create A New Vegetable</button></a>
                <div>
                    {
                        vegetables.map((vegetable) => (
                            <article>
                                <a href={`/vegetables/${vegetable._id}`}>
                                    <h2>
                                        {vegetable.name} - {vegetable.readyToEat ? 'Ripe' : 'Pass'}
                                    </h2>
                                </a>
                            </article>
                        ))
                    }
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index;