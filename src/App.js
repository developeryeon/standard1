import { useState } from 'react';
import './App.css';

function App() {
	const initialArray = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

	const [array, setArray] = useState(initialArray);
	const [result, setResult] = useState('');
	const [query, setQuery] = useState('');

	const handleForEach = () => {
		let tempResult = '';

		array.forEach(function (item, index) {
			tempResult += `${index}: ${item}, `;
		});

		setResult(tempResult.slice(0, -2)); 
	};

	const handleFilter = () => {
		const filterList = array.filter((fruit) => {
			if (fruit.includes(query)) {
				return true;
			} else {
				return false;
			}
		});
		setResult(filterList.join(', '));
	};

	const handleMap = () => {
		
		const mappedList = array.map((fruit) => {
			return fruit.toUpperCase();
		});
		setResult(mappedList.join(', '));
	};

	const handleReduce = () => {
		const reducedText = array.reduce((acc, cur) => {
			return `${acc} + ${cur}`;
		});
		setResult(reducedText);
	};

	const handlePush = () => {
		
		const newArr = [...array, query];
		setArray(newArr);
		setResult(newArr.join(', '));
	};

	const handlePop = () => {
		const newArr = [...array];
		newArr.pop();
		setArray(newArr);
		setResult(newArr.join(', '));
	};

	const handleSlice = () => {
		const newArr = [...array];
		const sliceArr = newArr.slice(1, -1);
		//setArray(sliceArr); 
		setResult(sliceArr.join(', '));
	};

	const handleSplice = () => {
		const newArr = [...array];
		newArr.splice(2, 2, 'kiwi', 'lime');
		setArray(newArr);
		setResult(newArr.join(', '));
	};

	const handleIndexOf = () => {
		const newArr = [...array];
		const indexArr = newArr.indexOf('NaN');
		setResult(indexArr);
	};

	//
	const handleIncludes = (fruit) => {
		const includesArr = array.includes(fruit);
		setResult(includesArr);
	};

	const handleFind = () => {
		const newArr = [...array];
		const found = newArr.find((element) => element === 'apple');
		setResult(found);
	};

	//
	const handleSome = () => {
		const someArr = array.some((element) => element === query);
		setResult(someArr);
	};

	const handleEvery = () => {
		const everyResult = array.every((fruit) => (fruit.length > 5 ? true : false));
		setResult(everyResult);
	};

	const handleSort = () => {
		const sortedArr = [...array].sort((a, b) => {
			const upperA = a.toUpperCase();
			const upperB = b.toUpperCase();
			if (upperA < upperB) return -1;
			if (upperA > upperB) return 1;
			return 0;
		});
		setResult(sortedArr.join(', '));
	};

	const handleJoin = () => {
		const newArr = [...array];
		const joinArr = newArr.join(', ');
		setResult(joinArr);
	};

	return (
		<div className="App">
			<h1>Standard반 배열 API</h1>
			<div>
				<input
					value={query}
					onChange={function (e) {
						setQuery(e.target.value);
					}}
				/>
			</div>
			<div>
				<button onClick={handleForEach}>forEach</button>
				<button onClick={handleFilter}>filter</button>
				<button onClick={handleMap}>map</button>
				<button onClick={handleReduce}>reduce</button>
				<button onClick={handlePush}>push</button>
				<button onClick={handlePop}>pop</button>
				<button onClick={handleSlice}>slice</button>
				<button onClick={handleSplice}>splice</button>
				<button onClick={handleIndexOf}>indexOf</button>
				<button onClick={handleIncludes}>includes</button>
				<button onClick={handleFind}>find</button>
				<button onClick={handleSome}>some</button>
				<button onClick={handleEvery}>every</button>
				<button onClick={handleSort}>sort</button>
				<button onClick={handleJoin}>join</button>
			</div>
			<div>
				<strong>Array</strong> : {array.join(', ')}
			</div>
			<div>
				<strong>Result</strong> : {result}
			</div>
		</div>
	);
}

export default App;
