import React, { Component } from 'react';
import BoardService from '../service/BoardService';

class SendEmailComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {

            emal : this.props.match.params.emal,
            title : '',
            content : '',

        }

        this.changeAdressHandler = this.changeAdressHandler.bind(this);
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeContentHandler = this.changeContentHandler.bind(this);

        this.sendEmail = this.sendEmail.bind(this);
    }


    changeAdressHandler = (event) => {
        this.setState({ emal : event.target.value});
    }

    changeTitleHandler = (event) => {
        this.setState({ title : event.target.value});
    }


    changeContentHandler = (event) => {
        this.setState({content: event.target.value});
    }



    sendEmail = (event) => {
        event.preventDefault();
        let email = {
                    emal: this.state.emal,
                    title: this.state.title,
                    content: this.state.content,
    
        };

        console.log("email => "+ JSON.stringify(email));
        console.log("쏴짐?");
        BoardService.sendEmail(email).then(res => {
            this.props.history.push('/student');
        });

    }

    cancel() {
        this.props.history.push('/student');
    }

    

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center"> 메일 작성 </h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> 이메일 주소 </label>
                                        <input type="text" placeholder="adress" name="adress" className="form-control"
                                        value={this.state.emal} onChange={this.changeAdressHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> 제목 </label>
                                        <input type="text" placeholder="title" name="title" className="form-control"
                                               value={this.state.title} onChange={this.changeTitleHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> 내용 </label>
                                        <textarea placeholder="content" name="content" className="form-control" 
                                        value={this.state.content} onChange={this.changeContentHandler}/>
                                    </div>                    

                                    <button className="btn btn-success" onClick={this.sendEmail}> Send </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default SendEmailComponent;