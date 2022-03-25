const React = require('react');
const DefaultLayout = require('../Default.jsx');
class Show extends React.Component {
    render() {
        const vegetable = this.props.vegetable
        return (
            <DefaultLayout>
                <div>
                    <h1>{vegetable.name}</h1>
                    <a href='/vegetables/new'>Return to Main</a>
                    <h2 style={{ color: vegetable.color }}>{vegetable.color}</h2>
                    <a href={`/vegetables/${vegetable._id}/edit`}><button>Edit</button></a>
                    <form action={`/vegetables/${vegetable._id}?_method=DELETE`} method='POST'>
                        <input type='submit' value='Delete' />
                    </form>
                    {
                        vegetable.readyToEat ?
                            <h1>This vegetable is ready to eat</h1>
                            :
                            <h1>This vegetable is not ready to eat</h1>
                    }
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = Show;