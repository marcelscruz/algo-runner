/***** React *****/
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/***** Libraries *****/
import AceEditor from 'react-ace'
import 'brace/mode/javascript'
import 'brace/theme/gruvbox'
import 'brace/ext/language_tools'
import 'brace/snippets/javascript'

const Editor = ({ currentExercise, evaluate }) => {
  const [editorValue, setEditorValue] = useState('')

  useEffect(
    () => {
      currentExercise.instructions &&
        setEditorValue(
          `// ${currentExercise.instructions} \n\n${
            currentExercise.placeholder
          }`,
        )
    },
    [currentExercise],
  )

  const onChange = (value, e) => {
    setEditorValue(value)
  }

  const onSubmit = () => {
    evaluate(editorValue)
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
      />

      <button onClick={onSubmit}>Submit</button>
    </section>
  )
}

export default Editor

Editor.propTypes = {
  currentExercise: PropTypes.object.isRequired,
  evaluate: PropTypes.func.isRequired,
}
