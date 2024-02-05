import * as React from "react";
import PropTypes from "prop-types";

const Pricing = ({ data }) => (
  <div className="columns" style={{flexWrap: 'wrap'}}>
    {data.map((price) => (
      <div key={price.plan} className="column is-half-desktop">
        <section className="section">
          <h2 className="has-text-primary has-text-weight-semibold">
            {price.plan}
          </h2>
          <h6 className="is-size-6 has-text-weight-bold">
            ₹{price.price}
          </h6>
          <p className="has-text-weight-semibold">{price.description}</p>
          <ul>
            {price.items.map((item) => (
              <li key={item} className="is-size-5">
                {item}
              </li>
            ))}
          </ul>
        <a className="button is-primary" target="_blank" href={`https://api.whatsapp.com/send?phone=918921699552&text=Hi%20Leena%60s%20Mushroom.%20I%20would%20like%20to%20buy%20${price.plan}%20`}>
          Buy Now
        </a>
        </section>
      </div>
    ))}
  </div>
);

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
};

export default Pricing;
