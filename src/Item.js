import React from "react"



class Item extends React.Component{
    constructor(props){
        super(props)

        this.state = {
           click : 0 
        }
    }
    
    
    click(){
           this.setState({
            click: this.state.click +1
           })
    }

    render(){
        return(
            <div>
              <h1 onClick={()=>this.click()}>Hello {this.props.name} Welcome to {this.props.place}</h1>
              <p>the number of books in sell {this.state.click} </p>
            </div>


        )
    }

}

export default Item;