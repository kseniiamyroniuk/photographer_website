import '../pagesCSS/LogInSignUp.css'
import '../pagesCSS/Booking.css'
import Texts from "../components/Texts"
import InputField from '../components/InputField';
import EnterButton from '../components/EnterButton';
import Checkbox from '../components/CheckBoxInput';

function BookingPage() {
    return (
        <>
            <Texts text="booking"></Texts>
            <div>
                <h3>Запис на зйомку</h3>
                <p>будь ласка, увійдіть до акаунтку, дякую</p> 
            </div>
          
            <InputField label="імʼя" type="text" placeholder="красуня" />
            <InputField label="телефон" type="number" placeholder="(XX) XXX XX XX)" />
            <InputField label="instagram" type="text" placeholder="@красуня_123" />
            <InputField label="кількість людей" type="number" />
            <div className="input-group">
                <p className='textForInput'>Оберіть місце зйомки:</p>
                <Checkbox 
                    label="студія" 
                    name="місце"
                />
                <Checkbox 
                    label="надворі" 
                    name="місце"
                />
            </div>
            <InputField label="референси" type="file" />
            <p className='textForInput' style={{margin:0}}>Додаткові побажання...</p>
            <textarea name="додаткові побажання" id=""></textarea>
            <EnterButton text="записатись" />

        </>
    )
}

export default BookingPage