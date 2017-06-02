import { connect } from 'react-redux'
import Preview from '../components/Preview'
import { showNote } from '../actions/note'

const mapStateToProps = (state, ownProps) => ({
  currentNote: state.cnote
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () =>{
    console.log(ownProps)
  }
})

const ContainerPreview = connect(
  mapStateToProps,
  mapDispatchToProps
)(Preview)

export default ContainerPreview