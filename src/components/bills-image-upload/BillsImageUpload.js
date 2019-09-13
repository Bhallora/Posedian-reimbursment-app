import React, { Component } from 'react'
import { DropzoneArea } from 'material-ui-dropzone'



class BillsImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: []
        };
    }
    handleChange(files) {
        this.setState({
            files: files
        });
    }

    render() {
        return (
            <DropzoneArea className='root'
                onChange={this.handleChange.bind(this)}
            />
        )
    }
}

export default BillsImageUpload;