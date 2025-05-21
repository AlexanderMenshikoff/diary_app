import JournalItem from './components/JournalItem/JournalItem';
import './App.css';
function App() {

	const data = [
		{
			text: 'yo',
			date: new Date(),
			title:'title'
		},
		{
			text: 'yo',
			date: new Date(),
			title:'title'
		}
	];


	return (
		<>
			<JournalItem text={data[0].text} date={data[0].date} title={data[0].title}/>
		</>
	);
}

export default App;
