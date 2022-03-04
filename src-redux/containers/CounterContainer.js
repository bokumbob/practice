import React, {Component} from 'react';
import {connect} from 'react-redux';
import Counter from '../components/Counter';
// 불러오기
import { bindActionCreators } from 'redux';
import { increment, decrement } from '../store/modules/counter';

class CounterContainer extends Component {
    handleIncrement = () => {
        this.props.increment();
    };
    handleDecrement = () => {
        this.props.decrement()
    };
    render(){
        const {color, number} = this.props;
        return (
            <Counter
            color={color}
            value={number}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            />
        );
    }
}

const mapStateToProps = ({counter}) => ({
    color:counter.color,
    number:counter.number,
});

// const mapDispatchToProps = dispatch => ({
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement()),
// });
// const mapDispatchToProps = dispatch => bindActionCreators({increment,decrement}, dispatch)
const mapDispatchToProps = {increment,decrement}
// 함수가 아닌 객체 설정시 자동으로 bindActionCreators 된다

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer);