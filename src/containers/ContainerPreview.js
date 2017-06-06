import { connect } from 'react-redux'
import Preview from '../components/Preview'
import { deleteNote, showEditer } from '../actions/note'

const mapStateToProps = (state, ownProps) => ({
  currentNote: state.cnote,
  isShowEditer: state.isShowEditer
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  editClick: (isSE) => {
    dispatch(showEditer(isSE))
  },
  deleteClick: (id) => {
    dispatch(deleteNote(id))
  }
})

const ContainerPreview = connect(
  mapStateToProps,
  mapDispatchToProps
)(Preview)

export default ContainerPreview