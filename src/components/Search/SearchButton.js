import React from 'react';

import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import { white } from 'material-ui/styles/colors';


export default function SearchButton ({searchMethod}){
  return (
    <IconButton onClick={searchMethod} tooltip='Search'>
      <ActionSearch color={ white }　/>
    </IconButton>
  )
};