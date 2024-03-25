import * as React from "react";
import PropTypes from "prop-types";
import {BuyNowButton} from '@ecwid/gatsby-plugin-ecwid';

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
        <BuyNowButton storeId="100250031" productId="636592355" isShowPrice={true} />
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
