import '../componentsCSS/SocialButton.css';

function SocialButton({ provider }) {
  return (
    <button className="social-button">
      continue with {provider}
    </button>
  );
}

export default SocialButton;