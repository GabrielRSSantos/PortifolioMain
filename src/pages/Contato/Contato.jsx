import { Button, Container, Formdiv, Input, Label } from './styles';
import './Contato.css';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contato() {
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');
    var objectMensagem = {
        nome: nome,
        email: email,
        telefone: telefone,
        mensagem: mensagem
    };

    const handleTelefone = (e) => {
        let valor = e.target.value.replace(/\D/g, '');
        valor = valor.slice(0, 11);
        valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
        valor = valor.replace(/(\d)(\d{4})$/, '$1-$2');
        setTelefone(valor);
    };

    function sendEmail() {

        if (nome === '' || email === '' || telefone === '' || mensagem === '') {
            alert('Preencha todos os campos!');
            return;
        }

        const template = {
            from_name: nome,
            message: mensagem,
            email: email,
            telefone: telefone
        }

        emailjs.send("service_hb0uikn", "template_x5p3h7j", template, "Ag2wHeIhKwlEtbKx9")
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setEmail('');
                setNome('');
                setTelefone('');
                setMensagem('');
            }, (error) => {
                console.log('FAILED...', error);
            });

    }

    return (
        <Container>
            <h1 style={{ fontSize: '70px' }}>Entre em contato</h1>

            <Formdiv>
                <Label>Nome</Label>
                <Input
                    type="text"
                    placeholder='Gabriel Ribeiro Da Silva Santos'
                    id="fname"
                    name="fname"
                    onChange={(e) => setNome(e.target.value)}
                    value={nome}
                />
            </Formdiv>

            <Formdiv>
                <Label>Email</Label>
                <Input
                    type="text"
                    placeholder='Gabrielsantos.new@gmail.com'
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Formdiv>

            <Formdiv>
                <Label>Telefone</Label>
                <Input
                    type="text"
                    placeholder='(15) 98171-2493'
                    id="tel"
                    name="tel"
                    value={telefone}
                    onChange={handleTelefone}
                />
            </Formdiv>

            <Formdiv>
                <Label>Sua mensagem</Label>
                <textarea
                    id="mensagem"
                    placeholder='Insira aqui a mensagem que deseja me enviar!'
                    name="mensagem"
                    rows="10"
                    cols="33"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                />
            </Formdiv>

            <div style={{padding:'1rem', width:'70%'}}>

                <Button onClick={() => sendEmail()}>
                    <h1 style={{ color: 'white' }}>Enviar</h1>
                </Button>
            </div>
        </Container>
    )
}