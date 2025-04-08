import React from 'react';

import { createComponent } from '@lit/react';

import BaseJwTooltip from '@jawl/tooltip';

const JwTooltip = createComponent({
  tagName: 'jw-tooltip',
  elementClass: BaseJwTooltip,
  react: React,
});

export default JwTooltip;
