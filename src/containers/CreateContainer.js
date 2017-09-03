import { connect } from 'react-redux';
import CreateRecipe from '../components/Create';

const mapStateToProps = (state) => {
  return { recipesList: state.recipesList };
}

export default connect(mapStateToProps)(CreateRecipe);
