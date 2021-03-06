import React, { useState } from 'react';
import { Button, Checkbox, Container, FormControlLabel, FormGroup, TextField } from '@mui/material';
import { appAuditService } from '../../../app.module/app.services/app.audit.service';

const GetReportDrawerContent = (props: {id: string}) => {
    const [checked, setChecked] = useState(false);
    const [email, setEmail] = useState("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const onClick = () => {
        appAuditService.getReportPDFAndSendToEmail(props.id,
            email)
            .then(result => {
                console.log(result)
            })
            .catch(error => console.log(error));

        window.open(`https://audit.quban.tech/report/pdf/${props.id}`)
    }

    return (
        <Container sx={{ minHeight: "10vh" }}>
            <FormGroup sx={{ mt: "20px" }}>
                <FormControlLabel control={
                    <Checkbox

                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                } label="Отправить на почту" />
            </FormGroup>

            {
                checked &&
                <>
                    <TextField type={"email"} fullWidth sx={{ }}label="E-mail" variant="standard" placeholder={ "example@example.com" } onChange={ onEmailChange }/>
                    <Button variant={ "outlined" } fullWidth onClick={ onClick } sx={{ mt: "40px" }}>Скачать и отправить</Button>
                </>
                || <Button variant={ "outlined" } fullWidth onClick={ onClick }>Скачать</Button>
            }
        </Container>
    );
};

export default GetReportDrawerContent;