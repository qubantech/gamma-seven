import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../app.configs";
import React, { useEffect, useState } from 'react';
import { useUser } from '../../app.services/app.user.service';
import { useNavigate } from 'react-router-dom';
import { Button, TextField,Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

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
            <Typography sx={{paddingTop:"25%", paddingBottom:"30px"}} align={"center"} variant={"h4"}> Login </Typography>
            <Stack>
            <TextField
                sx={{paddingX:"20px", paddingBottom:"20px"}}
                variant="standard"
                placeholder="Email..."
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
            />
            <TextField
                sx={{paddingX:"20px", paddingBottom:"50px"}}
                variant="standard"
                placeholder="Password..."
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
            />
            </Stack>
            <Stack>
                <Button sx={{marginX:"20px", marginBottom:"20px"}} variant={"contained"} onClick={login}> Login</Button>
                <Button sx={{marginX:"20px", marginBottom:"10px"}} onClick={loginManager}>Login as Manager</Button>
                <Button sx={{marginX:"20px", marginBottom:"20px"}} onClick={loginUser}>Login as User</Button>
            </Stack>
            <Typography sx={{marginX:"20px", marginBottom:"20px"}} variant={"h6"}>
                {error?.message}
            </Typography>
        </div>
    );
}
