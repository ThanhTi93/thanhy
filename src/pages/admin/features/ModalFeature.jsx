import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import { FaFileImage, FaSpinner } from "react-icons/fa";
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function ModalFeature({
    handleClose,
    open,
    onchangeInput,
    saveFeature,
    feature,
    error,
    onChangeImg,
    loading
}) {
    return (
        <Dialog fullWidth open={open} onClose={handleClose}>
            <DialogTitle>
                {feature.id ? "Edit Feature" : "Add Feature"}
            </DialogTitle>

            <DialogContent>
                <TextField
                    label="Name"
                    fullWidth
                    sx={{ mt: 2 }}
                    name="name"
                    onChange={onchangeInput}
                    value={feature.name}
                    error={!!error.name}
                    helperText={error.name}
                />
                <div className="mt-3">
                    <Button
                        component="label"
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<FaFileImage />}
                    >
                        Chọn ảnh
                        <VisuallyHiddenInput
                            type="file"
                            onChange={onChangeImg}
                        />
                    </Button>
                    <img className="w-50 h-45 mt-3 m-auto" src={feature.imgUrl} alt="" />
                </div>

            </DialogContent>

            <DialogActions>
                <Button variant="contained" color="secondary" onClick={handleClose}>Cancel</Button>
                <Button
                    onClick={saveFeature}
                    disabled={loading}
                    variant="contained"
                    className={`flex items-center gap-2 ${loading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                >
                    {loading && <FaSpinner className="animate-spin" />}

                    {loading
                        ? "Processing..."
                        : feature.id
                            ? "UPDATE"
                            : "ADD"}
                </Button>
            </DialogActions>
        </Dialog>
    );
}