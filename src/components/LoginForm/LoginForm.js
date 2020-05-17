import React, { useState, useContext } from 'react';
// If the component that needs to acces router props is not direct child
// of the Route component, then you need to import and define useHistory.
// After that you can access history so you can programatically go to the
// desired route.
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import {
    Form,
    FormAdditionalLink,
    FormGeneralError,
    FormRow,
    FormButtonRow,
    FormLabel,
    FormInput,
    FormSubmitSuccess,
    FormButton,
} from '../../lib/styles/FormStyles';

import { loginUser } from '../../api/login';
import AuthContext from '../../context/AuthContext';

const LoginForm = (props) => {
    const history = useHistory();
    const { login } = useContext(AuthContext);

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        const response = await loginUser({ username: data.username, password: data.password });
        if (response.token) {
            localStorage.setItem('token', response.token);
            login();
            history.replace('/');
        }
    };

    const loginForm = (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow>
                <FormAdditionalLink to="/register">
                    You don't have an account? Click here to register!
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
                    })}
                    type="text"
                    id="username"
                    name="username"
                    required
                />
                {errors.username?.message}
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput
                    ref={register({
                        required: {
                            value: true,
                            message: 'Password is required',
                        },
                    })}
                    type="password"
                    id="password"
                    name="password"
                    required
                />
                {errors.password?.message}
            </FormRow>
            <FormButtonRow>
                <FormButton>Login</FormButton>
            </FormButtonRow>
        </Form>
    );

    return <>{loginForm}</>;
};

export default LoginForm;
