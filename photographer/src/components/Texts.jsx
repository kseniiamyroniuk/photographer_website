import '../componentsCSS/Texts.css'

function Texts({ text }) {   
    return (
        <>
        <div className="textsDiv">
            {/* <p className='solidText'>{text}</p> */}
            <p className='outlinedText'>{text}</p>
            <p className='outlinedText'style={{opacity: 0.8}}>{text}</p>
            <p className='outlinedText' style={{opacity: 0.6}}>{text}</p>
            <p className='outlinedText' style={{opacity: 0.4}}>{text}</p>
            <p className='outlinedText' style={{opacity: 0.2}}>{text}</p>
        </div>
        </>
    )
}

export default Texts