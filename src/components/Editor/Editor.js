/***** React *****/
import React, { useState } from 'react'

/***** Libraries *****/
import AceEditor from 'react-ace'
import 'brace/mode/javascript'
import 'brace/theme/monokai'

const Editor = props => {
  const [editorValue, setEditorValue] = useState('')

  const onChange = (value, e) => {
    setEditorValue(value)
  }

  return (
    <section>
      <AceEditor
        mode="javascript"
        theme="monokai"
        onChange={onChange}
        name="editor"
        editorProps={{ $blockScrolling: true }}
        focus={true}
        value={editorValue}
      />

      <button onClick={() => props.evaluate(editorValue)}>Submit</button>
    </section>
  )
}

export default Editor
