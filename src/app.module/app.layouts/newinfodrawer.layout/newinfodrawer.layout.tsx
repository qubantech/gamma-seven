import { DrawerLayout } from '../drawer.layout/drawer.layout';
import { Alert, AlertTitle, Autocomplete, Button, IconButton, Stack, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import facilities from '../../../modules/map.module/components/facilities.json';
import React, { Component } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from 'react';
import { PRIMARY_COLOR } from '../../../index';
import { ComplaintsModel } from '../../app.services/app.complaints.service/models/complaints.model';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../app.configs';
import { useUser } from '../../app.services/app.user.service';
import { appComplaintsService } from '../../app.services/app.complaints.service';
//@ts-ignore
import {ReactComponent as IconSVG} from "./icon.svg"

type newReportInterface = {
    theme: string
    institutionID: number,
    tags: string[],
    text: string,
    userID: string,
}

const NewinfoDrawer = ({isOpen, onChangeState, uid, height = "auto"}:
                              {isOpen: boolean, onChangeState: (b:boolean) => void, uid: string, height?: string}) => {
    const newReportInit:newReportInterface = {
        theme: "",
        institutionID: 0,
        tags: new Array<string>(),
        text: "",
        userID: ""
    }
    const [ user, loading, error ] = useAuthState(auth);
    const userdata = useUser(user?.uid || "0")
    const [formData, setFormData] = useState<newReportInterface>(newReportInit)
    const [complete, setComplete] = useState(false)

    const submit = () => {
        console.log(formData.tags)
        let complaint:ComplaintsModel = {
                id: (Math.floor(Math.random() *10000)).toString(),
                status: "string",
                dateSent: 0,
                dateResponded: 0,
                userId: user?.uid || "0",
                theme: formData.theme,
                text: formData.text,
                tags: formData.tags,
                keywords: [],
                institutionId: 0,
                response: "string",
                score: 0
        }
        setComplete(true)
        appComplaintsService.createComplaint(complaint)
            .then((resp) => {
                console.log(resp)
            })
        setTimeout(exit, 1500)
    }

    const exit = () => {
        setComplete(false)
        onChangeState(false)
    }

    const handleChange = (event:any) => {
        console.log(event)
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
        console.log(formData)
    }

    const handleChangeAutoComplete1 = (event:any, value:any) => {
        setFormData({...formData, tags: value.map((item: { title: any; }) => item.title)})
        console.log(formData)
    }

    const handleChangeAutoComplete2 = (event:any, value:any) => {
        console.log(value)
        setFormData({...formData, institutionID: Number(value.id)})
        console.log(formData)
    }


    const lists = [{title:"????????????", value:"????????????"}, {title:"???????????? ???? ????", value:"???????????? ???? ????"}, {title:"????????????????", value:"????????????????"}, {title:"????????????", value:"????????????"}]
    return (
        <DrawerLayout
            isOpen={isOpen}
            onChangeState={onChangeState}
            height={height && height || "auto"}
            children={
                 <Stack spacing={2}>
                     {!complete &&
                         <>
                             <Stack alignItems={"center"} pt={"10px"}>
                            <IconSVG fill={"#0e73e8"}/>
                             </Stack>
                         <TextField id="Title" name={"theme"} label="????????" variant="standard" onChange={handleChange}
                                    style={{ marginTop: '1.1em' }} />
                         <Stack direction={"row"} spacing={2} alignItems={"center"} justifyContent={"space-between"}>
                         <Autocomplete
                         sx={{width: "100%"}}
                         options={facilities.features}
                         defaultValue={null}
                         getOptionLabel={(option) => option.properties.title}
                         renderInput={(params) =>
                         <TextField
                     {...params}
                         variant="standard"
                         label="????????????????"
                         placeholder="???????????????? ????????????????"
                         />
                     }
                         onChange={handleChangeAutoComplete2}
                         />
                         <IconButton color={"primary"} sx={{marginTop: "20px", marginBottom: "20px", borderRadius: "100%", border: `1px solid ${PRIMARY_COLOR}`}}>
                         <LocationOnIcon fontSize={"large"}/>
                         </IconButton>
                         </Stack>
                         <Autocomplete
                         multiple
                         id="tags-standard"
                         options={lists}
                         getOptionLabel={(option) => option.title}
                         defaultValue={[lists[0]]}
                         onChange={handleChangeAutoComplete1}
                         renderInput={(params) => (
                         <TextField
                     {...params}
                         variant="standard"
                         label="??????????????????"
                         placeholder="?????? ????????..."
                         />
                         )}
                         />
                         <Stack spacing={0} alignItems={"center"} style={{marginTop: '1.2em'}}>
                         <Button fullWidth variant="outlined" component="span">
                         ?????????????????? ????????????????
                         </Button>
                         <Typography variant={"caption"} style={{marginTop: '0.5em'}}>5 ???????????????? ???????????????? ???? 10????</Typography>
                         </Stack>
                         <TextField
                         id="description"
                         label="???????????????? ????????????????"
                         multiline
                         name={"text"}
                         onChange={handleChange}
                         rows={10}
                         variant="standard"
                         />
                         <Button variant={"contained"} onClick={() => submit()} style={{marginBottom: '1.1em'}} >
                         ?????????????????? ????????????
                         </Button>
                         </>
                     || <Alert severity="success">
                             <AlertTitle>??????????????</AlertTitle>
                             ???????????? ?????????????? ????????????????????, ??????????????!</Alert>}
                </Stack>}
        />
    )
}
export default NewinfoDrawer