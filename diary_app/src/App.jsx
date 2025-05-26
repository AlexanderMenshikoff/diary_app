import JournalItem from './components/JournalItem/JournalItem';
import './App.css';
import CardButton from './components/CardButton/CardButton';
import LeftPanel from './layout/LeftPanel/LeftPanel';
import Body from './layout/Body/Body';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import { useState } from 'react';
function App() {

	const data = [
		
		{
			title:'title',
			date: new Date(),
			text: 'yo'
			
		}
	];

	const [formData, setFormData] = useState(data);

	const addItem = (item) => {
		setFormData(prev => [...prev, {
			title:item.title,
			date:new Date(item.date),
			text:item.text
		}]);
	};


	console.log(formData);

	return (
		<div className='app'>
			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList>
					{formData.map(el => 
						<CardButton key={el.date + 1}>
							<JournalItem text={el.text} date={el.date} title={el.title}/>
						</CardButton>
					)}
					
				</JournalList>
			</LeftPanel>

			<Body>
				<JournalForm onSubmit={addItem}/>
			</Body>


			
		</div>
	);
}

export default App;
