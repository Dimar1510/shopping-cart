import TextField from "@mui/material/TextField";

export default function Subscribe() {
  return (
    <div className="subscribe-input">
      <TextField
        sx={{
          "& .MuiInputLabel-outlined": {
            color: "#000000",
            height: "40px",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderRadius: 0,
              borderColor: "black",
            },
          },
        }}
        id="outlined-basic"
        label="Email"
        variant="outlined"
        placeholder="Enter your email here"
        size="small"
      />
      <button className="btn-subscribe">Subscribe</button>
    </div>
  );
}
