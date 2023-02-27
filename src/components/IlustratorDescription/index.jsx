import './styles.css';
import { FaPaintBrush } from 'react-icons/fa'
export const IlustratorDescription  = () => {
    return (
        <section className='section-one'>
            <div className="description">
                <h1> Repositório de Ilustrações</h1>
                <p>Sessão dedicada para compartilhar Ilustrações e Logos que fiz em trabalhos acadêmicos ou em freelancers</p>
                <p>Você pode acompanhar as ilustraçoes também no meu instagram dedicado a desenhos: </p>
            </div>

            <div container-brush>
                <FaPaintBrush className='icon-brush'/>
            </div>
        </section>
    )
}