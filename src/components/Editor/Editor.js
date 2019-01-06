/***** React *****/
import React from 'react'
import PropTypes from 'prop-types'

/***** Styles *****/
import { EditorContainer } from './EditorStyled'

/***** Libraries *****/
import AceEditor from 'react-ace'
import 'brace/mode/javascript'
import 'brace/theme/gruvbox'
import 'brace/ext/language_tools'
import 'brace/snippets/javascript'

const Editor = ({ editorValue, setEditorValue }) => {
  const onChange = value => {
    setEditorValue(value)
  }

  return (
    <EditorContainer>
      <AceEditor
        className="ace-editor"
        editorProps={{ $blockScrolling: Infinity }}
        enableLiveAutocompletion={true}
        enableSnippets={true}
        height="100%"
        focus={true}
        mode="javascript"
        name="editor"
        onChange={onChange}
        theme="gruvbox"
        value={editorValue}
        width="100%"
      />
    </EditorContainer>
  )
}

export default Editor

Editor.propTypes = {
  editorValue: PropTypes.string.isRequired,
  setEditorValue: PropTypes.func.isRequired,
}
