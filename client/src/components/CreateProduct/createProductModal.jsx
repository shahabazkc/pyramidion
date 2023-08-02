import React, { useEffect, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';

const CreateProductModal = ({ onSubmitted,setOnSubmitted, open, onClose, onCreateProduct }) => {

  
  const initialProductData = {
    name: '',
    category: '',
    description: '',
    price: '',
    short_description: '',
    seller: '',
  };

  useEffect(() => {
    if (onSubmitted) {
      setProductData(initialProductData);
      setOnSubmitted(false);
    }
  }, [onSubmitted]);
  
  const [productData, setProductData] = useState(initialProductData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCreate = () => {
    onCreateProduct(productData);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create New Product</DialogTitle>
      <DialogContent>
        {Object.keys(initialProductData).map((key) => (
          <TextField
            key={key}
            name={key}
            label={key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')}
            value={productData[key]}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleCreate} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateProductModal;
