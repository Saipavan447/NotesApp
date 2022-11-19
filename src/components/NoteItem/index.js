import {NoteContainer, NoteHeading, NoteParagraph} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, noteText} = noteDetails

  return (
    <>
      <NoteContainer>
        <NoteHeading>{title}</NoteHeading>
        <NoteParagraph>{noteText}</NoteParagraph>
      </NoteContainer>
    </>
  )
}

export default NoteItem
