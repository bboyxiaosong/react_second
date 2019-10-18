
import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './Todolist';
import { Provider } from 'react-redux';
import store from './store';
const App = (
    <Provider store={store}>
        <Todolist />
    </Provider>
);
/**
 * // 这节学的 react-redux
 * react-redux 里边的这个Provider 这个提供器连接了 store
 * ，那么它里边的所有组件都可以获取到store里的内容了；
 * 比如
 * <Provider store={store}>
        <Todolist />
        <A></A>
    </Provider>
 * 组件里的Todolist 都可以获取到store里的内容，组件内怎么获取呢
 react-redux 提供了connect 核心api，这个方法如下
 * import { connect } from 'react-redux'; //引用
 * 
 * 每次都是导出组件这次是 
 * connect 这个方法就是让组件 Todolist 与store 做连接
 * 
 * export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
 * 
 *  */ 
ReactDOM.render(App, document.getElementById('root'));






