import React, { Component } from 'react';
import './Quiz.css';
import { WORD_BANK } from './WordBank';

const PRONOUNS = ['je', 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles'];

class Quiz extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currWord: '',
			currWordForms: {},
			currPronoun: '',
			answer: '',
			result: -1,
			wrongCount: 0,
			correctCount: 0,
		}
		this.onSubmit = this.onSubmit.bind(this);
		this.onAnswerChange = this.onAnswerChange.bind(this);
		this.setRandom = this.setRandom.bind(this);
	}

	componentDidMount() {
		this.setRandom();
	}

	setRandom() {
		const rand = Math.floor(Math.random() * Object.keys(WORD_BANK).length);
		const randPronoun = Math.floor(Math.random() * PRONOUNS.length);
		const key = Object.keys(WORD_BANK)[rand]
		this.setState({
			currWord: key,
			currWordForms: WORD_BANK[key],
			currPronoun: PRONOUNS[randPronoun],
			answer: '',
			result: -1,
		});
	}

	getCorrectAnswer() {
		const { currPronoun, currWordForms } = this.state;
		let correct = ''
		if (currPronoun === 'elle' ||
			currPronoun === 'il' ||
			currPronoun === 'on') {
			correct = currWordForms[2];
		} else if (currPronoun === 'elles' ||
			currPronoun === 'ils') {
			correct = currWordForms[5];
		} else if (currPronoun === 'vous') {
			correct = currWordForms[4];
		} else if (currPronoun === 'nous') {
			correct = currWordForms[3];
		} else {
			correct = currWordForms[PRONOUNS.indexOf(currPronoun)];
		}
		return correct;
	}

	onSubmit(e) {
		e.preventDefault();
		const correct = this.getCorrectAnswer();
		const { answer } = this.state;
		if (correct === answer.toLowerCase()) {
			this.setState((prevState) => ({
				result: 1,
				correctCount: prevState.correctCount + 1,
			}));
			setTimeout(this.setRandom, 1000);
		} else {
			this.setState((prevState) => ({
				result: 0,
				wrongCount: prevState.wrongCount + 1,
			}));
			setTimeout(this.setRandom, 1000);
		}
	}

	onAnswerChange(e) {
		this.setState({
			answer: e.target.value,
		})
	}

	render() {
		const {
			currWord,
			currPronoun,
			answer,
			result,
			correctCount,
			wrongCount
		} = this.state;
		let currPronounDisplay = currPronoun;
		if (currPronoun === 'je' && answer !== '' &&
			(answer[0] === 'a' ||
			answer[0] === 'e' ||
			answer[0] === 'i' ||
			answer[0] === 'o' ||
			answer[0] === 'u')) {
			currPronounDisplay = "j'";
		}
		return (
			<div>
				<p className="test-word">{currWord}</p>
				<form onSubmit={this.onSubmit}>
					<span className="test-pronoun">{currPronounDisplay}</span>
					<input
						className="text-input"
						type="text"
						placeholder="type answer here"
						value={answer}
						onChange={this.onAnswerChange}
					/>
				</form>
				<div>
					{(result === 1) && (
						<p className="correct-header">Correct</p>	
					)}
					{(result === 0) && (
						<p className="wrong-header">Wrong!
						Answer: {this.getCorrectAnswer()}</p>
					)}
				</div>
				<p>{correctCount} / {correctCount + wrongCount} correct</p>
			</div>
		)
	}
}

export default Quiz;