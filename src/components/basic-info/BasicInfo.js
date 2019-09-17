import React from 'react';
import TextBox from '../text-box/TextBox';
//import SaveButton from '../save-button/SaveButton';

import './basic-info.scss';
import { employee1 } from '../../dummy-data-object/dummy-data-object';


//import NameTag from '../name-tag/NameTag';


export default function BasicInfo() {
    return (<div>

        <div className="flex-basic-info-form">

            <div className="flex-basic-info">

                <TextBox name='Name' />
                <TextBox name='Employee ID' /> </div>

            {/* <div className='flex-basic-info-button'> */}

            {/* <SaveButton /> */}
            {/* </div> */}

        </div>
    </div>

    );
}

export function EditInfo() {
    return (<div>

        <div className="flex-basic-info-form">

            <div className="flex-basic-info">

                <TextBox name='Name' input={employee1.name} />
                <TextBox name='Employee ID' input={employee1.employeeCode} /> </div>

            {/* <div className='flex-basic-info-button'> */}

            {/* <SaveButton /> */}
            {/* </div> */}

        </div>
    </div>

    );
}