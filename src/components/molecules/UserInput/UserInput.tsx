import { Grid, Typography, TextField, Button, Paper } from '@mui/material';
import { User } from '../../../types/types';

interface UserModalProps {
    setNewUser: () => void;
    newUser: User | null;
    mutate: () => void;
    isEdit: number | null;
}

const UserInput: React.FC<UserModalProps> = ({ newUser, setNewUser, mutate, isEdit }) => {

    return (
        <>
                    <Grid sx={{ width: '100%' }} item xs={12} md={6}>

        <Typography fontSize='40px' fontWeight={700} sx={{ mb: '10px', mt:'15px',
        fontSize: '2rem'
    }}> Form Register </Typography>

        <Paper sx={{ padding: '30px', marginLeft: '50px', height: '400px', maxWidth: '500px',
  minWidth: '330px'}}>
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        value={newUser ?.name || ''}
                        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        type="email"
                        value={newUser ?.email || ''}
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="City"
                        variant="outlined"
                        value={newUser ?.address.city || ''}
                        onChange={(e) => setNewUser({
                            ...newUser,
                            address: { ...newUser.address, city: e.target.value },
                        })}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Phone"
                        variant="outlined"
                        type="tel"
                        value={newUser ?.phone || ''}
                        onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}

                    />

                </Grid>

                <Grid item xs={12} md={6}>

                    <TextField
                        fullWidth
                        label="Company"
                        variant="outlined"
                        value={newUser?.company.name || ''}
                        onChange={(e) => setNewUser({
                            ...newUser,
                            company: { ...newUser.company, name: e.target.value },
                        })}

                    />

                </Grid>

                <Grid item xs={12}>
                    <Button
                        sx={{ mt: '30px', width: '100%', color: 'black', backgroundColor: 'orange' }}
                        variant='contained'
                        onClick={mutate}
                    >
                        {isEdit ? 'Update Data' : 'Add User'}
                    </Button>
                </Grid>
            </Grid>
        </Paper>
        </Grid>
        </>

    )

}

export default UserInput;