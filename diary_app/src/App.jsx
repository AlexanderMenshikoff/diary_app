import JournalItem from './components/JournalItem/JournalItem';
import './App.css';
import CardButton from './components/CardButton/CardButton';
import LeftPanel from './layout/LeftPanel/LeftPanel';
import Body from './layout/Body/Body';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
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
		<div className='app'>
			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList>
					<CardButton>
						<JournalItem text={data[0].text} date={data[0].date} title={data[0].title}/>
					</CardButton>
				</JournalList>
			</LeftPanel>

			<Body>
				content
			</Body>


			
		</div>
	);
}

export default App;
