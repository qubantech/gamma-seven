import {Box, Card, Container, Paper, SwipeableDrawer} from "@mui/material"
import {grey, purple} from "@mui/material/colors";
import { styled } from '@mui/material/styles';

const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));

export function DrawerLayout ({isOpen, onChangeState, children, height = "auto", style={}}:
                                  {isOpen: boolean, onChangeState: (b:boolean) => void, children: JSX.Element, height?: string, style?: any}) {
    return (
        <SwipeableDrawer
            anchor={"bottom"}
            open={isOpen}
            onClose={() => onChangeState(false)}
            onOpen={() => onChangeState(true)}
            disableSwipeToOpen={true}
            style={ style }
        >
            <Puller onClick={() => onChangeState(false)}/>
            <div style={{padding:"15px", height: height}}>
            {children}
            </div>
        </SwipeableDrawer>
    );
}