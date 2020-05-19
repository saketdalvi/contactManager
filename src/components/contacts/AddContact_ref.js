import React, { Component } from 'react'

export default class AddContacts extends Component {
    constructor(props) {
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }
    onSubmit = e => {
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value
        }
        console.log(contact)
    }

    static defaultProps = {
        name: "Wayne Rooney",
        email: "wayne@gmail.com",
        phone: '1010101010'

    }

    render() {
        const { name, email, phone } = this.props
        return (
            <div>
                <div className="card card-body mb-3">
                    <div className="card-header">   Add Contact  </div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name"> Name</label>
                                <input type="text" className="form-control form-control-lg"
                                    placeholder="Enter Name"
                                    name="name"
                                    defaultValue={name}
                                    ref={this.nameInput}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email"> Email</label>
                                <input type="email" className="form-control form-control-lg"
                                    placeholder="Enter Email"
                                    name="email"
                                    defaultValue={email}
                                    ref={this.emailInput}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone"> Phone</label>
                                <input type="text" className="form-control form-control-lg"
                                    placeholder="Enter Phone"
                                    name="phone"
                                    defaultValue={phone}
                                    ref={this.phoneInput}
                                />
                            </div>
                            <input type="submit" className="btn btn-light btn-block" value="Add Contact" />

                        </form>
                    </div>



                </div>
            </div>
        )
    }
}
