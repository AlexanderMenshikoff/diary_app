import './JournalForm.css';
import Button from '../Button/Button';


const JournalForm = ({onSubmit}) => {

	const formSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);
		onSubmit(formProps);
		
	};
	return(
		<form className='journal-form' onSubmit={formSubmit}>
			<input type='text' name="title"/>
			<input type='date' name="date"/>
			<textarea name="text" id="" cols="30" rows="10"></textarea>
			<Button text="Сохранить"/>
		</form>
	);
};

export default JournalForm;