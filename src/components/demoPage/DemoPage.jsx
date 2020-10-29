import React from 'react';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import Dropdown from '../common/Dropdown';
import SearchField from '../searchField/searchField';
import CategorySearchField from '../searchField/categorySearchField';
import RichGridDeclarativeExample from "../gridRichDataExample/RichGridDeclarativeExample";
import './DemoPage.css';

function DemoPage() {
  return (
    <div>
      <Input />
      <Input disabled={true} />
      <Input label='Form Label' />
      <SearchField />
      <CategorySearchField label="Search Field" />
      <Textarea label='Text (Optional)' />
      <Dropdown label='Dropdown' />
      <div className="grid">
        <RichGridDeclarativeExample />
      </div>
    </div>
  );
}

export default DemoPage;