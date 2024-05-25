// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import { useEffect, useState } from 'react';

// export default function FilterSelector({name, setProducts, products}) {

//   const [filter, setFilter] = useState('');

//   const handleChange = (event) => {
//     setFilter(event.target.value);
//   };

//   useEffect(()=>{
//     const filteredProducts = [...products]
//     switch (filter) {
//         case 'light':
//             setProducts(filteredProducts.filter(item => item.roast_level < 3))
//             break;
    
//         default:
//             break;
//     }
//   }, [filter])

//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl fullWidth>
//         <InputLabel className='filter-input-label'>Roast level</InputLabel>
//         <Select
//           labelId="select-label"
//           value={filter}
//           label="Roast"
//           onChange={handleChange}
//         >
//           <MenuItem value={'light'}>Light</MenuItem>
//           <MenuItem value={'medium'}>Medium</MenuItem>
//           <MenuItem value={'dark'}>Dark</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }

import { useEffect, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

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

const names = [
  'Light',
  'Medium',
  'Dark',

];

export default function FilterSelector({allProducts, setProducts, products, handleSort}) {
  

  const [filter, setFilter] = useState([]);


  useEffect(()=> {
    if (filter.length === 0) {
      setProducts([...allProducts])
      return
    }
    const tempProducts = []
    for (let item of filter) {
      if (item === 'Light') {
        tempProducts.push(...allProducts.filter(item => item.roast_level < 3))

      }
      if (item === 'Medium') {
        tempProducts.push(...allProducts.filter(item => item.roast_level === 3))

      }
      if (item === 'Dark') {
        tempProducts.push(...allProducts.filter(item => item.roast_level > 3))
      }
    }
   
    handleSort(tempProducts)
    setProducts([...tempProducts])
 
    console.log(products)
  }, [filter])
  


  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setFilter(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel className='filter-input-label'>Roast</InputLabel>
        <Select
          labelId="input-roast-label"
          className="multiple-checkbox"
          multiple
          value={filter}
          onChange={handleChange}
          input={<OutlinedInput label="roast" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={filter.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}