import TextField from '@mui/material/TextField';
import PropTypes from "prop-types";

export default function SearchField({setSearch, search}) {
  return (
      <div className="sort-select">
          <TextField
            sx={{
              "& .MuiInputLabel-outlined": {
                color: "#000000",
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
     
                },
                '&:hover fieldset': {
                  borderColor: 'black',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'black',
                },
              },
            }}
            id="search" 
            label="Search..." 
            variant="outlined" 
            value={search}

            onChange={(e)=>{
                setSearch(e.target.value.trim())
            }}
        />

      </div>
  );
}

SearchField.propTypes = {
  setSearch: PropTypes.func,
  search: PropTypes.string
}