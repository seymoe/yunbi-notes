import { connect } from 'react-redux'
import Edit from '../components/Edit'
import { addNote, showEditer } from '../actions/note'

const mapStateToProps = (state, ownProps) => ({
  isShowEditer: state.isShowEditer,
  id: state.cnote.id,
  title: state.cnote.title,
  content: state.cnote.content
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addNewClick: (title, content, id) => {
    dispatch(addNote(title, content, id))
    dispatch(showEditer(false))
  },
  closeLayerWrap: () => dispatch(showEditer(false))
})

const ContainerEditer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit)

export default ContainerEditer