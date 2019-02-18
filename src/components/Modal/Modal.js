/***** React *****/
import React from 'react'
import PropTypes from 'prop-types'

/***** Styles *****/
import {
  overlay,
  content,
  ModalStyled,
  Title,
  Subtitle,
  CTA,
  Button,
} from './ModalStyled'
import { defaultColors } from '../../styles/theme'

/***** Libraries *****/
import ReactModal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Modal = ({ isModalOpen, setIsModalOpen }) => {
  const { green, grey } = defaultColors

  const handleCloseModal = () => {
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
          <Button color={grey}>Stay</Button>
          <Button color={green}>Next</Button>
        </CTA>
      </ModalStyled>
    </ReactModal>
  )
}

export default Modal

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
}
