import styled from 'styledComponents'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Heading = styled.h1`
  color: #4c63b6;
  font-family: 'Roboto';
  font-weight: bold;
`
export const Container = styled.div`
  width: 700px;
  height: 500px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
export const TitleInput = styled.input`
  color: #475569;
  height: 30px;
`
export const TakeNoteInput = styled.textarea`
  height: 50px;
  color: #475569;
`
export const Button = styled.button`
  background-color: #4c63b6;
  width: 200px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
`
export const NotesViewContainer = styled.div`
  padding: 5px;
  list-style-type: none;
`
