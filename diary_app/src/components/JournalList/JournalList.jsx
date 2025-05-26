import './JournalList.css';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';


const JournalList = ({items}) => {

	if(items.length === 0){
		return <p>Здесь пока нет воспоминаний, добавьте первое</p>;
	} 

	const sortItem = (a, b) => {
		if(a.date < b.date){
			return 1;
		}else{
			return -1;
		}
	};


	return (
		<div className='journal-list'>
			{items.sort(sortItem).map(el => 
				<CardButton key={el.id}>
					<JournalItem text={el.text} date={el.date} title={el.title}/>
				</CardButton>
			)}
		</div>
	);
};

export default JournalList;