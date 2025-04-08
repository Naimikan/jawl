// import useTitleByRoute from '../../hooks/use-title-by-route';

import '@jawl/button';
import '@jawl/tooltip';

import JwTooltip from '../tooltip';
import JwButton from '../button';

import './index.styles.css';

const Application = () => {
  // useTitleByRoute();

  return (
    <div style={{ margin: '200px'}}>
      <JwTooltip placement="bottom_left">
        <JwButton slot="tooltip_trigger">Bottom left</JwButton>
        <span slot="tooltip_content">Tooltip content slot</span>
      </JwTooltip>

      <JwTooltip placement="bottom">
        <JwButton slot="tooltip_trigger">Bottom</JwButton>
        <span slot="tooltip_content">Tooltip content slot</span>
      </JwTooltip>

      <JwTooltip placement="bottom_right">
        <JwButton slot="tooltip_trigger">Bottom right</JwButton>
        <span slot="tooltip_content">Tooltip content slot</span>
      </JwTooltip>

      <JwTooltip placement="left_top">
        <JwButton slot="tooltip_trigger">Left top</JwButton>
        <span slot="tooltip_content">Tooltip content slot</span>
      </JwTooltip>

      <JwTooltip placement="left">
        <JwButton slot="tooltip_trigger">Left</JwButton>
        <span slot="tooltip_content">Tooltip content slot</span>
      </JwTooltip>

      <JwTooltip placement="left_bottom">
        <JwButton slot="tooltip_trigger">Left bottom</JwButton>
        <span slot="tooltip_content">Tooltip content slot</span>
      </JwTooltip>

      <JwTooltip placement="top_left">
        <JwButton slot="tooltip_trigger">Top left</JwButton>
        <span slot="tooltip_content">Tooltip content slot</span>
      </JwTooltip>

      <JwTooltip placement="top">
        <JwButton slot="tooltip_trigger">Top</JwButton>
        <span slot="tooltip_content">Tooltip content slot</span>
      </JwTooltip>

      <JwTooltip placement="top_right">
        <JwButton slot="tooltip_trigger">Top right</JwButton>
        <span slot="tooltip_content">Tooltip content slot</span>
      </JwTooltip>

      <JwTooltip placement="right_top">
        <JwButton slot="tooltip_trigger">Right top</JwButton>
        <span slot="tooltip_content">Tooltip content slot</span>
      </JwTooltip>

      <JwTooltip placement="right">
        <JwButton slot="tooltip_trigger">Right</JwButton>
        <span slot="tooltip_content">Tooltip content slot</span>
      </JwTooltip>

      <JwTooltip placement="right_bottom">
        <JwButton slot="tooltip_trigger">Right bottom</JwButton>
        <span slot="tooltip_content">Tooltip content slot</span>
      </JwTooltip>

      {/* <jw-tooltip id="bottom_left" placement="bottom_left">
        <jw-button>Bottom left</jw-button>
      </jw-tooltip>
      <jw-tooltip id="bottom" placement="bottom">
        <jw-button>Bottom</jw-button>
      </jw-tooltip>
      <jw-tooltip id="bottom_right" placement="bottom_right">
        <jw-button>Bottom right</jw-button>
      </jw-tooltip>
      <jw-tooltip id="left_bottom" placement="left_bottom">
        <jw-button>Left bottom</jw-button>
      </jw-tooltip>
      <div style={{ position: 'fixed', zIndex: 9999 }}>asifhaoishfaoi shfioahs foiasfoiashfoiashfoasfh</div>
      <jw-tooltip id="bottom_delay" placement="bottom" delay="300">
        <jw-button>Bottom delay</jw-button>
      </jw-tooltip>
      <jw-tooltip id="bottom_delay_range" placement="bottom" delay="[1200, 500]">
        <jw-button>Bottom delay range</jw-button>
      </jw-tooltip>
      <div>------------------------------------------------------------------------------------------------</div>
      <jw-tooltip id="trigger_default" placement="bottom">
        <jw-button>default trigger</jw-button>
      </jw-tooltip>
      <jw-tooltip id="only_hover" placement="bottom" trigger="hover">
        <jw-button>only hover</jw-button>
      </jw-tooltip>
      <jw-tooltip id="only_focus" placement="bottom" trigger="focus">
        <jw-button>only focus</jw-button>
      </jw-tooltip>
      <jw-tooltip id="hover_click" placement="bottom" trigger="['hover', 'click']">
        <jw-button>hover click</jw-button>
      </jw-tooltip>
      <div style={{ marginTop: '1000px' }}></div>
      <jw-tooltip id="default" placement="bottom_left">
        <jw-button>Default</jw-button>
      </jw-tooltip>
      <div style={{ marginBottom: '1000px' }}></div> */}
    </div>
  );
};

export default Application;
