import styled from "styled-components";


export const TextButton = styled.button`
    padding: 0.5em 1em;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.buttonBackground};
    border: none;
    cursor: pointer;
    text-transform: capitalize;
`;

export const SubmitButton = styled(TextButton)`
    width: fit-content;
    font-weight: bold;
    border: 2px solid;
    border-color: ${({ theme }) => theme.textHighlight};
    background-color: ${({ theme }) => theme.background};
    
    &:hover {
        background-color: ${({ theme }) => theme.hover};
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
    }
    
    &:disabled {
      border-color: ${({ theme }) => theme.background};
      background-color: ${({ theme }) => theme.body};
    }
`;

export const FAIconButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.iconColor};
    padding: 1em;
`;

export const FAActionIconButton = styled(FAIconButton)`
     &:hover {
        color: ${({ theme }) => theme.textHighlight};
        transform: scale(1.1);
    }
`;

export const FAIconButtonMenu = styled(FAIconButton)`
    margin: 0.5em;
    color: white;
`;

export const JiraMenu = styled.aside`
  width: 64px;
  background-color: rgb(7, 71, 166);
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
  background-color: ${({ theme }) => theme.background};
  border-right: 1px solid ${({ theme }) => theme.borderColor};
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
      background-color: ${({ theme }) => theme.hover};
      color: ${({ theme }) => theme.textHighlight};
    }
    
    span {
       padding-left: 1em;
     }
`;

export const Card = styled.div`
    margin: 6px 0;
    padding: 12px;
    background-color: ${({ theme }) => theme.body};
    border-radius: 4px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    cursor: pointer;
    font-size: 0.8em;

    &:hover {
        background-color:  ${({ theme }) => theme.hover};
    }
`;

export const TextLabel = styled.label`
    background-color: ${({ theme }) => theme.label};
    margin-left: 4px;
    padding: 0 0.5em;
    border-radius: 6px;
`;

export const IDTag = styled.label`
    color: ${({ theme }) => theme.greyText};
    text-transform: uppercase;
`;

export const StyledStatusColumn = styled.div`
    background-color: ${({ theme }) => theme.background};
    flex: 1;
    min-width: 200px;
    margin: 16px 8px;
    padding: 8px 6px 0 6px;
    border-radius: 4px;
    min-height: 100%;
    height: fit-content;
    box-shadow: ${({ theme }) => theme.boxShadowSoft};
`;

export const DroppableContainer = styled.div`
    min-height: 300px;
`;

export const BackNavLink = styled.section`
    display: flex;
    margin: 1em;
    font-weight: bold;
    
    span {
        color: ${({ theme }) => theme.text};
    }
`;