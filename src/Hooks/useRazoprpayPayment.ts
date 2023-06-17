import useRazorpay from "react-razorpay";
import axios from "axios";

const useRazoprpayPayment = () => {
  const Razorpay = useRazorpay();

  const handlePayment = async (params: any) => {
    const response: any = await axios.post("http://localhost:5000/order", {
      price: params.amount,
    }); //  Create order on your backend
    console.log(response.data);
    if (!response.data?.response) {
      console.log("error");
    } else {
      const options: any = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
        amount: response.data.response?.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Hasmukh foundation",
        description: "Donation",
        // image: "https://example.com/your_logo",
        order_id: response.data.response.id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
        handler: function (response: any) {
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature);
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new Razorpay(options);

      rzp1.on("payment.failed", function (response: any) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });

      rzp1.open();
    }
  };
  return handlePayment;
};
export default useRazoprpayPayment;
