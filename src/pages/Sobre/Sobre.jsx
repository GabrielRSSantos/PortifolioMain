import { Container, ImageContainer, Left, Right } from './styles';
import './Sobre.css';
import foto from '../../assets/Imagem1_Semfundo.png';

export default function Sobre() {
    return (
        <Container>
            <Left>
                    <h1>Olá, Bem vindo(a)</h1>

                    <h2>
                        Meu nome é Gabriel, sou desenvolvedor front-end e estou sempre em busca de novos desafios.
                        Aqui você vai encontrar um pouco sobre mim e sobre o que eu faço.
                    </h2>
                    <h2>
                        Atualmente estou estudando ReactJS e NodeJS e integração com ChatGPT, e estou sempre em busca de novos conhecimentos.
                    </h2>
                    <h2>
                        Trabalho com desenvolvimento web a mais de 4 anos, e tenho experiência com as tecnologias HTML, CSS, JavaScript, ReactJS, NodeJS, MySQL, MongoDB, Git, GitHub, entre outras.
                        Atualmente trabalho na empresa Capgemini onde minha função é analisar logs e promover reparos e melhorias no sistema, utilizando as linguagens C#, C++ e Javascript,
                        utilizo também Jira, Bitbucket, GitHub e mais...
                    </h2>
                    <h2>
                        Um dos meus hobbies é desenvolver games na Godot Engine além de jogar também :D
                    </h2>
                    <h2>
                        Caso tenha gostado do meu perfil, entre em contato comigo. estou aberto a novas experiências e desafios.
                    </h2>

            </Left>

            <Right>
                {/* <Slides /> */}
                <ImageContainer >
                    <img style={{ objectFit: 'cover', width: '500px', height: '500px' }} src={foto} />
                </ImageContainer>
            </Right>
        </Container>
    )
}

