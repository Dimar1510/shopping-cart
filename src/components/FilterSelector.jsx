import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import capitalize from '../utils/capitalize';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


export default function FilterSelector({categories, filter, setFilter, title}) {
  
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setFilter(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel className='filter-input-label' style={{color:'black'}}>{capitalize(title)}</InputLabel>
        <Select
          labelId={'input-label'+{title}}
          className="multiple-checkbox"
          multiple
          value={filter}
          onChange={handleChange}
          input={<OutlinedInput label={title}/>}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
          
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              <Checkbox 
                checked={filter.indexOf(category) > -1} 
                style={{color:'grey'}}
              />
              <ListItemText primary={category} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}