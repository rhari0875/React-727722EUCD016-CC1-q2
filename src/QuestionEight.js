import React, { Component } from 'react'
import './QuestionEight.css';

export default class AddToCart extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

  handleDecrement = () => {
    this.setState(prevState => {
        if (prevState.count > 0) {
            return {
                count: prevState.count - 1
            }
        } else {
            return {
                count: 0
            }
        }
    })
  };

  handleIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  };

  handleCart = () => {
    if (this.state.count >= parseInt(this.props.min) && this.state.count <= parseInt(this.props.max)) {  
        alert(this.state.count + ' ' + this.props.item + ' Added in cart');
    } else if (this.state.count >= parseInt(this.props.max)){
        alert('Only limited stocks ' + this.props.max + ' ' + this.props.item + ' available');
    } else {
        alert('Please select atleast ' + this.props.min + ' ' + this.props.item + ' to add.');
    }
  };

    render() {
    return (
      <div className='col'>
        <div className='des'>
      <table className='dom' border={1}>
        <tr>
            <th>Product Image</th>
            <th>Description</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
        </tr>
        <tr>
            <td><img width={100} height={100} src={this.props.imgUrl} alt={this.props.item}></img></td>
            <td>
            <h3>{this.props.item}</h3>
            <p>{this.props.desc}</p>
            </td>
            <td>
                <button onClick={this.handleDecrement}>-</button>
                {this.state.count}
                <button onClick={this.handleIncrement}>+</button>
            </td>
            <td>INR {this.props.price} /-</td>
            <td><button onClick={this.handleCart}>Add Cart</button></td>
        </tr>
      </table>
      </div>
      </div>
    )
  }
}