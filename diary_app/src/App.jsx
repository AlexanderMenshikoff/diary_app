import './App.css';
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
			id:1,
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
			text:item.text,
			id: prev.length > 0 ? Math.max(...prev.map(el => el.id)) + 1 : 1
		}]);
	};

	return (
		<div className='app'>
			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList items = {formData}/>
			</LeftPanel>

			<Body>
				<JournalForm onSubmit={addItem}/>
			</Body>
		</div>
	);
}

export default App;
