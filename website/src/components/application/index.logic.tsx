// import useTitleByRoute from '../../hooks/use-title-by-route';

import '@jawl/button';
import '@jawl/tooltip';

import './index.styles.css';

const Application = () => {
  // useTitleByRoute();

  return (
    <div>
      <jw-button>Button</jw-button>

      <jw-tooltip id="my-tooltip">
        <jw-button>Tooltip trigger</jw-button>
      </jw-tooltip>
    </div>
  );
};

export default Application;
