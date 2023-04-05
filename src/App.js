import ProfileCard from './ProfileCard';
import AlexaImage from './Project Resources/alexa.png'
import SiriImage from './Project Resources/siri.png'
import CortanaImage from './Project Resources/cortana.png'

function App(){
    return (
        <div>
            <div>Personal Digital Assistants</div>


            <ProfileCard title='Alexa' handle="@alexa99" image = { AlexaImage }/>
            <ProfileCard title='Cortana' handle="@cortana32" image = { SiriImage }/>
            <ProfileCard title='Siri' handle="@Siri75" image = { CortanaImage } />
        </div>
    );
}

export default App;