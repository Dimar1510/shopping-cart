import TextField from '@mui/material/TextField';

export default function SearchField({setSearch, search}) {
  return (
      <div className="sort-select">
          <TextField
            sx={{
              "& .MuiInputLabel-outlined": {
                color: "#000000",
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