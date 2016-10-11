var React = require('react');
var Clock = require('Clock')
var TimerControls = require('TimerControls');

var Timer = React.createClass({
  getInitialState: function() {
    return {
      seconds: 0,
      timerStatus: 'stopped'
    };
  },
  handleStatusChange: function(newStatus) {

    this.setState({timerStatus: newStatus});

  },
  componentDidUpdate: function(prevProps, prevState) {
    if(this.state.timerStatus !== prevState.timerStatus) {
      switch(this.state.timerStatus) {
        case 'started':
        this.startTimer();
        break;

        case 'stopped':
        clearInterval(this.timer);
        this.timer = undefined;
        break;
      }
    }
  },
  startTimer: function() {
    this.timer = setInterval(() => {
      var seconds = this.state.seconds + 1;
      this.setState({
        seconds: seconds
      });
    }, 1000);
  },

  render: function() {
    var {seconds, timerStatus} = this.state;
    return(
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={seconds}/>
        <TimerControls timerStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }

});

module.exports = Timer
