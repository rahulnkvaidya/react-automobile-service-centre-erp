import React from 'react'

export default function logo(props) {
    var logo = 'https://ddegdof0m85kf.cloudfront.net/logo/' + props.children + '.jpg';
    return (
        <div>
            <img src={logo} width="50px;" alt="Employment News Logo" />
        </div>
    )
}
