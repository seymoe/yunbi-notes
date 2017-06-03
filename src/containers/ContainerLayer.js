import { connect } from 'react-redux'
import Layer from '../components/Layer'
import { addNote, showLayer } from '../actions/note'

const mapStateToProps = (state, ownProps) => ({
  isShowLayer: state.isShowLayer
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addNewClick: (title, content) => {
    dispatch(addNote(title, content))
    dispatch(showLayer(false))
  },
  closeLayerWrap: () => dispatch(showLayer(false))
})

const ContainerLayer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Layer)

export default ContainerLayer