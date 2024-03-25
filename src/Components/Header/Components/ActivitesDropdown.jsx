import React, { useState } from 'react';
import '../styles/DropdownAct.css';
import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next'

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  // const { t } = useTranslation();

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu-act clicked' : 'dropdown-menu-act'}
      >
        <li>
          <Link
            className="dropdown-link"
            onClick={() => {window.location.href="/Programmes"}}
          > Nos Programmes
          </Link>
          <Link
            className="dropdown-link"
            onClick={() => {window.location.href="/Commissions"}}
          >Nos Commissions
          </Link>
          <Link
            className="dropdown-link"
            onClick={() => {window.location.href="/ZoneIntervention"}}
          >Nos Zones d'Intervention
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Dropdown
