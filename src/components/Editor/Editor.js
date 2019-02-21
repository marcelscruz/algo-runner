/***** React *****/
import React from 'react'
import PropTypes from 'prop-types'

/***** Components *****/
import { EditorContainer } from './EditorStyled'

/***** Libraries *****/
import AceEditor from 'react-ace'
import 'brace/mode/javascript'
import 'brace/theme/gruvbox'
import 'brace/ext/language_tools'
import 'brace/snippets/javascript'

const Editor = ({ setEditorInstance, editorValue, setEditorValue }) => {
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
        focus={true}
        height="100%"
        mode="javascript"
        name="editor"
        onChange={onChange}
        onLoad={editor => {
          setEditorInstance(editor)
          editor.gotoLine(2, 4, true)
        }}
        theme="gruvbox"
        value={editorValue}
        width="100%"
      />
    </EditorContainer>
  )
}

export default Editor

Editor.propTypes = {
  setEditorInstance: PropTypes.func.isRequired,
  editorValue: PropTypes.string.isRequired,
  setEditorValue: PropTypes.func.isRequired,
}
