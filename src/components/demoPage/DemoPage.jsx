import React from 'react';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import Dropdown from '../common/Dropdown';
import SearchField from '../searchField/searchField';
import CategorySearchField from '../searchField/categorySearchField';
import Checkbox from '../common/Checkbox';
import Checklist from '../common/Checklist';
import RichGridDeclarativeExample from "../gridRichDataExample/RichGridDeclarativeExample";
import MerckButton from '../common/button/Button';
import AddWhite from '../../icons/ic-add-white.svg';

function DemoPage() {
  return (
    <div>
        <MerckButton image={AddWhite} label='Primary' variant='default' size='sm'/>
        <MerckButton label='Secondary' variant='secondary' size='sm'/>
        <MerckButton label='Third' variant='tertiary' size='sm'/>
      <Input />
      <Input disabled={true} />
      <Input label='Form Label' />
      <SearchField />
      <CategorySearchField label="Search Field" />
      <Textarea label='Text (Optional)' />
      <Dropdown label='Dropdown' />
      <Checkbox label='Checkbox'/>
      <Checklist label='Checklist' list={['Option 1', 'Option 2', 'Option 3']}/>
      <div className="grid">
        <RichGridDeclarativeExample />
      </div>
    </div>
  );
}

export default DemoPage;
