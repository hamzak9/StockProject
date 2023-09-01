import { Button, Container, Heading } from "@chakra-ui/react";
// import axios from "axios";
// import { useState } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import classes from './stockOrderButton.module.css';

 export const StockOrderButton = ({ orderType, operationName }) => {
  const orderStock = async (orderInfo) => {
    const url = `http://localhost:8080/api/portfolio/${orderType}`;
    try {
      const response = await axios.post(url, orderInfo);
      // if(response.status === 200){
      //   alert("Transaction complete");
      // }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const hasNumber = (stockTicker) => {
    return /\d/.test(stockTicker);
  };

  const validateSharesAmt = (value) => {
    let error;
    if (!value) {
      error = "Number is required";
    } else if (!hasNumber(value)) {
      error = "Jeez! You need positive numbers 😱";
    } else if (value <= 0) {
      error = "Jeez! You need positive numbers 😱";
    }
    return error;
  };

  const validateStockTicker = (value) => {
    let error;
    if (!value) {
      error = "Stock ticker is required";
    } else if (hasNumber(value)) {
      error = "Jeez! No numbers 😱";
    }
    return error;
  };

  return (
    <div className={classes.cashorder}>
    <p>{operationName}</p>
    <Formik
      initialValues={{ symbol: "AAPL", shares: 1 }}
      onSubmit={(values, actions) => {
        const orderInfo = {
          symbol: values.symbol,
          shares: values.shares,
        };
        orderStock(orderInfo);
        actions.setSubmitting(false);
      }}
    >
      {(props) => (
        <Form>
          <section className={classes.balance}>
          <div className="input-row">
            
            <div className="input-field">

              <Field name="symbol" validate={validateStockTicker}>
                {({ field, form }) => (
                  <div>
                    <label>Stock Ticker</label>
                    <input {...field} placeholder="symbol" />
                    {form.errors.symbol && form.touched.symbol && (
                      <div className="error">{form.errors.symbol}</div>
                    )}
                  </div>
                )}
              </Field>
              
            </div>
            
            <div className="input-field">
              <Field name="shares" validate={validateSharesAmt}>
                {({ field, form }) => (
                  <div>
                    <label>Amount</label>
                    <input {...field} placeholder="shares" />
                    {form.errors.shares && form.touched.shares && (
                      <div className="error">{form.errors.shares}</div>
                    )}
                  </div>
                )}
              </Field>
              
            </div>
          </div>
          
          <div className="submit-button">
            <button
              type="submit"
              className="btn-submit"
              disabled={props.isSubmitting}
            >
              Submit
            </button>
            
          </div>

          </section>

        </Form>
        
      )}
      
    </Formik>
  </div>
  
  );
};