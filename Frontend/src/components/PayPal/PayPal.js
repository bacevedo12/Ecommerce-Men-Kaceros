import { useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer} from "@paypal/react-paypal-js";

const amount = "15";
const currency = "USD";
const style = {"layout":"vertical"};


const ButtonWrapper = ({ currency, showSpinner }) => {
 
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);


    return (<>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                           
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                      
                    });
                }}
            />
        </>
    );
}

export default function PayPal() {
	return (
		<div style={{ maxWidth: "750px", minHeight: "200px"}}>
            <PayPalScriptProvider
                options={{
                    "client-id": "AVx3UcHnRMBHQ_L3rZjZE0cI6wFvn1HcifiBzJGYPT7xyV4ntCWgdFpuk4fAVCOtV6CN5Sae-wsrNQ4X",
                    components: "buttons",
                    currency: "currency"
                }}
            >
				<ButtonWrapper
                    currency={currency}
                    showSpinner={false}
                />
			</PayPalScriptProvider>
		</div>
	);
}