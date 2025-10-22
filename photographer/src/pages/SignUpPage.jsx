import '../pagesCSS/LogInSignUp.css'
import Texts from "../components/Texts"
import InputField from '../components/InputField';
import EnterButton from '../components/EnterButton'
import SocialButton from '../components/SocialButton';

function SignUpPage() {
    return (
        <>
            <Texts text="sign up"></Texts>
    
            <InputField label="імʼя" type="text" placeholder="красуня" />
            <InputField label="email" type="email" placeholder="твій@email.com" />
            <InputField label="пароль" type="password" placeholder="••••••••" />
      
            <EnterButton text="Зареєструвати" />

            <h2>або</h2>

            <SocialButton provider="Google" />
            <SocialButton provider="Apple" />
      
            <p className="other-text">
                уже маєш акаунт? <strong>Log In</strong>
            </p>

        </>
    )
}

export default SignUpPage