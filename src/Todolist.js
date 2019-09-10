import React ,{ Component } from 'react';
import store from './store';
/**
 * 第二个核心api  connect 让todolist 与store 做连接
 * 怎么连接呢通过connect 方法因为
 * todolist 组件在provider 里边 
 * 
 * 
 */

import { connect } from 'react-redux';



class TodoList extends Component{
    constructor(props){
        super(props);
        // this.state = store.getState();
        // console.log(this.state)
    }
    render(){
        return (
            <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.handleInputChange.bind(this)}/>
                    <button onClick={this.handleClick.bind(this)}>提交</button>
                </div>
                <ul>
                    <li>
                        Dell
                    </li> 
                </ul>
            </div>
        )
       
    }
    handleClick(){
        console.log('w')
    }
    
}
// export default TodoList;
/** 
 * 衍生出一个放
 * 把store 里边的数据映射到这个组件里边;
 * 
 * store 里边的数据会映射到这个组件的props上面
 * 
*/
const mapStateToProps = (state)=>{
    return {
        inputValue:state.inputValue
    }
}
/**
 * store.dispatch.props; 如果想要改变 store 里边的数据
 * 就要调用 disatch 所以 mapDispatchToProps 就相当于
 * dispatch方法
 * 
 *  */ 

const mapDispatchToProps = (dispatch)=>{
    return {
        handleInputChange(e){
            const action = {
                type:'change_input_value',
                value:e.target.value
            }
            dispatch(action);
        }
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);