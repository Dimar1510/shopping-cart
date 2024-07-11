import TextField from "@mui/material/TextField";

export default function Subscribe() {
  return (
    <div className="flex items-center">
      <TextField
        sx={{
          "& .MuiInputLabel-outlined": {
            color: "#000000",
            height: "40px",
          },

          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderRadius: 0,
              borderColor: "#000000",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#000000",
            },
          },
        }}
        id="outlined-basic"
        label="Email"
        variant="outlined"
        placeholder="Enter your email here"
        size="small"
      />
      <button className="border border-solid border-text-clr h-[40px] px-4 border-l-0 uppercase transition-colors hover:bg-text-clr hover:text-body-clr text-sm">
        Subscribe
      </button>
    </div>
  );
}
