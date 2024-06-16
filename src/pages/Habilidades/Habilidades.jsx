import CardSkill from '../../components/CardSkill/CardSkill';
import './Habilidade.css';
import { Container, CardContainer } from './styles';
import image1 from '../../assets/html.png';
import image2 from '../../assets/React.png';
import image3 from '../../assets/Csharp.png';
import image4 from '../../assets/Flutter.png';
import image5 from '../../assets/git.png';
import image6 from '../../assets/python.png';
import image7 from '../../assets/Java.png';

export default function Habilidades() {
    return (
        <Container>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '5rem' }}>
                <h1 style={{fontSize:'64px'}}>Habilidades</h1>
            </div>
            <CardContainer>
                
                <CardSkill
                    image={image1}
                    title="HTML / CSS / Javascript"
                    description="Desenvolvimento de sites responsivos, utilizando as tecnologias HTML, CSS e JavaScript."
                />

                <CardSkill
                    image={image2}
                    title="React Native / ReactJS"
                    description="Desenvolvimento de aplicativos mobile e web utilizando React Native e ReactJS."
                />

                <CardSkill
                    image={image3}
                    title="C#"
                    description="Desenvolvimento de aplicações desktop e web utilizando a linguagem C#."
                />

                <CardSkill
                    image={image4}
                    title="Flutter / Dart"
                    description="Desenvolvimento de aplicativos mobile multiplataforma utilizando Flutter e Dart."
                />

                <CardSkill
                    image={image5}
                    title="GIT / GitHub"
                    description="Controle de versão de código utilizando GIT e hospedagem de projetos no GitHub."
                />

                <CardSkill
                    image={image6}
                    title="Python"
                    description="Desenvolvimento de aplicações desktop e web utilizando a linguagem Python."
                />

                <CardSkill
                    image={image7}
                    title="Java"
                    description="Desenvolvimento de aplicações desktop e web utilizando a linguagem Java."
                />
            </CardContainer>
        </Container >
    )
}