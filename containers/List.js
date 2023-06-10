import {connect} from"react-redux";
import List from "../components/List";
import {addTodo, toggle, remove, removeTodo2s } from "../redux/actions"

const mapStateToProps = (state) => ({
    todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (title) => dispatch(toggle(title)),
    remove: (title) => dispatch(remove(title)),
    removeTodo2s: (title) => dispatch(removeTodo2s(title))
});
export default connect(mapStateToProps, mapDispatchToProps)(List);
