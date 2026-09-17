import React from 'react';
import ExportButton from './ExportButton';
import _ from '../common/i18n'

const Header = (props) => {
  let disabled = props.status === undefined ? true : false;

  return (
    <header className="header">
      <h1>{_("Ground Control Point Interface")}</h1>
      <ExportButton onClick={(evt)=>{props.onExportClick(evt);}} disabled={disabled}/>
    </header>
  );
}

export default Header;