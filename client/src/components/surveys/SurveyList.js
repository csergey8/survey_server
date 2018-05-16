import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';


class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
        
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div className="card blue-grey darken-1" key={survey.id}>
                    <div className="card-content">
                        <span className="card-title white-text">{survey.title}</span>
                        <p className="white-text">{survey.body}</p>
                        <p className="right">Send On: {survey.dateSent ? new Date(survey.dateSent).toLocaleDateString() : `no answer` }</p>
                    </div>
                    <div className="card-action">
                        <a>Yes: {survey.yes}</a>
                        <a>No: {survey.no}</a>
                    </div>
                </div>
            );
        });
    }
    render() {
        return (
            <div>
                {this.renderSurveys()}
            </div>
        );
    }
} 

function mapStateToProps({ surveys }) {
    return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
