import { useState } from "react";

function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: ""
  });

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  const validPhone = /^09[0-9]{8}$/.test(form.phone);

  function handleSubmit(event) {
    event.preventDefault();
    alert("Order submitted!");
  }

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <h2>Delivery Information</h2>

      <input
        name="name"
        placeholder="Your name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="TeleBirr number"
        value={form.phone}
        onChange={handleChange}
      />

      <input
        name="area"
        placeholder="Your area"
        value={form.area}
        onChange={handleChange}
      />

      <button
        type="submit"
        disabled={!form.name || !form.area || !validPhone}
      >
        Place Order
      </button>
    </form>
  );
}

export default OrderForm;