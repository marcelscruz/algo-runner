/***** React *****/
import React, { useState } from 'react'

/***** Libraries *****/
import AceEditor from 'react-ace'
import 'brace/mode/javascript'
import 'brace/theme/gruvbox'
import 'brace/ext/language_tools'
import 'brace/snippets/javascript'

const Editor = props => {
  const [editorValue, setEditorValue] = useState('')

  const onChange = (value, e) => {
    setEditorValue(value)
  }

  return (
    <section>
      <AceEditor
        editorProps={{ $blockScrolling: Infinity }}
        enableLiveAutocompletion={true}
        enableSnippets={true}
        focus={true}
        mode="javascript"
        name="editor"
        onChange={onChange}
        theme="gruvbox"
        value={editorValue}
        defaultValue={`const foo = 'foo'

        function add() {
          return a + b
        }

        console.log(add(2, 2))
        `}
      />

      <button onClick={() => props.evaluate(editorValue)}>Submit</button>
    </section>
  )
}

export default Editor
