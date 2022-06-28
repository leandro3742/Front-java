import { PayPalButtons } from "@paypal/react-paypal-js";
import React from "react";

function PaypalCheckoutButton(props) {
    const { product } = props;
    const handleApprove = (orderId) => {

    }
    return (
        <PayPalButtons
        style={{
            color: "silver",
            layout: "horizontal",
            height: 48,
            tagline: false,
            shape: "pill",
        }}

        createOrder={(data, actions) => {
            console.log("entra")
            console.log(product)
            return actions.order.create({
            purchase_units: [
                {
                description: product.descripcion,
                amount: {
                    currency_code: 'USD',
                    value: product.precio,
                },
                },
            ],
            application_context: {
                brand_name: "Mantel"
            }
            });
        }}

        onApprove={async (data, actions) => {
            const order = await actions.order.capture();
            console.log("order", order);

            handleApprove(data.orderID);
        }}

        onError={(err) => {
            setError(err);
            console.error("PayPal Checkout onError", err);
        }}
        />
    );
}

export default PaypalCheckoutButton;
