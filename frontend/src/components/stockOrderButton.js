import { Box, Button, Container, Heading } from "@chakra-ui/react";
// import axios from "axios";
// import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { Field, Form, Formik } from "formik";

export const StockOrderButton = ({ orderType, operationName }) => {
  const orderStock = async (orderInfo) => {
    const url = `http://localhost:8080/api/portfolio/${orderType}`;
    try {
      const response = await axios.post(url, orderInfo);
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
    <Container>
      <Heading>{operationName}</Heading>
      <Formik
        initialValues={{ symbol: "APPL", shares: 1 }}
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
            <Field name="symbol" validate={validateStockTicker}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.symbol && form.touched.symbol}
                >
                  <FormLabel>Stock Ticker</FormLabel>
                  <Input {...field} placeholder="symbol" />
                  <FormErrorMessage>{form.errors.symbol}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="shares" validate={validateSharesAmt}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.shares && form.touched.shares}
                >
                  <FormLabel>Amount</FormLabel>
                  <Input {...field} placeholder="shares" />
                  <FormErrorMessage>{form.errors.shares}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme="blue"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
