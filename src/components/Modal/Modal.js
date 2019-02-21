/***** React *****/
import React from 'react'
import PropTypes from 'prop-types'

/***** Components *****/
import {
  overlay,
  content,
  ModalStyled,
  Title,
  Subtitle,
  CTA,
} from './ModalStyled'
import Button from '../assets/Button'
import { defaultColors } from '../../styles/theme'

/***** Libraries *****/
import ReactModal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Modal = ({
  isModalOpen,
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

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      style={{ overlay, content }}
    >
      <ModalStyled>
        <FontAwesomeIcon icon="check" className="modal-check" />

        <Title>Great job!</Title>
        <Subtitle>Ready for the next challenge?</Subtitle>

        <CTA>
          <Button color={grey} onClick={handleCloseModal}>
            Stay
          </Button>
          <Button color={green} onClick={handleGoToNextExercise}>
            Next
          </Button>
        </CTA>
      </ModalStyled>
    </ReactModal>
  )
}

export default Modal

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  currentExerciseIndex: PropTypes.number.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  goToExercise: PropTypes.func.isRequired,
}
