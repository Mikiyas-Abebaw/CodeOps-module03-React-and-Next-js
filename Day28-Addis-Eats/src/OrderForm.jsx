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
      <h2 id="delivery-info">Delivery Information</h2>

      <input id="name"
        name="name"
        placeholder="Your name"
        value={form.name}
        onChange={handleChange}
      />

      <input id="phone"
        name="phone"
        placeholder="TeleBirr number"
        value={form.phone}
        onChange={handleChange}
      />

      <input id="area"
        name="area"
        placeholder="Your area"
        value={form.area}
        onChange={handleChange}
      />

      <button id="submit-order"
        type="submit"
        disabled={!form.name || !form.area || !validPhone}
      >
        Place Order
      </button>
    </form>
  );
}

export default OrderForm;