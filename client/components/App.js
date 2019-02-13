import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function maspStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispachToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(maspStateToProps, mapDispachToProps)(Main);

export default App;