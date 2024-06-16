import { CardSkillComponent } from './styles';

export default function CardSkill(props) {

    return (
        <div style={{padding:'0.5rem'}}>

            <CardSkillComponent>
                <img style={{ objectFit: 'cover', width: '100%', height: '50%', borderTopLeftRadius: '18px', borderTopRightRadius: '18px' }} src={props.image} />
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </CardSkillComponent>
        </div>
    );
};