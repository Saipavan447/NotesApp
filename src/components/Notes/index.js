import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'

import {
  MainContainer,
  Heading,
  Container,
  TitleInput,
  TakeNoteInput,
  Button,
  NotesViewContainer,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [noteText, setNoteText] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => setTitle(event.target.value)
  const onChangeNoteText = event => setNoteText(event.target.value)

  const onAddNote = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      noteText,
    }
    setNotesList(prevNotesList => [...prevNotesList, newNote])
    setTitle('')
    setNoteText('')
  }

  return (
    <MainContainer>
      <Heading>Notes</Heading>
      <Container onSubmit={onAddNote}>
        <TitleInput
          type="text"
          value={title}
          onChange={onChangeTitle}
          placeholder="Title"
        />
        <TakeNoteInput
          type="text"
          value={noteText}
          onChange={onChangeNoteText}
          placeholder="Take a Note"
        />
        <Button type="submit">Add</Button>
      </Container>
      <NotesViewContainer>
        {notesList.map(eachNote => (
          <NoteItem key={eachNote.id} noteDetails={eachNote} />
        ))}
      </NotesViewContainer>
    </MainContainer>
  )
}

export default Notes
