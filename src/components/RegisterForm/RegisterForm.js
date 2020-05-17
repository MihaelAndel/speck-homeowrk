import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import {
    Form,
    FormAdditionalLink,
    FormRow,
    FormButtonRow,
    FormLabel,
    FormInput,
    FormInputValidation,
    FormSubmitSuccess,
    FormButton,
} from '../../lib/styles/FormStyles';

import { registerUser } from '../../api/register';

const RegisterForm = (props) => {
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = async (data) => {
        const response = await registerUser({
            username: data.username,
            password: data.password,
        });

        if (response.username) {
            history.replace('/login');
        }
    };

    const registerForm = (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow>
                <FormAdditionalLink to="/login">
                    Already registered? Click here to login!
                </FormAdditionalLink>
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="username">Username</FormLabel>
                <FormInput
                    ref={register({
                        required: {
                            value: true,
                            message: 'Username is required',
                        },
                        minLength: {
                            value: 5,
                            message: 'Username should be at least 5 characters long',
                        },
                    })}
                    type="text"
                    id="username"
                    name="username"
                    required
                />
                <FormInputValidation>{errors.username?.message}</FormInputValidation>
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput
                    ref={register({
                        required: {
                            value: true,
                            message: 'Password is required',
                        },
                        minLength: {
                            value: 8,
                            message: 'Password should be at least 8 characters long',
                        },
                    })}
                    type="password"
                    id="password"
                    name="password"
                    required
                />
                <FormInputValidation>{errors.password?.message}</FormInputValidation>
            </FormRow>
            <FormButtonRow>
                <FormButton>Register</FormButton>
            </FormButtonRow>
        </Form>
    );

    return <>{registerForm}</>;
};

export default RegisterForm;
