import React from 'react';

function Libro(props) {
    
    const info = props.info;
    
    return (
        <div>
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                    {info.volumeInfo.imageLinks.smallThumbnail !== null ?
                        <img src={info.volumeInfo.imageLinks.smallThumbnail} alt={info.volumeInfo.title}/>
                        :''
                    }
                </div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">{info.volumeInfo.title}</h3>
                    <p>{info.volumeInfo.subtitle}</p>
                </div>
                <div className="uk-card-footer">
                    <a className="uk-button uk-button-secondary" href={info.volumeInfo.previewLink} target="_blank">Prevista</a>
                </div>
            </div>
        </div>
    );
}

export default Libro;
