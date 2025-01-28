import React from 'react';

function Footer() {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} MunchRun. All rights reserved.
      </p>
      <p>
        Contact us at: <a href="mailto:munchrun@finneh.xyz">munchrun@finneh.xyz</a>
      </p>
    </footer>
  );
}

export default Footer;