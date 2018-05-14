import React, { Component } from 'react';
import { reduxForm, Field, values } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import _ from 'lodash';
import FIELDS from './formFields';



class SurveyForm extends Component {
    renderFields() {
         return _.map(FIELDS, field => {
             return <Field component={SurveyField} type="text" label={field.label} name={field.name} key={field.name}/>
         })
    }



    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
                    <button type="submit" className="teal btn-flat right white-text">
                    Next
                    <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');

    _.each(FIELDS, ({ name })=> {
        if(!values[name]) {
            errors[name] = `You must povide a ${name}`;
        }
    });

   

    return errors;
}

export default  reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);