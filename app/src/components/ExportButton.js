import React from 'react';
import _ from '../common/i18n'

const ExportButton = (props) => {
    return <button className='export-btn' onClick={props.onClick} disabled={props.disabled}>{_("Export file")}</button>
}

export default ExportButton;