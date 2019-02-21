/***** React *****/
import React from 'react'
import PropTypes from 'prop-types'

/***** Components *****/
import {
  overlay,
  content,
  ModalStyled,
  Emoji,
  Title,
  Subtitle,
  CTA,
} from './ModalStyled'
import Button, { ButtonShortcut } from '../assets/Button'
import { defaultColors } from '../../styles/theme'

/***** Libraries *****/
import ReactModal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Hotkeys from 'react-hot-keys'

const Modal = ({
  isModalOpen,
  isLastExercise,
  currentExerciseIndex,
  setIsModalOpen,
  goToExercise,
}) => {
  const { green, grey } = defaultColors

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleGoToNextExercise = () => {
    goToExercise(currentExerciseIndex + 1)
    setIsModalOpen(false)
  }

  const handleStartAgain = () => {
    goToExercise(0)
    setIsModalOpen(false)
  }

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      style={{ overlay, content }}
    >
      <ModalStyled>
        {isLastExercise ? (
          <Hotkeys keyName="enter" onKeyUp={handleStartAgain}>
            {/* eslint-disable-next-line */}
            <Emoji label="trophy">🏆</Emoji>

            <Title>You made it!</Title>
            <Subtitle>All challenges are completed.</Subtitle>

            <CTA>
              <Button color={green} onClick={handleStartAgain}>
                Start again
                <br />
                <ButtonShortcut>(enter)</ButtonShortcut>
              </Button>
            </CTA>
          </Hotkeys>
        ) : (
          <Hotkeys keyName="enter" onKeyUp={handleGoToNextExercise}>
            <FontAwesomeIcon icon="check" className="modal-check" />

            <Title>Great job!</Title>
            <Subtitle>Ready for the next challenge?</Subtitle>

            <CTA>
              <Button color={grey} onClick={handleCloseModal}>
                Stay
                <br />
                <ButtonShortcut>(esc)</ButtonShortcut>
              </Button>
              <Button color={green} onClick={handleGoToNextExercise}>
                Next
                <br />
                <ButtonShortcut>(enter)</ButtonShortcut>
              </Button>
            </CTA>
          </Hotkeys>
        )}
      </ModalStyled>
    </ReactModal>
  )
}

export default Modal

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  isLastExercise: PropTypes.bool.isRequired,
  currentExerciseIndex: PropTypes.number.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  goToExercise: PropTypes.func.isRequired,
}
