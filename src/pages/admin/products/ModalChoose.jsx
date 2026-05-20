import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Tooltip,
} from "@mui/material";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { styled } from '@mui/material/styles';
import { ContextFeatures } from "../../../contexts/FeaturesProvider";
import { useContext } from "react";
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

export default function ModalChoose({
    openChoose,
    handleCloseOpenChoose,
    handleChoose,
    product,
    handleDeleteFeature
}) {
    const features = useContext(ContextFeatures);
    const showFeature = (id) => {
        const item = product.list_feature.find(e => e.id == id);
        return item?.quantity;
    }
    return (
        <Dialog fullWidth open={openChoose} onClose={handleCloseOpenChoose}>
            <DialogTitle>
                Chọn tiện ích
            </DialogTitle>
            <DialogContent>
                <div className="grid grid-cols-8 gap-3 mt-5">
                    {features.map((item, index) => (
                        <div onClick={() => handleChoose(item.id)} className="col-span-1 relative">
                            {
                                showFeature(item.id) ?
                                    <>
                                        <div onClick={(e) => handleDeleteFeature(e,item.id)} className="absolute top-0 right-0 translate-x-1 -translate-y-1 text-xl hover:text-2xl text-red-500 "><RiDeleteBin5Fill /></div>
                                        <div className="w-5 top-0 -translate-1 left-0 flex justify-center text-white items-center rounded-full absolute h-5 bg-blue-500">
                                            {showFeature(item.id)}
                                        </div>
                                    </> : ""
                            }
                            <Tooltip title={item.name}>
                                <img className="w-full h-full" src={item.imgUrl} alt="" />
                            </Tooltip>
                        </div>
                    ))}
                </div>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleCloseOpenChoose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}