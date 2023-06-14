import {
    GridToolbarContainer,
    GridToolbarExport,
    GridToolbarQuickFilter,
    GridToolbarDensitySelector,
    GridToolbarColumnsButton
  } from '@mui/x-data-grid';
  import { Button, Typography } from '@mui/material';
  import RefreshIcon from '@mui/icons-material/Refresh';
  import MobiledataOffIcon from '@mui/icons-material/MobiledataOff';
  
  import FilterButton from './FilterButton';
//   import ExportToCsv from '../../Helpers/CsvExport';
  
  export default function CustomToolbar({
    updateOnclick,
    filterOnClick,
    modalState,
  }) {
    return (
      <>        
        <GridToolbarContainer>
          <GridToolbarExport printOptions={{ disableToolbarButton: true }} />
          <GridToolbarDensitySelector />
          <GridToolbarColumnsButton />
          <Button
            size='small'
            onClick={() => updateOnclick()}
            startIcon={<RefreshIcon />}
          >
            Refresh Data
          </Button>
          <FilterButton filterOnClick={filterOnClick} modalState={modalState} />
          <Button
            size='small'
            onClick={async () => {
            //   await new ExportToCsv('customer_list').Download();
            }}
            startIcon={<MobiledataOffIcon />}
          >
            Full export
          </Button>
          <GridToolbarQuickFilter
            // autoFocus
            placeholder
            debounceMs={1000}
            sx={{
              right: { sm: 0 },
              position: { sm: 'absolute' },
              marginRight: { sm: '10px' },
            }}
          />
        </GridToolbarContainer>
      </>
    );
  }
  