import './JournalItem.css';

const JournalItem = ({title, date, text}) => {

	const formatedDate = new Intl.DateTimeFormat('ru-Ru').format(date);

	return(
		<>
			<h2 className='journal_item_header'>{title}</h2>
			<div className='journal_item_body'>
				<div className='journal_item_date'>{formatedDate}</div>
				<div className='journal_item_text'>{text}</div>
			</div>
		</>
	);
	
};


export default JournalItem;