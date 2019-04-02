import React from 'react';
import './ProfileMediaGrid.css';
import GridMedia from './GridMedia'
import GridDoc from './GridDoc';
import propTypes from 'prop-types';

export default class ProfileMediaGrid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [
                {
                    mediaImg: '6_jhon.jpg',
                    mediaImgName: 'jhon'
                },
                {
                    mediaImg: '6_jhon.jpg',
                    mediaImgName: 'jhon'
                },
                {
                    mediaImg: '6_jhon.jpg',
                    mediaImgName: 'jhon'
                },
                {
                    mediaImg: '6_jhon.jpg',
                    mediaImgName: 'jhon'
                },
                {
                    mediaImg: '6_jhon.jpg',
                    mediaImgName: 'jhon'
                }],
            videos: [
                {
                    mediaVideo: '6_jhon.jpg',
                    mediaVideoName: 'jhon'
                },
                {
                    mediaVideo: '6_jhon.jpg',
                    mediaVideoName: 'jhon'
                }
            ],

            documents: [
                {
                    mediaDocument: 'PDF_file_icon.svg',
                    mediaDocumentName: 'Book.pdf',
                    mediaDocumentDate: '18/01/2019'
                },
                {
                    mediaDocument: 'PDF_file_icon.svg',
                    mediaDocumentName: 'Book.pdf',
                    mediaDocumentDate: '18/01/2019'
                }
            ]
        }
    }


    render() {

        const { view } = this.props
        return (
            <div>
                {view === 'images' &&
                    <ul className="media-grid-profile">

                        {this.state.images.map((el, index) =>
                            <GridMedia
                                svg={el.mediaImg}
                                name={el.mediaImgName}
                                index={index}
                            />
                        )}
                    </ul>
                }

                {view === 'videos' &&
                    <ul className="media-grid-profile">
                        {this.state.videos.map((el, index) =>
                            <GridMedia
                                svg={el.mediaVideo}
                                name={el.mediaVideoName}
                                index={index}
                            />
                        )}
                    </ul>
                }

                {view === 'documents' &&
                    <div>
                        {this.state.documents.map((el, index) =>
                            <GridDoc
                                svg={el.mediaDocument}
                                name={el.mediaDocumentName}
                                date={el.mediaDocumentDate}
                                index={index}
                            />
                        )}

                    </div>

                }

            </div>
        )
    }
}

ProfileMediaGrid.propTypes = {
    view: propTypes.string.isRequired
}