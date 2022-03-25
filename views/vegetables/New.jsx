const React = require('react');
const DefaultLayout = require('../Default.jsx');

class New extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <form action="/vegetables" method="post">
                    <fieldset>
                        <legend>Create a New Vegetable</legend>
                        <label>
                            NAME:<input type="text" name="name" placeholder="enter vegetable name" />
                        </label>
                        <label>
                            COLOR:<input type="text" name="color" placeholder="enter vegetable name" />
                        </label>
                        <label> READY TO EAT:<input type="checkbox" name="readyToEat" /> </label>
                    </fieldset>
                    <input type="submit" value="create New vegetable" />
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New