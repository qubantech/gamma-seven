import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../app.configs";
import React, { useEffect, useState } from 'react';
import { useUser } from '../../app.services/app.user.service';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export const LoginLayout = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate()

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const login = () => {
        signInWithEmailAndPassword(email, password)
        console.log(user)
        navigate('/')
    };

    const loginManager = () => {
        signInWithEmailAndPassword("mmail@mail.ru", "manager")
        navigate('/')
    }

    const loginUser = () => {
        signInWithEmailAndPassword("mail@mail.ru", "123456")
        navigate('/')
    }

    return (
        <div>
            <h3> Login </h3>
            <input
                placeholder="Email..."
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
            />
            <input
                placeholder="Password..."
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
            />

            <button onClick={login}> Login</button>
            <Button onClick={loginManager}>Login as Manager</Button>
            <Button onClick={loginUser}>Login as User</Button>
            {error?.message}
        </div>
    );
}
