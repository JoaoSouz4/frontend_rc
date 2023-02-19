import './styles.css';
export const IlustratorDescription  = () => {
    return (
        <div className='description-container'>
                <div className="title">
                    <h1> Repositório de Ilustrações</h1>
                    <p>Explore pelo títulos, genêros ou personagens na barra ao lado. Aqui estão ilustrações de 2021 até os dias de hoje.</p>
                    <p>Você pode acompanhar também no meu instagram dedicado a desenhos: </p>
                </div>

                <div className="search">
                    <input type="text" placeholder='Buscar um personagem...'/>
                </div>
            </div>
    )
}