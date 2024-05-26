import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';

export default function SortSelect({sort, setSort, handleAscend}) {


    const handleChange = (event) => {
        setSort(event.target.value);
    };

    return (
        <div className="sort-select">
            <Box sx={{ width: 200 }}>
            <FormControl fullWidth>
                <InputLabel id="select-label" style={{color:'black'}}>Sort</InputLabel>
                <Select
                labelId="select-label"
                id="sort"
                value={sort}
                label="sort"
                onChange={handleChange}
                >
                <MenuItem value={'default'}>Popularity</MenuItem>
                <MenuItem value={'price_low'}>Price</MenuItem>
                <MenuItem value={'roast_low'}>Roast</MenuItem>
                </Select>
            </FormControl>
            </Box>
            <button
                className="btn-filter"
                onClick={handleAscend}
            >
                <SwapVertOutlinedIcon/>
            </button>
        </div>
    );
}