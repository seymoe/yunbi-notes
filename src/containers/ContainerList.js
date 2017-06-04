import { connect } from 'react-redux'
import List from '../components/List'
import { showNote, showLayer } from '../actions/note'

const mapStateToProps = (state, ownProps) => ({
  listData: state.notes,
  isShowLayer: state.isShowLayer
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (id) => {
    console.log(id)
    dispatch(showNote(id))
    console.log(ownProps)
  },
  addBtnClick: (isSL) => {
    dispatch(showLayer(isSL))
  }
})

const ContainerList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default ContainerList