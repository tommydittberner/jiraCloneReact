import styled from "styled-components";
import {Link} from "react-router-dom";


export const MainContainer = styled.div`
    padding-left: 320px;
`;

export const TextButton = styled.button`
    padding: 0.5em 1em;
    border-radius: 8px;
    color: ${({theme}) => theme.text};
    background-color: ${({theme}) => theme.buttonBackground};
    border: 2px solid ${({theme}) => theme.buttonBackground};
    cursor: pointer;
    text-transform: capitalize;
`;

export const DialogActionButton = styled(TextButton)`
    margin: 0.25em 0.5em;
    color: ${({theme}) => theme.text};
    
    &:hover {
        border: 2px solid ${({theme}) => theme.textHighlight};
    }
`;

export const SubmitButton = styled(TextButton)`
    width: fit-content;
    font-weight: bold;
    border: 2px solid;
    color: ${({theme}) => theme.text};
    border-color: ${({theme}) => theme.textHighlight};
    background-color: ${({theme}) => theme.background};
    
    &:hover {
        background-color: ${({theme}) => theme.hover};
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
    }
    
    &:disabled {
      border-color: ${({theme}) => theme.background};
      background-color: ${({theme}) => theme.body};
    }
`;

export const FAIconButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${({theme}) => theme.iconColor};
    padding: 1em;
`;

export const ActionIconButton = styled(FAIconButton)`
     &:hover {
        color: ${({theme}) => theme.textHighlight};
        transform: scale(1.1);
    }
`;

export const IconButtonMenu = styled(FAIconButton)`
    margin: 0.5em;
    color: white;
`;

export const JiraMenu = styled.aside`
    width: 64px;
    background-color: ${({theme}) => theme.sideMenu};
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    overflow-x: hidden;
    z-index: 1;
`;

export const Header = styled.section`
    margin: 24px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const JiraSidenav = styled.nav`
    position: fixed;
    top: 0;
    left: 64px;
    height: 100vh;
    width: 240px;
    background-color: ${({theme}) => theme.background};
    border-right: 1px solid ${({theme}) => theme.borderColor};
`;

export const List = styled.ul`
    list-style: none;
    padding: 0 1em;
`;

export const ListItemTextAndIcon = styled.li`
    cursor: pointer;
    padding: 0.75em;
    border-radius: 4px;

    &:hover {
        background-color: ${({theme}) => theme.hover};
        color: ${({theme}) => theme.textHighlight};
    }
    
    span {
        padding-left: 1em;
    }
`;

export const Card = styled.div`
    margin: 6px 0;
    padding: 0.75em;
    background-color: ${({theme}) => theme.body};
    border-radius: 4px;
    box-shadow: ${({theme}) => theme.boxShadow};
    cursor: pointer;
    font-size: 0.8em;

    &:hover {
        background-color:  ${({theme}) => theme.hover};
    }
`;

export const TextLabel = styled.label`
    background-color: ${({theme}) => theme.label};
    margin-left: 4px;
    padding: 0 0.5em;
    border-radius: 6px;
`;

export const IDTag = styled.label`
    color: ${({theme}) => theme.greyText};
    text-transform: uppercase;
`;

export const StyledStatusColumn = styled.div`
    background-color: ${({theme}) => theme.background};
    flex: 1;
    min-width: 200px;
    margin: 16px 8px;
    padding: 8px 6px 0 6px;
    border-radius: 4px;
    min-height: 100%;
    height: fit-content;
    box-shadow: ${({theme}) => theme.boxShadowSoft};
`;

export const DroppableContainer = styled.div`
    min-height: 300px;
`;

export const BackNavLink = styled.section`
    display: flex;
    margin: 1em;
    font-weight: bold;
    
    span {
        color: ${({theme}) => theme.text};
    }
`;

export const FormLabel = styled.label`
    font-weight: bold;
    display: flex;
    padding: 4px;
`;

export const FormInput = styled.input`
    padding: 12px 8px;
    appearance: none;
    font-size: 1rem;
    border: 2px solid ${({theme}) => theme.hover};
    color: ${({theme}) => theme.greyText};
    border-radius: 8px;
    background-color: ${({theme}) => theme.background};
    
    &:focus {
        outline: none;
        border: 2px solid ${({theme}) => theme.textHighlight};
    }
    
    &:disabled {
        font-weight: bold;
        background-color: ${({theme}) => theme.hover};
        text-align: center;
        width: 100px;
    }
`;

export const FormTextfield = styled.textarea`
    padding: 12px 8px;
    appearance: none;
    font-size: 1rem;
    border: 2px solid ${({theme}) => theme.hover};
    color: ${({theme}) => theme.greyText};
    border-radius: 8px;
    background-color: ${({theme}) => theme.background};
    resize: vertical;
    max-height: 420px;
    min-height: 200px;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "avenir next", avenir,
    "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial,
    sans-serif;
    
    &:focus {
        outline: none;
        border: 2px solid ${({theme}) => theme.textHighlight};
    }
`;

export const FormSelect = styled.select`
    border: 2px solid ${({theme}) => theme.hover};
    color: ${({theme}) => theme.greyText};
    border-radius: 8px;
    background-color: ${({theme}) => theme.background};
    padding: 10px 8px;
    font: inherit;
    appearance: revert;
    text-transform: capitalize;
    
    &:focus {
        outline: none;
        border: 2px solid ${({theme}) => theme.textHighlight};
    }
`;

export const ErrorLabel = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    color: ${({theme}) => theme.error};
    width: 420px;
    margin-top: 0.25rem;
    
    &:before {
      content: "❌ ";
      font-size: 10px;
    }
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({theme}) => theme.overlayColor};
`;

export const Dialog = styled.div`
    position: relative;
    height: fit-content;
    margin: 1em 1em 1em 64px;
    padding: 24px;
    background-color: ${({theme}) => theme.body};
    border-radius: 16px;
    box-shadow: ${({theme}) => theme.boxShadow};
`;

export const StyledCreateDialog = styled(Dialog)`
    min-width: 800px;
    width: 40vw;
`;

export const StyledConfirmationDialog = styled(Dialog)`
    width: 460px;
`;

export const DialogHeader = styled(Header)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 16px 0;
`;

export const DialogWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
`;

export const H1NoMargin = styled.h1`
    margin: 0;
`;


// --- Search Component ---
export const StyledSearchBar = styled.input`
    width: 240px;
    padding: 0.5em;
    border-radius: 8px;
    margin-left: 24px;
    color: ${({theme}) => theme.text};
    border: 2px solid ${({theme}) => theme.background};
    appearance: none;
    background-color: ${({theme}) => theme.background};
    font-weight: bold;
    
    &:hover {
        background-color: ${({theme}) => theme.hover};
    }
    
    &:focus {
        outline: none;
        border: 2px solid ${({theme}) => theme.textHighlight};
        border-radius: 10px;
    }
    
    ::placeholder {
            color: ${({theme}) => theme.greyText};
    }
`;

export const SearchButton = styled.button`
    background-color: transparent;
    padding: 8px;
    border: none;
    cursor: pointer;
    color: ${({theme}) => theme.text};
    
    &:hover {
        background-color: transparent;
        color: ${({theme}) => theme.textHighlight};
    }
`;

export const SearchMatch = styled.button`
    display: block;
    cursor: pointer;
    color: ${({theme}) => theme.text};
    border: 2px solid ${({theme}) => theme.background};
    text-align: left;
    background-color: ${({theme}) => theme.background};
    margin: 8px 0 0 24px;
    padding: 0.5em 1em;
    border-radius: 8px;
    width: 400px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    
    &:hover {
        background-color: ${({theme}) => theme.hover};
    }
    
    &:focus {
        outline: none;
        border: 2px solid ${({theme}) => theme.textHighlight};
        border-radius: 10px;
    }
`;

export const StyledStatusColumnHeader = styled.div`
    text-transform: uppercase;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 1em;
    font-weight: bold;
    font-size: 0.8em;
    color: ${({theme}) => theme.greyText};
`;

export const IssueIcon = styled.label`
    color: ${({theme}) => props => {
    switch (props.iconColor) {
        case "red":
            return theme.issueRed;
        case "blue":
            return theme.issueBlue;
        case "yellow":
            return theme.issueYellow;
        case "green":
        default:
            return theme.issueGreen;
    }
}};
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({theme}) => theme.text};
    
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;