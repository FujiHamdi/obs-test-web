import React from 'react';
import { User } from '../../../types/types';
import { Backdrop, Modal, Zoom, Grid, List, Box, ListItem, Divider, Avatar, Typography } from '@mui/material';


interface UserModalProps {
    isOpen: boolean;
    handleClose: () => void;
    selectedUser: User | null;
}

const UserModal: React.FC<UserModalProps> = ({ isOpen, handleClose, selectedUser }) => {
    if (!selectedUser) return null;
    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Zoom in={isOpen}>
                <Box
                    sx={{
                        position: 'fixed',
                        transform: 'translate(-50%, -50%)',
                        width: { xs: '70%', sm: '60%', md: '35%' },
                        backgroundColor: 'white',
                        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
                        padding: '1rem',
                    
                        top: { xs: '30%', sm: '25%', md: '20%' },
                        left: { xs: '5%', sm: '15%', md: '30%' },

                        justifyContent: 'center',
                        display: 'flex',
                        borderRadius: '15px',
                        border: '15px solid blanchedalmond'
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <Grid item xs={12}>
                        <Typography fontWeight={700} color='primary' sx={{ mb: 2, textAlign: 'center' }} variant="h6" component="div">
                            User Details </Typography>
                        <Divider />
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                        }}>
                            <Avatar src={selectedUser.avatarUrl}
                            sx={{
                                width: { xs: '180px', sm: '180px' },
                                height: '180px',
                                mr: '20px',
                                ml: '20px'
                            }}
                            />
                        {selectedUser && (
                                <List>
                                    <ListItem>
                                        <Typography color='primary'> <span style={{ marginRight: '10px' }}> Name</span> : {selectedUser.name ? selectedUser.name : '-'}</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography color='primary'> <span style={{ marginRight: '12px' }}> Email</span> : {selectedUser.email ? selectedUser.email : '-'}</Typography>

                                          </ListItem>
                            <ListItem>
                            <Typography  color='primary'> <span style={{ marginRight:'25px'}}> City</span> : {selectedUser.address ? selectedUser.address.city : '-'}</Typography>

                            </ListItem>
                            <ListItem>  
                            <Typography  color='primary'> <span style={{ marginRight:'7px'}}> Phone </span> : {selectedUser.phone ? selectedUser.phone : '-'}</Typography>

                            </ListItem>
                            <ListItem>  
                            <Typography  color='primary'> <span style={{ marginRight:'6px'}}> Company </span> : {selectedUser.company ? selectedUser.company.name : '-'}</Typography>

                            </ListItem>
                        </List>
                    )}
                    </Box>
                </Grid>
            </Box>
        </Zoom>
    </Modal>
);
}

export default UserModal;