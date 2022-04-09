import { DrawerLayout } from '../drawer.layout/drawer.layout';
import { Autocomplete, Button, Chip, Stack, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';


const NewinfoDrawer = ({isOpen, onChangeState, uid, height = "auto"}:
                              {isOpen: boolean, onChangeState: (b:boolean) => void, uid: string, height?: string}) => {

    const lists = [{title:"type1", value:1}, {title:"type2", value:2}]
    return (
        <DrawerLayout
            isOpen={isOpen}
            onChangeState={onChangeState}
            height={height && height || "auto"}
            children={
                <Stack spacing={2}>
                    <TextField id="Title" label="Тема" variant="standard" />
                    <Autocomplete
                        multiple
                        id="tags-standard"
                        options={lists}
                        getOptionLabel={(option) => option.title}
                        defaultValue={[lists[0]]}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                label="Категории"
                                placeholder="еще теги..."
                            />
                        )}
                    />
                    <Stack spacing={0} alignItems={"center"}>
                        <Button fullWidth variant="contained" component="span">
                            Загрузить вложения
                        </Button>
                        <Typography variant={"subtitle2"}>5 вложений размеров до 10Мб</Typography>
                    </Stack>
                    <Typography variant={"h5"}>Название</Typography>
                    <Typography variant={"h6"}>Учреждение</Typography>
                    <Stack py={"10px"} direction={"row"} alignItems={"flex-end"} spacing={1}>
                        <Chip label="tag1" color="default" />
                        <Chip label="tag2" color="default" />
                    </Stack>
                    <Typography variant={"body1"}>
                        Text idfu c uifdhmj ydgchvv jkhjdnbyhjyhyk jnjh hky hb gh dgfhjg fi uly ty uyh u c gr hdghj hgf hj yf hot fyhj
                    </Typography>
                </Stack>}
        />
    )
}
export default NewinfoDrawer