import React,{ useState , useEffect} from "react" 
import { useNavigate, useLocation } from "react-router-dom"; 
import { tokens } from "../../theme"; 
import { Box, Button, TextField,useTheme, Typography} from "@mui/material"; 

const FormContact = () =>{
    const id = useLocation();
    console.log(id.state)
      const theme = useTheme();  
      const [data, setData] = useState()
      useEffect(() => {
        fetch("http://localhost:3333/Invoices")
        .then((data) => data.json())
        .then((data) => setData(data))
      }, [])
    return(
        <>
       <form>
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        >
              {/* <div>
      <TextField
        id="name"
        label="Name"
        value={name}
        onChange={handleNameChange}
        onBlur={handleBlur}
        error={nameError}
        helperText={nameError ? 'Name is required' : ''}
      />
    </div> */}
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="First Name"
            // onBlur={handleBlur}
            // onChange={handleChange}
            // value={data.name}
            name="name"
            // error={nameError}
            // helperText={touched.name && errors.name}
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Age"
            // onBlur={handleBlur}
            // onChange={handleChange}
            // value={data.age}
            name="age"
            // error={nameError}
            // helperText={touched.age && errors.age}
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Email"
            // onBlur={handleBlur}
            // onChange={handleChange}
            // value={data.email}
            name="email"
            // error={nameError}
            // helperText={touched.email && errors.email}
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="phone Number"
            // onBlur={handleBlur}
            // onChange={handleChange}
            // value={data.phone}
            name="phone"
            // error={nameError}
            // helperText={touched.phone && errors.phone}
            sx={{ gridColumn: "span 4" }}
          />
          </Box>
        <Box display="flex" justifyContent="end" mt="20px">
          <Button type="submit" color="secondary" variant="contained">
            Create New User
          </Button>
        </Box>
      </form>
        </>
    )
}
export default FormContact;