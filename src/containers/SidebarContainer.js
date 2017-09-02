import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';
import { requestRecipes } from '../store/recipe.actions';

const mapStateToProps = state => {
  return { recipesList: state.recipesList };
};

const SidebarContainer = connect(mapStateToProps)(Sidebar);

// function mapDispatchToProps(dispatch, state) {
//   dispatch(requestRecipes());
// }

// const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;
