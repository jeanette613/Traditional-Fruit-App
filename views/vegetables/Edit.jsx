const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Edit extends React.Component {
    render() {
        const { vegetable } = this.props
        return (
            <DefaultLayout>
                <form action={`/vegetables/${vegetable._id}?_method=PUT`} method="post">
                    <fieldset>
                        <legend>Edit {vegetable.name}</legend>
                        <label>
                            NAME:<input
                                type="text"
                                name="name"
                                placeholder="enter vegetable name"
                                defaultValue={vegetable.name}
                            />
                        </label>
                        <label>
                            COLOR:<input
                                type="text"
                                name="color"
                                placeholder="enter vegetable name"
                                defaultValue={vegetable.color}
                            />
                        </label>
                        <label>
                            READY TO EAT:{this.props.vegetable.readyToEat ? <input type="checkbox" name="readyToEat" defaultChecked /> : <input type="checkbox" name="readyToEat" />}
                        </label>
                    </fieldset>
                    <input type="submit" value={`Edit ${vegetable.name}`} />
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit;