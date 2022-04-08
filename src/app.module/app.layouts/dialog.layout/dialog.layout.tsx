import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DialogLayout = ({isOpen, onClose, title, text, buttons}:
                         { isOpen:boolean, onClose?: (b:boolean) => void, title: string, text: JSX.Element, buttons: Array<JSX.Element>}) => {
    return (
        <Dialog
            open={isOpen}
            onClose={onClose &&( () => onClose)}
        >
            <DialogTitle>
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {text}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {
                    buttons.map((el, key) => {
                        return (
                            <div key={key}>
                            {el}
                            </div>
                        )
                    })
                }
            </DialogActions>
        </Dialog>
    )

}
export default DialogLayout
