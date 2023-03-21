import './styles.css';

export const LoaderComponent = () => {
    return (
        <div className="component-load">
            <div class="spinner-grow" role="status" id='load'>
                <span class="sr-only" id = 'load-icon'></span>
            </div>
        </div>
    )
}