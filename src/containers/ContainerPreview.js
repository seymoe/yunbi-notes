import { connect } from 'react-redux'
import Preview from '../components/Preview'
import { deleteNote } from '../actions/note'

const mapStateToProps = (state, ownProps) => ({
  currentNote: state.cnote
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteClick: (id) =>{
    dispatch(deleteNote(id))
  }
})

const ContainerPreview = connect(
  mapStateToProps,
  mapDispatchToProps
)(Preview)

export default ContainerPreview