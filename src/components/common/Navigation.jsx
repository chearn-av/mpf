import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SearchIcon } from 'Icons/ic-search.svg';
import { ReactComponent as PricingIcon } from 'Icons/ic-pricing.svg';
import { ReactComponent as ReportIcon } from 'Icons/ic-report.svg';
import { ReactComponent as SettingsIcon } from 'Icons/ic-settings.svg';
import { ReactComponent as GraphIcon } from 'Icons/ic-line-graph.svg';
import { ReactComponent as CalendarIcon } from 'Icons/ic-calendar.svg';
import { ReactComponent as CaretDown } from 'Icons/ic-caret-down.svg';
import { ReactComponent as CaretUp } from 'Icons/ic-caret-up.svg';
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
            <div className='dropdown-icons'>
              <CalendarIcon className="icon" />
              <CaretUp className='caret-up' />
              <CaretDown className='caret-down' />
            </div>
            EVENTS
          </div>
          <div className='dropdown'>
            <NavLink className='dropdown-link' activeClassName='active-navigation-dropdown' to="/events/annual">ANNUAL</NavLink>
            <NavLink className='dropdown-link' activeClassName='active-navigation-dropdown' to="/events/synopsis">SYNOPSIS</NavLink>
            <NavLink className='dropdown-link' activeClassName='active-navigation-dropdown' to="/events/comprehensive">COMPREHENSIVE</NavLink>
            <NavLink className='dropdown-link' activeClassName='active-navigation-dropdown' to="/events/re-challenge">RE-CHALLENGE</NavLink>
            <NavLink className='dropdown-link' activeClassName='active-navigation-dropdown' to="/events/maintenance">MAINTENANCE</NavLink>
            <NavLink className='dropdown-link' activeClassName='active-navigation-dropdown' to="/events/eap">EAP (?)</NavLink>
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
          <div className='dropdown-icons'>
            <PricingIcon className="icon" />
            <CaretUp className='caret-up' />
            <CaretDown className='caret-down' />
          </div>
          PRICING
        </div>
        <div className='dropdown'>
          <NavLink className='dropdown-link' activeClassName='active-navigation-dropdown' to="/pricing/events">PRICING EVENTS</NavLink>
          <NavLink className='dropdown-link' activeClassName='active-navigation-dropdown' to="/pricing/dosing">DOSING OPTIONS</NavLink>
          <NavLink className='dropdown-link' activeClassName='active-navigation-dropdown' to="/pricing/summary">SUMMARY & OVERRIDE</NavLink>
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