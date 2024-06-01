import { Box, Modal, Typography } from "@mui/material"
interface Props {
    openModal: any,
    setOpenModal: any,
    data: any
}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
export default function ModalRegistro(props: Props){
    const {openModal, setOpenModal} = props;

    const CloseModal = ()=>{
        setOpenModal(false);
    };
    return(
        <>
            <Modal 
                open={openModal}
                onClose={CloseModal}
                aria-labelledby="modal-modal-title"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" color={'#000'}>
                        {props.data[0].title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {props.data[0].description}
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}