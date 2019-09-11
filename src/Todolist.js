import React ,{ Component } from 'react';
// import store from './store';
/**
 * 第二个核心api  connect 让todolist 与store 做连接
 * 怎么连接呢通过connect 方法因为
 * todolist 组件在provider 里边 
 * 
 * 
 */

import { connect } from 'react-redux';


const TodoList = (props)=>{
    const { inputValue }  = props;
    return (
        <div>
            <div>
                <input value={inputValue} onChange={props.handleInputChange}/>
                <button onClick={props.handleClick}>提交</button>
            </div>
            <ul>
               {
                    props.list.map((item,index)=>{
                    return <li onClick={()=>{props.handleDelete(index)}} key={index}>{item}</li>

               })
               }
            </ul>
        </div>
    )
}
// 因为仅仅是 ui组件可以替换成上面的
// class TodoList extends Component{
//     constructor(props){
//         super(props);
//         // this.state = store.getState();
//         // console.log(this.state)
//     }
//     render(){
//         // 下面这仅仅UI组件了
//         const { inputValue }  = this.props;
//         return (
//             <div>
//                 <div>
//                     <input value={inputValue} onChange={this.props.handleInputChange}/>
//                     <button onClick={this.props.handleClick}>提交</button>
//                 </div>
//                 <ul>
//                    {
//                        props.list.map((item,index)=>{

//                         return <li onClick={this.props.handleDelete} key={index}>{item}</li>
//                    })
//                    }
//                 </ul>
//             </div>
//         )
//     }
// }
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
        inputValue:state.inputValue,
        list:state.list
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
        },
        handleClick(){
            const action = {
                type:'add_item',
            }
            dispatch(action);
        },
        handleDelete(index){
            const action = {
                type:'delete_item',
                index:index
            }
            dispatch(action);
        }
        
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);