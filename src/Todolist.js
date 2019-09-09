
import React ,{ Component,Fragment} from 'react';
import './css.css';
import axios from 'axios';
import TodoItem from './TodoItem';
// import Test from './Test';
// 当组件的 state  和 props 发生改的的时候 render 函数就会
//重新被渲染
class Todolist extends Component{

    constructor(props){

        super(props);

        this.state = {

            inputValue:'',
            list:[]
        }
        this.hanldeInputChange = this.hanldeInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }
    //组件即将被挂载到页面的时候执行
    componentWillMount(){
        //console.log('componentWillMount')
    }
    // 组件被挂载到页面之后执行,只会执行一次 
    componentDidMount(){
        //console.log('render函数之后执行')
        // let result = {};
        // this.ajax().then((res)=>{
        //     result = res;
        // });

        axios.get('/api/todolist')
            .then((res)=>{
                console.log('cc')
                this.setState(()=>({
                    // return {
                    //     list:res.data
                    // }
                    list:[...res.data]
                }));
            })
            .catch(()=>{console.log('error')})
    }
    // 组件被更新之前会执行
    // 返回布尔类型 ，返回true 就是更新 返回false 就是不更新
    shouldComponentUpdate(){
        return true; 
    }
    // 组件更新之前被执行 如果 shouldComponentUpdate 函数返回false 就不执行 返回 true才会执行
    componentWillUpdate(){
        //console.log('componentWillUpdate')
    }
    // 组件更新之后执行
    componentDidUpdate(){
        //console.log('componentDidUpdate')
    }
   

    render(){
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">点击输入</label>
                    <input
                        id="insertArea"
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.hanldeInputChange}
                        ref={(input)=>{this.input=input}}
                    
                    />
                    <button onClick={this.handleBtnClick}>提交</button>    
                </div>
                <ul ref={(ul)=>{this.ul = ul}}>
                    {
                       this. getTodoItem() 
                    }
                </ul>
                {/* <Test content={this.state.inputValue}/> */}
            </Fragment>
        )
    }
    getTodoItem(){
        return (                             
            this.state.list.map((item,index)=>{
                return (
              <div  key={index}>
                  <TodoItem
                  index={index} 
                  content={item}
                  deleteItem={this.handleItemDelete}
                  />

                {/*<li 
                key={index}
                onClick={this.handleItemDelete.bind(this,index)}
                dangerouslySetInnerHTML={{__html:item}}
                >
                </li>*/}
                </div>
                )
                
              })

        )
    }
    hanldeInputChange(e){
        //this.state.inputValue = e.target.value;
        //console.log(e.target.value);

        // this.setState({
        //     inputValue:e.target.value
        // });
        //console.log(this.input)
        //下面变成函数的形式
        const value = e.target.value;
        this.setState(()=>({
            inputValue:value
        }))
    }

    handleBtnClick(){
        // this.setState({
        //     list:[...this.state.list,this.state.inputValue],
        //     inputValue:''
        // });
        // setState 是异步函数 提供了后边还有一个函数

        this.setState((prevState)=>({
            list:[...prevState.list,prevState.inputValue],
            inputValue:''
        }),()=>{
            console.log(this.ul.querySelectorAll('div').length)
        });

       

    }
    handleItemDelete(index){
        // const list = [...this.state.list];
        // list.splice(index,1);
        // this.setState({
        //     list:list
        // })

        this.setState((prevState)=>{
            const list = [...prevState.list];
            list.splice(index,1);
            return {list:list}
        })

        //console.log(index);
        
    }
}
export default Todolist