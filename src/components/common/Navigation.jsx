import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SearchIcon } from 'Icons/ic-search.svg';
import { ReactComponent as PricingIcon } from 'Icons/ic-pricing.svg';
import { ReactComponent as ReportIcon } from 'Icons/ic-report.svg';
import { ReactComponent as SettingsIcon } from 'Icons/ic-settings.svg';
import { ReactComponent as GraphIcon } from 'Icons/ic-line-graph.svg';
import { ReactComponent as CalendarIcon } from 'Icons/ic-calendar.svg';
import { ReactComponent as ClockIcon } from 'Icons/ic-clock.svg';
import './Navigation.scss';

function Navigation(props) {
  return (
    <div className='navigation'>
      <NavLink className="link" activeClassName="active-navigation" to="/" exact>
        <div className='navigation-option'>
          <SearchIcon className="icon" />
          PATIENT FORECASTS
        </div>
      </NavLink>
      {props.forecastSelected &&
        <NavLink className="link" activeClassName="active-navigation" to="/manage-scenario">
          <div className='navigation-option'>
            <SettingsIcon className="icon" />
            MANAGE SCENARIO
          </div>
        </NavLink>
      }
      {props.forecastSelected &&
        <NavLink className="link" activeClassName="active-navigation" to="/baseline">
          <div className='navigation-option'>
            <GraphIcon className="icon" />
            BASELINE
          </div>
        </NavLink>
      }
      {props.forecastSelected &&
        <NavLink className="link" activeClassName="active-navigation" to="/events">
          <div className='navigation-option'>
            <CalendarIcon className="icon" />
            EVENTS
          </div>
        </NavLink>
      }
      {props.forecastSelected &&
        <NavLink className="link" activeClassName="active-navigation" to="/time-on-treatment">
          <div className='navigation-option'>
            <ClockIcon className="icon" />
            TIME ON TREATMENT
          </div>
        </NavLink>
      }
      <NavLink className="link" activeClassName="active-navigation" to="/pricing">
        <div className='navigation-option'>
          <PricingIcon className="icon" />
          PRICING
        </div>
      </NavLink>
      <NavLink className="link" activeClassName="active-navigation" to="/reports">
        <div className='navigation-option'>
          <ReportIcon className="icon" />
          REPORTS
        </div>
      </NavLink>
    </div>
  );
}

export default Navigation;