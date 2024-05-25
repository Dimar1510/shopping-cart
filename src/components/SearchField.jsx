import TextField from '@mui/material/TextField';

export default function SearchField({setSearch, search}) {
  return (
      <div className="sort-select">
          <TextField
            id="outlined-basic" 
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