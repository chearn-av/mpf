import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Accordion, Card, useAccordionToggle, AccordionContext } from 'react-bootstrap';
import { ReactComponent as SearchIcon } from 'Icons/ic-search.svg';
import { ReactComponent as PricingIcon } from 'Icons/ic-pricing.svg';
import { ReactComponent as ReportIcon } from 'Icons/ic-report.svg';
import { ReactComponent as SettingsIcon } from 'Icons/ic-settings.svg';
import { ReactComponent as GraphIcon } from 'Icons/ic-line-graph.svg';
import { ReactComponent as CalendarIcon } from 'Icons/ic-calendar.svg';
import { ReactComponent as CaretDown } from 'Icons/ic-caret-down.svg';
import { ReactComponent as CaretUp } from 'Icons/ic-caret-up.svg';
import { ReactComponent as ClockIcon } from 'Icons/ic-clock.svg';
import './Navigation.css';

function ContextAwareToggle({ children, eventKey, callback, openClassname }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <div
      className={isCurrentEventKey && openClassname}
      onClick={decoratedOnClick}
    >
      {children}
    </div>
  );
}

function Navigation(props) {
  return (
    <Accordion className='navigation'>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <NavLink className="link" activeClassName="active-navigation" to="/patient-forecast">
            <div className='navigation-option'>
              <SearchIcon className="icon" />
              <div>PATIENT FORECASTS</div>
            </div>
          </NavLink>
        </Accordion.Toggle>
      </Card>
      {props.forecastSelected &&
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <NavLink className="link" activeClassName="active-navigation" to="/manage-scenario">
              <div className='navigation-option'>
                <SettingsIcon className="icon" />
                <div>MANAGE SCENARIO</div>
              </div>
            </NavLink>
          </Accordion.Toggle>
        </Card>
      }
      {props.forecastSelected &&
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            <NavLink className="link" activeClassName="active-navigation" to="/baseline">
              <div className='navigation-option'>
                <GraphIcon className="icon" />
                <div>BASELINE</div>
              </div>
            </NavLink>
          </Accordion.Toggle>
        </Card>
      }
      {props.forecastSelected &&
        <Card>
          <Card.Header>
            <ContextAwareToggle eventKey="3" openClassname="dropdown-open">
              <NavLink className="link" activeClassName="active-navigation" to="/events/all">
                <div className='navigation-option'>
                  <div className='dropdown-icons'>
                    <CalendarIcon className="icon" />
                    <CaretUp className='caret-up' />
                    <CaretDown className='caret-down' />
                  </div>
                  <div>EVENTS</div>
                </div>
              </NavLink>
            </ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <div>
              <NavLink className='dropdown-link' activeClassName='active-navigation-dropdown' to="/events/annual">ANNUAL</NavLink>
              <NavLink className='dropdown-link' activeClassName='active-navigation-dropdown' to="/events/synopsis">SYNOPSIS</NavLink>
              <NavLink className='dropdown-link' activeClassName='active-navigation-dropdown' to="/events/comprehensive">COMPREHENSIVE</NavLink>
              <NavLink className='dropdown-link' activeClassName='active-navigation-dropdown' to="/events/re-challenge">RE-CHALLENGE</NavLink>
              <NavLink className='dropdown-link' activeClassName='active-navigation-dropdown' to="/events/maintenance">MAINTENANCE</NavLink>
              <NavLink className='dropdown-link' activeClassName='active-navigation-dropdown' to="/events/eap">EAP (?)</NavLink>
            </div>
          </Accordion.Collapse>
        </Card>
      }
      {props.forecastSelected &&
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            <NavLink className="link" activeClassName="active-navigation" to="/time-on-treatment">
              <div className='navigation-option'>
                <ClockIcon className="icon" />
                <div>TIME ON TREATMENT</div>
              </div>
            </NavLink>
          </Accordion.Toggle>
        </Card>
      }
      <Card>
        <Card.Header>
          <ContextAwareToggle eventKey="5" openClassname="dropdown-open">
            <NavLink className="link" activeClassName="active-navigation" to="/pricing/all">
              <div className='navigation-option'>
                <div className='dropdown-icons'>
                  <PricingIcon className="icon" />
                  <CaretUp className='caret-up' />
                  <CaretDown className='caret-down' />
                </div>
                <div>PRICING</div>
              </div>
            </NavLink>
          </ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="5">
          <div>
            <NavLink className='dropdown-link' activeClassName='active-navigation-dropdown' to="/pricing/events">PRICING EVENTS</NavLink>
            <NavLink className='dropdown-link' activeClassName='active-navigation-dropdown' to="/pricing/dosing">DOSING OPTIONS</NavLink>
            <NavLink className='dropdown-link' activeClassName='active-navigation-dropdown' to="/pricing/summary">SUMMARY & OVERRIDE</NavLink>
          </div>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="6">
          <NavLink className="link" activeClassName="active-navigation" to="/reports">
            <div className='navigation-option'>
              <ReportIcon className="icon" />
              <div>REPORTS</div>
            </div>
          </NavLink>
        </Accordion.Toggle>
      </Card>
    </Accordion>
  );
}

export default Navigation;