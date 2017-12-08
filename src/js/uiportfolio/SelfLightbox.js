import React from 'react';
import Lightbox from 'react-images';

export default class SelfLightbox extends React.Component {
  constructor(props){
  	super(props);
  	this.state = Object.assign({
  		isLightboxOpen: false,
      currentImage: 0
  	});
  }
  gotoNext(){
    this.setState({currentImage: this.state.currentImage + 1});
  }
  gotoPrevious(){
    this.setState({currentImage: this.state.currentImage - 1});
  }
  toggleLightbox(){
  	this.setState({isLightboxOpen: !this.state.isLightboxOpen})
  }

  showHoverText(){
    this.setState({showHoverText: true})
  }
  hideHoverText(){
    this.setState({showHoverText: false})
  }
  render(){
  	 return (
      <div className="self-lightbox">
        <div className="self-lightbox-preview">
        {(this.props.previewImages) ? 
          this.props.previewImages.map((img, i) => {
                  return ( <img className="lightbox-preview" src={img} key={i} height={this.props.previewHeight} onClick={this.toggleLightbox.bind(this)}/>)
                }) :
          this.props.images.map((img, i) => {
                  return ( <img className="lightbox-preview" src={img.src} key={i} height={this.props.previewHeight} onClick={this.toggleLightbox.bind(this)}/>)
                })}
        </div>
        <Lightbox
          images={this.props.images}
          isOpen={this.state.isLightboxOpen}
          onClose={this.toggleLightbox.bind(this)}
          onClickPrev={this.gotoPrevious.bind(this)}
          onClickNext={this.gotoNext.bind(this)}
          currentImage={this.state.currentImage}
          backdropClosesModal={true}
        />
      </div>
    );
  }
}