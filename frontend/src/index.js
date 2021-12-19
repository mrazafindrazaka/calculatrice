import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };
    }

    handleClick(event) {
        const value = event.target.value;
        switch (value) {
            case 'c':
                this.setState({value: ""});
                break;
            case '=':
                console.log("answer");
                break;
            default:
                this.setState(prevState => ({value: prevState.value + event.target.value}));
        }
    }

    render() {
        const utilityKeys = [
            <button key={"c"} onClick={this.handleClick.bind(this)} value="c">Clear</button>,
            <button key={"="} onClick={this.handleClick.bind(this)} value="=">Answer</button>,
            <button key={"+"} onClick={this.handleClick.bind(this)} value="+">+</button>,
            <button key={"-"} onClick={this.handleClick.bind(this)} value="-">-</button>,
            <button key={"*"} onClick={this.handleClick.bind(this)} value="*">*</button>,
            <button key={"/"} onClick={this.handleClick.bind(this)} value="/">/</button>,
        ];
        const numbersKeys = [];
        for (let count = 0; count < 10; count++) {
            numbersKeys.push(
                <button key={count} onClick={this.handleClick.bind(this)} value={count.toString()}>{count}</button>
            );
        }
        return (
            <div className="calculator">
                <input readOnly value={this.state.value}/>
                {utilityKeys}
                {numbersKeys}
            </div>
        );
    }
}

ReactDOM.render(
    <Calculator/>,
    document.getElementById('root')
);
