var React = require('react');

var TimerControls = React.createClass({
  propTypes: {
    timerStatus: React.PropTypes.string.isRequired
  },
  onStatusChange: function(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },
  render: function() {
    var {timerStatus} = this.props;
    var renderStartStopButton = () => {
      if (timerStatus === 'stopped') {
        return <button className="button secondary" onClick={this.onStatusChange('started')}>Start</button>
      } else if (timerStatus === 'started') {
        return <button className="button primary" onClick={this.onStatusChange('stopped')}>Pause</button>
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow">Clear</button>
      </div>
    )
  }
});

module.exports = TimerControls;
