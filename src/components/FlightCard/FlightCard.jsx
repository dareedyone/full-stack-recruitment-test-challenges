import React from 'react';
import STYLES from './FlightCard.scss';
import helperUtils from '../../utils/helper.utils';

const getClassName = className => STYLES[className] || 'UNKNOWN';
const FlightCard = ({ itinerary }) => {
  return (
    <div className={getClassName('Flightcard__container')}>
      {itinerary.legs.map((l, i) => (
        <div key={i} className={getClassName('Flightcard__leg')}>
          <div className={getClassName('Flightcard__leg__details')}>
            <div
              className={getClassName('Flightcard__leg__details__logonstart')}
            >
              <div
                className={getClassName(
                  'Flightcard__leg__details__logonstart__logo',
                )}
              >
                <img
                  style={{ maxWidth: '100%' }}
                  src={`https://logos.skyscnr.com/images/airlines/favicon/${l.airline_id}.png`}
                  alt="airline logo"
                />
              </div>
              <div>
                <div>{helperUtils.formatTo24hours(l.departure_time)}</div>
                <div className={getClassName('color__secondary')}>
                  {l.departure_airport}
                </div>
              </div>
            </div>
            <div className={getClassName('Flightcard__leg__details__arrow')}>
              <i className="fas fa-arrow-right"></i>
            </div>
            <div>
              <div>{helperUtils.formatTo24hours(l.arrival_time)}</div>
              <div className={getClassName('color__secondary')}>
                {l.arrival_airport}
              </div>
            </div>
          </div>
          <div>
            <div
              className={getClassName('Flightcard__leg__details__hourstaken')}
            >
              {helperUtils.formatToHoursMin(l.duration_mins)}
            </div>
            <div
              className={getClassName(
                `Flightcard__leg__details__${helperUtils.getStopString(
                  l.stops,
                  'class',
                )}`,
              )}
            >
              {helperUtils.getStopString(l.stops)}
            </div>
          </div>
        </div>
      ))}

      <div className={getClassName('Flightcard__c2a')}>
        <div>
          <div className={getClassName('Flightcard__price')}>
            {itinerary.price}
          </div>
          <div className={getClassName('color__secondary')}>
            {itinerary.agent}
          </div>
        </div>

        <button className={getClassName('Flightcard__btn')}>Select</button>
      </div>
    </div>
  );
};

export default FlightCard;
