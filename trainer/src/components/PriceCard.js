import React from 'react'

const PriceCard = ({card = null, containerClassName = 'col-lg-4 col-md-8'}) => {

  if(card === null){
    return null
  }

  return (
    <div className={containerClassName} key={card.title + '-' + card.new_price}>
      <div className="ps-item">
        {
          <h3 className='ps-item_h3'>
            {card?.title}
            <p>
              <b>
                {card?.title_help || <br />}
              </b>
              <br />
              <small>
                {card?.subtitle || <br />}
              </small>
            </p>
          </h3>
        }
        <br />
        {
          (card?.new_price || card?.old_price) &&
          <div className="pi-price" style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
            {
              card?.old_price &&
              <h3 style={{ textDecoration: 'line-through', transform: 'skewY(0)' }}>
                ${card?.old_price}
              </h3>
            }
            {
              card?.new_price &&
              <h2>
                ${card?.new_price}
                <small style={{ fontSize: 16 }}>
                  {card?.price_group && 'c/u'}
                </small>
              </h2>
            }
          </div>
        }
        <ul>
          {
            card?.items?.map((item, index) => {
              if (index === (card.items.length - 1)) {
                return <li key={card?.title + '-' + item + '-' + index}><small>{item}</small></li>
              }
              return <li key={card?.title + '-' + item + '-' + index}>{item}</li>
            })
          }
        </ul>
        {
          card?.button &&
          <a
            href={card?.button_link}
            className="primary-btn pricing-btn"
            //target="_blank" 
            rel="noreferrer"
          >
            {card?.button}
          </a>
        }

      </div>
    </div>
  )
}

export default PriceCard