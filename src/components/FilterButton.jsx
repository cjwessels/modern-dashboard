import { Button } from '@mui/material';

import FindReplaceIcon from '@mui/icons-material/FindReplace';
const FilterButton = ({ filterOnClick, modalState = 'isSet' }) => {
  return (
    <Button
      size='small'
      onClick={() => filterOnClick()}
    //   onClick={() => alert('You Clicked Me')}
      startIcon={<FindReplaceIcon />}
      sx={{
        color: modalState === 'notSet' ? '#354775' : '#ff2222',
      }}
    >
      {modalState === 'notSet' ? 'Set Filter' : 'Clear/Change Filter'}
    </Button>
  );
};

export default FilterButton;
