import {
    Button,
    ButtonGroup,
    Chip,
    Dialog,
    DialogActions,
    DialogContent, Divider,
    FormControl,
    Grid, InputLabel, MenuItem, Select, SelectChangeEvent,
    Stack,
    TextField,
} from '@mui/material';
import DialogContentText from '@mui/material/DialogContentText';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

const ManagermodalLayout = ({isOpen, onChangeState, info}:
                                {isOpen: boolean, onChangeState: (b:boolean) => void, info: any}) => {
    const chips = [
        "one", "two two", "three three three", "four four four four"
    ]
    const text = ["bjhuucdhyid yu ytr y drr t78y dr y  ytr u r 56456jkkjh u   tffytg gu h yytghjgt  ui  gy 3w467y fde4 5 7yuhfd e456 yure4r ty fdre tu decy 7trd cft6 7r5dtyui d e rfty ytr 6ty ui 6yr567uij  tyu ft tu ufy"]
    const [chipsActive, setChipsActive] = useState<Array<boolean>>()
    const [textValue, setTextValue] = useState("")
    const [dep, setDep] = useState('');

    const patterns = [
        "Здравствуйте!\nПо Вашему обращению #... проведена проверка и применено дисциплинарное наказание к указанному сотруднику. Мы сделаем все возможное, чтобы такое недоразумение не повторилось вновь.\n\nСпасибо за обращение! Вы помогаете нам стать лучше. \n\nВаш оператор"
    ]

    const setPattern = (id:number) => {
        switch (id) {
            case 0:
                console.log(patterns[0])
                setTextValue(patterns[0])
        }

    }

    useEffect(() => {
        setChipsActive(new Array(chips.length).fill(false));
    },[])

    return(
        <Dialog
            open={isOpen}
            onClose={() => onChangeState(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth={"xl"}
        >
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Typography sx={{marginBottom:"20px"}} align={"center"} variant={"h4"}>Запрос</Typography>
                        <Stack spacing={1}>
                            <Typography variant={"caption"}>Теги</Typography>
                            <Grid direction={"row"}>
                                {chips.map((el, index) => {
                                    return(
                                        <Chip sx={{marginBottom:"5px", marginRight: "5px", fontSize:"16px"}}
                                              label={el}/>
                                    )
                                })}
                            </Grid>
                            <Typography variant={"caption"}>Ключевые слова (выберите наиболее подходящие)</Typography>
                            <Grid direction={"row"}>
                                {chips.map((el, index) => {
                                    return(
                                        <Chip color={(chipsActive && chipsActive[index]) && "primary" || "default"}
                                              onClick={() => {
                                                  console.log("here")
                                                  if (chipsActive) {
                                                      let newArr = [...chipsActive]
                                                      newArr[index] = !newArr[index]
                                                      setChipsActive(newArr)
                                                      console.log(newArr)
                                                  }
                                              }}
                                              sx={{marginBottom:"5px", marginRight: "5px", fontSize:"16px"}}
                                              label={el}/>
                                    )
                                })}
                            </Grid>
                            <Typography variant={"caption"}>Текст обращения</Typography>
                            <Typography variant={"body1"}>
                                {text}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography sx={{marginBottom:"20px"}} align={"center"} variant={"h4"}>Тема жалобы тема жалобы(#12345)</Typography>
                        <Stack spacing={1}>
                            <Grid direction={"row"}>
                                <ButtonGroup variant="contained">
                                    <Button onClick={()=> setPattern(0)}>Жалоба</Button>
                                    <Button>Жалоба на ПЗ</Button>
                                    <Button>Ожидание</Button>
                                    <Button>Качество обслуживания</Button>
                                    <Button>Служебная записка</Button>
                                    <Button>Запрос на уточнение</Button>
                                    <Button>Другое</Button>
                                </ButtonGroup>
                            </Grid>
                            <Stack direction={"row"} spacing={1}>

                            </Stack>
                            <TextField
                                id="standard-multiline-static"
                                label="Ответ"
                                value={textValue}
                                onChange={(n)=> {setTextValue(n.target.value)}}
                                multiline
                                rows={10}
                                placeholder={"Текст жалобы или выберите шаблон из представленных выше"}
                                variant="standard"
                            />
                            <Stack justifyContent={"flex-end"} direction={"row"} spacing={1}>
                                <FormControl fullWidth >
                                    <InputLabel id="demo-simple-select-label">Пересылка обращения</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={dep}
                                        label="Не требуется"
                                        onChange={(event: SelectChangeEvent) => {
                                            setDep(event.target.value as string);
                                        }}
                                    >
                                        <MenuItem value={1}>Администрация</MenuItem>
                                        <MenuItem value={2}>Росздравнадзор</MenuItem>
                                        <MenuItem value={3}>Роспотребнадзор</MenuItem>
                                        <MenuItem value={4}>Министерство здравохранения</MenuItem>
                                    </Select>
                                </FormControl>
                                <Button variant="contained" color="error">
                                    Некорректное обращение
                                </Button>
                                <Button variant="contained" color="success">Завершить обработку</Button>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}
export default ManagermodalLayout