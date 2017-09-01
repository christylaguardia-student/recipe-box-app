import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';
import { fetchAllRecipes } from '../store/recipe.actions';

const mapStateToProps = state => {
  return { recipesList: state.recipesList };
};

function mapDispatchToProps(dispatch) {
  dispatch(fetchAllRecipes());
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;
