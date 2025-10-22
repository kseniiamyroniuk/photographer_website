import '../pagesCSS/LogInSignUp.css'
import Texts from "../components/Texts"
import InputField from '../components/InputField';
import EnterButton from '../components/EnterButton';
import SocialButton from '../components/SocialButton';

function LogInPage() {
    return (
        <>
            <Texts text="log in"></Texts>
    
            <InputField label="email" type="email" placeholder="твій@email.com" />
            <InputField label="пароль" type="password" placeholder="••••••••" />
      
            <EnterButton text="Увійти" />

            <h2>або</h2>

            <SocialButton provider="Google" />
            <SocialButton provider="Apple" />
      
            <p className="other-text">
                не маєш акаунту? <strong>Sign up</strong>
            </p>

        </>
    )
}

export default LogInPage