import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';
import { submit } from 'redux-form';
import { withRouter } from 'react-router-dom';

const SurveyFormReview = (props) => {
    const renderFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>{props.formValues[name]}</div>
            </div>
        );
    });
    console.log(props.history)

    return (
        <div>
            <h5>Please confirm your entries</h5>
            {renderFields}
            <button className="btn-flat yellow white-text darken-3"
            onClick={props.onCancel}
            >
            Cancel
            </button>
            <button 
            className="green btn-flat right white-text"
            onClick={() => props.submitSurvey(props.formValues, props.history)}
            >Send Survey
            <i className="material-icons right">email</i>
            </button>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));