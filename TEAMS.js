const { Map } = require('immutable');

module.exports = Map({
  'Boston Celtics': { division: 'Atlantic', conference: 'East' },
  'Brooklyn Nets': { division: 'Atlantic', conference: 'East' },
  'New York Knicks': { division: 'Atlantic', conference: 'East' },
  'Philadelphia 76ers': { division: 'Atlantic', conference: 'East' },
  'Toronto Raptors': { division: 'Atlantic', conference: 'East' },
  'Chicago Bulls': { division: 'Central', conference: 'East' },
  'Cleveland Cavaliers': { division: 'Central', conference: 'East' },
  'Detroit Pistons': { division: 'Central', conference: 'East' },
  'Indiana Pacers': { division: 'Central', conference: 'East' },
  'Milwaukee Bucks': { division: 'Central', conference: 'East' },
  'Atlanta Hawks': { division: 'Southeast', conference: 'East' },
  'Charlotte Hornets': { division: 'Southeast', conference: 'East' },
  'Miami Heat': { division: 'Southeast', conference: 'East' },
  'Orlando Magic': { division: 'Southeast', conference: 'East' },
  'Washington Wizards': { division: 'Southeast', conference: 'East' },
  'Denver Nuggets': { division: 'Northwest', conference: 'West' },
  'Minnesota Timberwolves': { division: 'Northwest', conference: 'West' },
  'Oklahoma City Thunder': { division: 'Northwest', conference: 'West' },
  'Portland Trail Blazers': { division: 'Northwest', conference: 'West' },
  'Utah Jazz': { division: 'Northwest', conference: 'West' },
  'Golden State Warriors': { division: 'Pacific', conference: 'West' },
  'LA Clippers': { division: 'Pacific', conference: 'West' },
  'Los Angeles Lakers': { division: 'Pacific', conference: 'West' },
  'Phoenix Suns': { division: 'Pacific', conference: 'West' },
  'Sacramento Kings': { division: 'Pacific', conference: 'West' },
  'Dallas Mavericks': { division: 'Southwest', conference: 'West' },
  'Houston Rockets': { division: 'Southwest', conference: 'West' },
  'Memphis Grizzlies': { division: 'Southwest', conference: 'West' },
  'New Orleans Pelicans': { division: 'Southwest', conference: 'West' },
  'San Antonio Spurs': { division: 'Southwest', conference: 'West' }
}).map(info => Map({...info, eliminated: false}));
