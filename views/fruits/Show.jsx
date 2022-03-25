const React = require('react');
const DefaultLayout = require('../Default.jsx');
class Show extends React.Component {
    render() {
        const fruit = this.props.fruit
        return (
            <DefaultLayout>
                <div>
                    <h1>{fruit.name}</h1>
                    <a href='/fruits/new'>Return to Main</a>
                    <h2 style={{ color: fruit.color }}>{fruit.color}</h2>
                    <a href={`/fruits/${fruit._id}/edit`}><button>Edit</button></a>
                    <form action={`/fruits/${fruit._id}?_method=DELETE`} method='POST'>
                        <input type='submit' value='Delete' />
                    </form>
                    {
                        fruit.readyToEat ?
                            <h1>fruit is ready to eat</h1>
                            :
                            <h1>fruit is not ready to eat</h1>
                    }
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = Show;