import CardSkill from '../../components/CardSkill/CardSkill';
import './Habilidade.css';
import { Container, CardContainer } from './styles';

export default function Habilidades() {
    return (
        <Container>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '5rem' }}>
                <h1>Habilidades</h1>
            </div>
            <CardContainer>
                <CardSkill
                    image="src/assets/html.png"
                    title="HTML / CSS / Javascript"
                    description="Desenvolvimento de sites responsivos, utilizando as tecnologias HTML, CSS e JavaScript."
                />

                <CardSkill
                    image="src/assets/React.png"
                    title="React Native / ReactJS"
                    description="Desenvolvimento de aplicativos mobile e web utilizando React Native e ReactJS."
                />

                <CardSkill
                    image="src/assets/Csharp.png"
                    title="C#"
                    description="Desenvolvimento de aplicações desktop e web utilizando a linguagem C#."
                />

                <CardSkill
                    image="src/assets/Flutter.png"
                    title="Flutter / Dart"
                    description="Desenvolvimento de aplicativos mobile multiplataforma utilizando Flutter e Dart."
                />

                <CardSkill
                    image="src/assets/git.png"
                    title="GIT / GitHub"
                    description="Controle de versão de código utilizando GIT e hospedagem de projetos no GitHub."
                />

                <CardSkill
                    image="src/assets/python.png"
                    title="Python"
                    description="Desenvolvimento de aplicações desktop e web utilizando a linguagem Python."
                />

                <CardSkill
                    image="src/assets/Java.png"
                    title="Java"
                    description="Desenvolvimento de aplicações desktop e web utilizando a linguagem Java."
                />
            </CardContainer>
        </Container >
    )
}