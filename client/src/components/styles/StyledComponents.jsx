import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";
import { grayColor, lightOrange, orange } from "../../constants/color";
export const VisuallyHiddenInput = styled("input")({
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: 1,
})


export const Link = styled(LinkComponent)`
    text-decoration: none;
    color: black;
    &:hover {
        text-decoration: none;
        background-color: rgba(0,0,0,0.1);
    }
`

export const InputBox = styled('input')`
    width: 100%;
    border: none;
    height: 100%;
    outline: none;
    padding: 0 3rem;
    border-radius: 1.5rem;
    background-color: ${grayColor};
`


export const SearchField = styled('input')`
    padding: 1rem 2rem;
    width : 20vmax;
    border: none;
    outline: none;
    border-radius: 1.5rem;
    background-color: ${grayColor};
    font-size: 1.1rem;
`

export const CurvedButton = styled('button')`
    padding: 0.75rem 1.5rem;
    color: ${orange};
    border: none;
    outline: none;
    border-radius: 1.5rem;
    background-color: white;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
        background-color: ${lightOrange};
    }
`