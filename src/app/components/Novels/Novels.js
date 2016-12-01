import React from 'react';
import { connect } from 'react-redux';

import MainLayout from '../Common/MainLayout';

import SearchBar from './SearchBar';
import NovelList from '../Common/NovelList';


import { initializeDbListWith } from '../../actions/listActions';

import db from '../../db';

class Novels extends React.Component {
  componentDidMount(){
    db.novels.toArray()
      .then((v)=> this.props.initializeDbListWith(v));
  }
  render () {
    return (
      <div>
        <header>
          <SearchBar/>
        </header>
        <MainLayout mainComponent={(<NovelList/>)}/>
      </div>
    );
  }
};

export default connect(
  null,
  { initializeDbListWith }
)(Novels);
