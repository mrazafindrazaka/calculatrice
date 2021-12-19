import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import './index.css';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    getResult() {
        const calculate = {
            calculate: this.state.value
        };
        axios.post('http://localhost:4000', calculate).then((response) => {
            this.setState({
                value: response.data.result !== null ? response.data.result : ''
            });
        });
    }

    handleClick(event) {
        const value = event.target.value;
        switch (value) {
            case 'c':
                this.setState({value: ''});
                break;
            case '=':
                this.getResult();
                break;
            default:
                this.setState(prevState => ({value: prevState.value + event.target.value}));
        }
    }

    render() {
        const utilityKeys = [
            <button key={'c'} onClick={this.handleClick.bind(this)} value='c'>Clear</button>,
            <button key={'='} onClick={this.handleClick.bind(this)} value='='>Answer</button>,
            <button key={'+'} onClick={this.handleClick.bind(this)} value='+'>+</button>,
            <button key={'-'} onClick={this.handleClick.bind(this)} value='-'>-</button>,
            <button key={'*'} onClick={this.handleClick.bind(this)} value='*'>*</button>,
            <button key={'/'} onClick={this.handleClick.bind(this)} value='/'>/</button>,
        ];
        const numbersKeys = [];
        for (let count = 0; count < 10; count++) {
            numbersKeys.push(
                <button key={count} onClick={this.handleClick.bind(this)} value={count.toString()}>{count}</button>
            );
        }
        return (
            <div className='box-calculator'>
                <h1>Calculator</h1>
                <div className='calculator'>
                    <div className='box-input'>
                        <input disabled value={this.state.value}/>
                    </div>
                    <div className='box-utility'>
                        {utilityKeys}
                    </div>
                    <div className='box-numbers'>
                        {numbersKeys}
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Calculator/>,
    document.getElementById('root')
);
