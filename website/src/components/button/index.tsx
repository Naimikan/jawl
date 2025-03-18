import React from 'react';

import { createComponent } from '@lit/react';

import BaseJwButton from '@jawl/button';

const JwButton = createComponent({
  tagName: 'jw-button',
  elementClass: BaseJwButton,
  react: React,
  events: {
    onClick: 'jw-button-clicked',
  }
});

export default JwButton;
