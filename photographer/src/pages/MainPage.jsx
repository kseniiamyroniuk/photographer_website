import '../pagesCSS/MainPage.css'
import Texts from "../components/Texts"
import Filmroll from "../components/Filmroll"
import ButtonMain from '../components/ButtonMain'

import VolleyballImage from '../assets/IMG_0281.JPG'
import CameraImage from '../assets/P1244470.jpg'

function MainPage() {
  return (
    <>
      <Texts text="Photo me"></Texts>
      <div>
        <h3>Привіт!</h3>
        <p className='text-normal'>Я тут, щоб зробити для тебе знімки, які передадуть не лише твою неймовірну красу, а й твою особистість </p>
      </div>

      <Filmroll src={VolleyballImage} alt="волейбол"></Filmroll>
      
      <div className='main-btns'>
        <ButtonMain text="запис" />
        <ButtonMain text="портфоліо" />
        <ButtonMain text="акаунт" />
        <ButtonMain text="про мене" />
      </div>

      <Filmroll src={CameraImage} alt="фото камери"></Filmroll>
      
      <div>
        <h3>Трохи про процес</h3>
        <p className='text-normal'>Якщо у тебе зйомка зі мною, то будь готова:</p>
        <ol className= "list">
          <li>Підготовка також важлива. Потрібно підготувати референси, образ та місце (це дуже весело і я із задоволенням з цим допоможу)</li>
          <li>Підчас фотосесії: не переживай якщо не знаєш як поводитись перед камерою. По-перше, завжди є референси, та і я поряд готова допомогти. По-друге, я ввімкну музику і будемо разом танцювати (отримаєш кадри у русі) або ж просто спокійні пісні, які допоможуть тобі розслабитись.</li>
          <li>Після фотосесії ти отрмаєш 40 відретушованих кадрів. Терміни: до 2 тижнів.</li>
          <li>Я за креатив! Просто опиши мені ідею і я зроблю усе щоб втілити її у реальність</li>
        
        </ol>
      </div>
     

    </>
  )
}

export default MainPage
