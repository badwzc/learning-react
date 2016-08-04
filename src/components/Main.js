require('normalize.css/normalize.css');
require('styles/App.scss');
import React from 'react';

//获取图片信息
let imageData = require('json!../data/imageData.json');

//图片添加地址
imageData = (function(imageDataArr){
    for (let i = 0, l = imageDataArr.length;i < l; i++) {
        let singleImageData = imageDataArr[i]
        singleImageData.imageURL = require('../images/' + singleImageData.fileName);
    }
    return imageDataArr
})(imageData)


class ImgFigure extends React.Component {
    render() {
        return (
            <figure>
                <img src={this.props.data.imageURL} alt={this.props.data.title}/>
                <figcaption>
                    <h2>{this.props.data.title}</h2>
                </figcaption>
            </figure>
        );
    }
}

class AppComponent extends React.Component {

    componentDidMount() {

    }
    render() {
        let controlerUnits = [],
           imgFigures = [];
        imageData.forEach(function(value){
            imgFigures.push(<ImgFigure data={value}></ImgFigure>)
        })

        return (
            <section className="stage">
                <section className="img-sec">
                    {imgFigures}
                </section>
                <nav className="controller-nav">
                    {controlerUnits}
                </nav>
            </section>
        );
    }
}


AppComponent.defaultProps = {
};

export default AppComponent;
