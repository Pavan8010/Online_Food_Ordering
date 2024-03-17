import { Box, Button, Card, Divider, Grid, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import CartItem from "./CartItem";
import AddressCard from "./AddressCard";
import AddLocationIcon from "@mui/icons-material/AddLocation";
// import * as Yup from 'yup'
import { ErrorMessage, Field,Form,Formik } from "formik";
const item = [1, 1];
export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width:400,
  bgcolor: "background.paper",
  outline:"none",
  boxShadow: 24,
  p:4,
}
const initialValues = {
  StreetAddress: '',
  State: '',
  City : '',
  Pincode : ''
}

// const validationSchema = Yup.object.shape( {
//   StreetAddress: Yup.string().required("StreetAddress is required"),
//   State: Yup.string().required("State is required"),
//   City: Yup.string.required("City is required"),
//   Pincode: Yup.string().required("Pincode is required"),
// })

const Cart = () => {
  const createOrderUsingSelectedAddress = () => {};
  const handleOpenAddressModal = () => setOpen(true);
  const [open,setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleSubmit = (values) => {
    console.log("from value" , values)
  }
  return (
    <>
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
          {item.map((item) => (
            <CartItem />
          ))}
          <Divider />
          <div className="billDetails px-5 text-sm">
            <p className="font-extralight py-5 lg:ml-36">Bill Details</p>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-400">
                <p>Item Total</p>
                <p>₹599</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Delivery Fee</p>
                <p>₹21</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Gst and Restaurant Charges</p>
                <p>₹33</p>
              </div>
              <Divider />
            </div>
            <div className="flex justify-between text-gray-400 pt-3">
              <p>Total Pay</p>
              <p>₹3300</p>
            </div>
          </div>
        </section>
        <Divider orientation="vertical" flexItem />
        <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
          <div>
            <h1 className="text-center font-semibold text-2xl py-10">
              Choose Delivery Address
            </h1>
            <div className="flex flex-wrap gap-5 justify-center">
              {/* existing delivery address */}
              {[1, 1, 1].map((item) => (
                <AddressCard
                  handleSelectAddress={createOrderUsingSelectedAddress}
                  item={item}
                  showButton={true}
                />
              ))}
              {/* to add new delivery address */}
              <Card className="flex gap-5 w-64 p-5">
                <AddLocationIcon />
                <div className="space-y-3 text-gray-500">
                  <h1 className="font-semibold text-lg text-white">Add New Address</h1>
                    <Button variant="contained" fullWidth onClick={handleOpenAddressModal}>
                      Add
                    </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx = {style}>
          <Formik 
            initialValues={initialValues} 
            // validationSchema = {validationSchema} 
            onSubmit={handleSubmit}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="StreetAddress"
                      label="Street Address"
                      fullWidth
                      variant="outlined"
                      // error={!ErrorMessage("StreetAddress")}
                      // helperText = {
                      //   <ErrorMessage>
                      //     {(msg)=><span className="text-red-600">{msg}</span>}
                      //   </ErrorMessage>
                      // }
                    />
              
                  </Grid>
                  <Grid item xs={12} >
                    <Field
                      as={TextField}
                      name="State"
                      label="State"
                      fullWidth
                      variant="outlined"
                      // error={!ErrorMessage("streetAddress")}
                      // helperText = {
                      //   <ErrorMessage>
                      //     {(msg)=><span className="text-red-600">{msg}</span>}
                      //   </ErrorMessage>
                      // }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="City"
                      label="city"
                      fullWidth
                      variant="outlined"
                      // error={!ErrorMessage("streetAddress")}
                      // helperText = {
                      //   <ErrorMessage>
                      //     {(msg)=><span className="text-red-600">{msg}</span>}
                      //   </ErrorMessage>
                      // }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="Pincode"
                      label="Pin Code"
                      fullWidth
                      variant="outlined"
                      // error={!ErrorMessage("streetAddress")}
                      // helperText = {
                      //   <ErrorMessage>
                      //     {(msg)=><span className="text-red-600">{msg}</span>}
                      //   </ErrorMessage>
                      // }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" type="submit" color="primary">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Form>
          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default Cart;
