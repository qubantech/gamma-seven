import { IconButton, Snackbar } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


export function SnackbarLayout({
    isOpen,
    onChangeState,
    action,
    message
}: {
    isOpen: boolean,
    onChangeState: (b: boolean) => void,
    action?: JSX.Element,
    message: string
}) {

    const defaultAction = (
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={() => onChangeState(false)}
        >
            <CloseIcon fontSize="small"/>
        </IconButton>
    )

    return (
        <Snackbar
            open={isOpen}
            autoHideDuration={6000}
            onClose={() => onChangeState(false)}
            message={message}
            action={action &&( action || defaultAction)}
        />
    )

}