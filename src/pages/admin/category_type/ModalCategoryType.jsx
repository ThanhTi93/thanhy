import { Autocomplete, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { Categories } from "../../../utils/Contants";

export default function ModalCategoryType({
  handleClose,
  open,
  onchangeInput,
  saveCateType,
  cateType,
  error,
}) {
  return (
    <Dialog fullWidth="md" open={open} onClose={handleClose}>
      <DialogTitle>
        {cateType.id ? "Edit Cate Type" : "Add Cate Type"}
      </DialogTitle>

      <DialogContent>
        <Autocomplete
          disablePortal
          fullWidth
          sx={{ mt: 2 }}
          options={Object.keys(Categories)}
          getOptionLabel={(option) => Categories[option]}
          renderInput={(params) => (
            <TextField {...params} label="Category" />
          )}
          onChange={(event, value) => {
            onchangeInput({
              target: { name: "category", value: value || "" },
            });
          }}
        />
        <TextField
          label="Name"
          fullWidth
          sx={{ mt: 2 }}
          name="name"
          onChange={onchangeInput}
          value={cateType.name}
          error={!!error.name}
          helperText={error.name}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={saveCateType}>
          {cateType.id ? "UPDATE" : "ADD"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}