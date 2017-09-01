import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';

const mapStateToProps = (state) => {
  return { recipes: state.recipes };
}

export default connect(mapStateToProps)(Sidebar);
