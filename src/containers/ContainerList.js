import { connect } from 'react-redux'
import List from '../components/List'
import { showNote } from '../actions/note'

const mapStateToProps = (state, ownProps) => ({
  listData: state.notes
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (id) =>{
    dispatch(showNote(id))
  }
})

const ContainerList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default ContainerList