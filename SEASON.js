const { List, Map } = require('immutable');
const moment = require('moment');

module.exports = List([
  {
    date: '2016-10-25',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'New York Knicks',
    homeScore: 117,
    awayScore: 88,
    winner: 'Cleveland Cavaliers',
    loser: 'New York Knicks'
  },
  {
    date: '2016-10-25',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Utah Jazz',
    homeScore: 113,
    awayScore: 104,
    winner: 'Portland Trail Blazers',
    loser: 'Utah Jazz'
  },
  {
    date: '2016-10-25',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'San Antonio Spurs',
    homeScore: 100,
    awayScore: 129,
    winner: 'San Antonio Spurs',
    loser: 'Golden State Warriors'
  },
  {
    date: '2016-10-26',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Miami Heat',
    homeScore: 96,
    awayScore: 108,
    winner: 'Miami Heat',
    loser: 'Orlando Magic'
  },
  {
    date: '2016-10-26',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Dallas Mavericks',
    homeScore: 130,
    awayScore: 121,
    winner: 'Indiana Pacers',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2016-10-26',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Brooklyn Nets',
    homeScore: 122,
    awayScore: 117,
    winner: 'Boston Celtics',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2016-10-26',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Detroit Pistons',
    homeScore: 109,
    awayScore: 91,
    winner: 'Toronto Raptors',
    loser: 'Detroit Pistons'
  },
  {
    date: '2016-10-26',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Charlotte Hornets',
    homeScore: 96,
    awayScore: 107,
    winner: 'Charlotte Hornets',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2016-10-26',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 102,
    awayScore: 98,
    winner: 'Memphis Grizzlies',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2016-10-26',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Denver Nuggets',
    homeScore: 102,
    awayScore: 107,
    winner: 'Denver Nuggets',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2016-10-26',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 97,
    awayScore: 103,
    winner: 'Oklahoma City Thunder',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2016-10-26',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Sacramento Kings',
    homeScore: 94,
    awayScore: 113,
    winner: 'Sacramento Kings',
    loser: 'Phoenix Suns'
  },
  {
    date: '2016-10-26',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Houston Rockets',
    homeScore: 120,
    awayScore: 114,
    winner: 'Los Angeles Lakers',
    loser: 'Houston Rockets'
  },
  {
    date: '2016-10-27',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Washington Wizards',
    homeScore: 114,
    awayScore: 99,
    winner: 'Atlanta Hawks',
    loser: 'Washington Wizards'
  },
  {
    date: '2016-10-27',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Boston Celtics',
    homeScore: 105,
    awayScore: 99,
    winner: 'Chicago Bulls',
    loser: 'Boston Celtics'
  },
  {
    date: '2016-10-27',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'San Antonio Spurs',
    homeScore: 94,
    awayScore: 102,
    winner: 'San Antonio Spurs',
    loser: 'Sacramento Kings'
  },
  {
    date: '2016-10-27',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'LA Clippers',
    homeScore: 106,
    awayScore: 114,
    winner: 'LA Clippers',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2016-10-28',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 91,
    awayScore: 94,
    winner: 'Cleveland Cavaliers',
    loser: 'Toronto Raptors'
  },
  {
    date: '2016-10-28',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Indiana Pacers',
    homeScore: 103,
    awayScore: 94,
    winner: 'Brooklyn Nets',
    loser: 'Indiana Pacers'
  },
  {
    date: '2016-10-28',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Orlando Magic',
    homeScore: 108,
    awayScore: 82,
    winner: 'Detroit Pistons',
    loser: 'Orlando Magic'
  },
  {
    date: '2016-10-28',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Phoenix Suns',
    homeScore: 113,
    awayScore: 110,
    winner: 'Oklahoma City Thunder',
    loser: 'Phoenix Suns'
  },
  {
    date: '2016-10-28',
    homeTeam: 'Miami Heat',
    awayTeam: 'Charlotte Hornets',
    homeScore: 91,
    awayScore: 97,
    winner: 'Charlotte Hornets',
    loser: 'Miami Heat'
  },
  {
    date: '2016-10-28',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Houston Rockets',
    homeScore: 98,
    awayScore: 106,
    winner: 'Houston Rockets',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2016-10-28',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 96,
    awayScore: 89,
    winner: 'Utah Jazz',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2016-10-28',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Golden State Warriors',
    homeScore: 114,
    awayScore: 122,
    winner: 'Golden State Warriors',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2016-10-29',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Atlanta Hawks',
    homeScore: 72,
    awayScore: 104,
    winner: 'Atlanta Hawks',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2016-10-29',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Boston Celtics',
    homeScore: 98,
    awayScore: 104,
    winner: 'Boston Celtics',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2016-10-29',
    homeTeam: 'New York Knicks',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 111,
    awayScore: 104,
    winner: 'New York Knicks',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2016-10-29',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Orlando Magic',
    homeScore: 105,
    awayScore: 99,
    winner: 'Cleveland Cavaliers',
    loser: 'Orlando Magic'
  },
  {
    date: '2016-10-29',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Indiana Pacers',
    homeScore: 118,
    awayScore: 101,
    winner: 'Chicago Bulls',
    loser: 'Indiana Pacers'
  },
  {
    date: '2016-10-29',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Brooklyn Nets',
    homeScore: 110,
    awayScore: 108,
    winner: 'Milwaukee Bucks',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2016-10-29',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 98,
    awayScore: 79,
    winner: 'San Antonio Spurs',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2016-10-29',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 113,
    awayScore: 115,
    winner: 'Portland Trail Blazers',
    loser: 'Denver Nuggets'
  },
  {
    date: '2016-10-29',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 106,
    awayScore: 103,
    winner: 'Sacramento Kings',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2016-10-30',
    homeTeam: 'LA Clippers',
    awayTeam: 'Utah Jazz',
    homeScore: 88,
    awayScore: 75,
    winner: 'LA Clippers',
    loser: 'Utah Jazz'
  },
  {
    date: '2016-10-30',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Golden State Warriors',
    homeScore: 100,
    awayScore: 106,
    winner: 'Golden State Warriors',
    loser: 'Phoenix Suns'
  },
  {
    date: '2016-10-30',
    homeTeam: 'Miami Heat',
    awayTeam: 'San Antonio Spurs',
    homeScore: 99,
    awayScore: 106,
    winner: 'San Antonio Spurs',
    loser: 'Miami Heat'
  },
  {
    date: '2016-10-30',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 98,
    awayScore: 83,
    winner: 'Detroit Pistons',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2016-10-30',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Washington Wizards',
    homeScore: 112,
    awayScore: 103,
    winner: 'Memphis Grizzlies',
    loser: 'Washington Wizards'
  },
  {
    date: '2016-10-30',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 113,
    awayScore: 96,
    winner: 'Oklahoma City Thunder',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2016-10-30',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Dallas Mavericks',
    homeScore: 93,
    awayScore: 92,
    winner: 'Houston Rockets',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2016-10-31',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Denver Nuggets',
    homeScore: 105,
    awayScore: 102,
    winner: 'Toronto Raptors',
    loser: 'Denver Nuggets'
  },
  {
    date: '2016-10-31',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Chicago Bulls',
    homeScore: 88,
    awayScore: 118,
    winner: 'Chicago Bulls',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2016-10-31',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Sacramento Kings',
    homeScore: 106,
    awayScore: 95,
    winner: 'Atlanta Hawks',
    loser: 'Sacramento Kings'
  },
  {
    date: '2016-10-31',
    homeTeam: 'LA Clippers',
    awayTeam: 'Phoenix Suns',
    homeScore: 116,
    awayScore: 98,
    winner: 'LA Clippers',
    loser: 'Phoenix Suns'
  },
  {
    date: '2016-11-01',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Orlando Magic',
    homeScore: 101,
    awayScore: 103,
    winner: 'Orlando Magic',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2016-11-01',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Houston Rockets',
    homeScore: 128,
    awayScore: 120,
    winner: 'Cleveland Cavaliers',
    loser: 'Houston Rockets'
  },
  {
    date: '2016-11-01',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 115,
    awayScore: 108,
    winner: 'Indiana Pacers',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2016-11-01',
    homeTeam: 'Miami Heat',
    awayTeam: 'Sacramento Kings',
    homeScore: 108,
    awayScore: 96,
    winner: 'Miami Heat',
    loser: 'Sacramento Kings'
  },
  {
    date: '2016-11-01',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'New York Knicks',
    homeScore: 102,
    awayScore: 89,
    winner: 'Detroit Pistons',
    loser: 'New York Knicks'
  },
  {
    date: '2016-11-01',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 113,
    awayScore: 117,
    winner: 'Milwaukee Bucks',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2016-11-01',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 116,
    awayScore: 80,
    winner: 'Minnesota Timberwolves',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2016-11-01',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Utah Jazz',
    homeScore: 91,
    awayScore: 106,
    winner: 'Utah Jazz',
    loser: 'San Antonio Spurs'
  },
  {
    date: '2016-11-01',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Golden State Warriors',
    homeScore: 104,
    awayScore: 127,
    winner: 'Golden State Warriors',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2016-11-02',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Toronto Raptors',
    homeScore: 103,
    awayScore: 113,
    winner: 'Toronto Raptors',
    loser: 'Washington Wizards'
  },
  {
    date: '2016-11-02',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 109,
    awayScore: 93,
    winner: 'Charlotte Hornets',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2016-11-02',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Detroit Pistons',
    homeScore: 109,
    awayScore: 101,
    winner: 'Brooklyn Nets',
    loser: 'Detroit Pistons'
  },
  {
    date: '2016-11-02',
    homeTeam: 'New York Knicks',
    awayTeam: 'Houston Rockets',
    homeScore: 99,
    awayScore: 118,
    winner: 'Houston Rockets',
    loser: 'New York Knicks'
  },
  {
    date: '2016-11-02',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 116,
    awayScore: 123,
    winner: 'Los Angeles Lakers',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2016-11-02',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 89,
    awayScore: 83,
    winner: 'Memphis Grizzlies',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2016-11-02',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Chicago Bulls',
    homeScore: 107,
    awayScore: 100,
    winner: 'Boston Celtics',
    loser: 'Chicago Bulls'
  },
  {
    date: '2016-11-02',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Dallas Mavericks',
    homeScore: 97,
    awayScore: 81,
    winner: 'Utah Jazz',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2016-11-02',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 118,
    awayScore: 115,
    winner: 'Phoenix Suns',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2016-11-02',
    homeTeam: 'LA Clippers',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 83,
    awayScore: 85,
    winner: 'Oklahoma City Thunder',
    loser: 'LA Clippers'
  },
  {
    date: '2016-11-03',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Sacramento Kings',
    homeScore: 102,
    awayScore: 94,
    winner: 'Orlando Magic',
    loser: 'Sacramento Kings'
  },
  {
    date: '2016-11-03',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Indiana Pacers',
    homeScore: 125,
    awayScore: 107,
    winner: 'Milwaukee Bucks',
    loser: 'Indiana Pacers'
  },
  {
    date: '2016-11-03',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Denver Nuggets',
    homeScore: 99,
    awayScore: 102,
    winner: 'Denver Nuggets',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2016-11-03',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Boston Celtics',
    homeScore: 128,
    awayScore: 122,
    winner: 'Cleveland Cavaliers',
    loser: 'Boston Celtics'
  },
  {
    date: '2016-11-03',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 122,
    awayScore: 96,
    winner: 'Golden State Warriors',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2016-11-04',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Atlanta Hawks',
    homeScore: 95,
    awayScore: 92,
    winner: 'Washington Wizards',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2016-11-04',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Miami Heat',
    homeScore: 96,
    awayScore: 87,
    winner: 'Toronto Raptors',
    loser: 'Miami Heat'
  },
  {
    date: '2016-11-04',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Charlotte Hornets',
    homeScore: 95,
    awayScore: 99,
    winner: 'Charlotte Hornets',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2016-11-04',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'New York Knicks',
    homeScore: 104,
    awayScore: 117,
    winner: 'New York Knicks',
    loser: 'Chicago Bulls'
  },
  {
    date: '2016-11-04',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'LA Clippers',
    homeScore: 88,
    awayScore: 99,
    winner: 'LA Clippers',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2016-11-04',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Phoenix Suns',
    homeScore: 111,
    awayScore: 112,
    winner: 'Phoenix Suns',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2016-11-04',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 95,
    awayScore: 105,
    winner: 'Portland Trail Blazers',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2016-11-04',
    homeTeam: 'Utah Jazz',
    awayTeam: 'San Antonio Spurs',
    homeScore: 86,
    awayScore: 100,
    winner: 'San Antonio Spurs',
    loser: 'Utah Jazz'
  },
  {
    date: '2016-11-04',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Golden State Warriors',
    homeScore: 117,
    awayScore: 97,
    winner: 'Los Angeles Lakers',
    loser: 'Golden State Warriors'
  },
  {
    date: '2016-11-05',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 112,
    awayScore: 92,
    winner: 'Oklahoma City Thunder',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2016-11-05',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 101,
    awayScore: 102,
    winner: 'Cleveland Cavaliers',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2016-11-05',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Washington Wizards',
    homeScore: 88,
    awayScore: 86,
    winner: 'Orlando Magic',
    loser: 'Washington Wizards'
  },
  {
    date: '2016-11-05',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Denver Nuggets',
    homeScore: 103,
    awayScore: 86,
    winner: 'Detroit Pistons',
    loser: 'Denver Nuggets'
  },
  {
    date: '2016-11-05',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Chicago Bulls',
    homeScore: 111,
    awayScore: 94,
    winner: 'Indiana Pacers',
    loser: 'Chicago Bulls'
  },
  {
    date: '2016-11-05',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Houston Rockets',
    homeScore: 112,
    awayScore: 97,
    winner: 'Atlanta Hawks',
    loser: 'Houston Rockets'
  },
  {
    date: '2016-11-05',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Sacramento Kings',
    homeScore: 117,
    awayScore: 91,
    winner: 'Milwaukee Bucks',
    loser: 'Sacramento Kings'
  },
  {
    date: '2016-11-05',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'LA Clippers',
    homeScore: 92,
    awayScore: 116,
    winner: 'LA Clippers',
    loser: 'San Antonio Spurs'
  },
  {
    date: '2016-11-06',
    homeTeam: 'New York Knicks',
    awayTeam: 'Utah Jazz',
    homeScore: 109,
    awayScore: 114,
    winner: 'Utah Jazz',
    loser: 'New York Knicks'
  },
  {
    date: '2016-11-06',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 94,
    awayScore: 100,
    winner: 'Portland Trail Blazers',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2016-11-06',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Sacramento Kings',
    homeScore: 91,
    awayScore: 96,
    winner: 'Sacramento Kings',
    loser: 'Toronto Raptors'
  },
  {
    date: '2016-11-06',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 86,
    awayScore: 75,
    winner: 'Dallas Mavericks',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2016-11-06',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Denver Nuggets',
    homeScore: 107,
    awayScore: 123,
    winner: 'Denver Nuggets',
    loser: 'Boston Celtics'
  },
  {
    date: '2016-11-06',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Phoenix Suns',
    homeScore: 119,
    awayScore: 108,
    winner: 'Los Angeles Lakers',
    loser: 'Phoenix Suns'
  },
  {
    date: '2016-11-07',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Utah Jazz',
    homeScore: 84,
    awayScore: 109,
    winner: 'Utah Jazz',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2016-11-07',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Houston Rockets',
    homeScore: 106,
    awayScore: 114,
    winner: 'Houston Rockets',
    loser: 'Washington Wizards'
  },
  {
    date: '2016-11-07',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Indiana Pacers',
    homeScore: 122,
    awayScore: 100,
    winner: 'Charlotte Hornets',
    loser: 'Indiana Pacers'
  },
  {
    date: '2016-11-07',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Orlando Magic',
    homeScore: 112,
    awayScore: 80,
    winner: 'Chicago Bulls',
    loser: 'Orlando Magic'
  },
  {
    date: '2016-11-07',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Miami Heat',
    homeScore: 97,
    awayScore: 85,
    winner: 'Oklahoma City Thunder',
    loser: 'Miami Heat'
  },
  {
    date: '2016-11-07',
    homeTeam: 'LA Clippers',
    awayTeam: 'Detroit Pistons',
    homeScore: 114,
    awayScore: 82,
    winner: 'LA Clippers',
    loser: 'Detroit Pistons'
  },
  {
    date: '2016-11-07',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 116,
    awayScore: 106,
    winner: 'Golden State Warriors',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2016-11-08',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Atlanta Hawks',
    homeScore: 106,
    awayScore: 110,
    winner: 'Atlanta Hawks',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2016-11-08',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 119,
    awayScore: 110,
    winner: 'Brooklyn Nets',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2016-11-08',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Denver Nuggets',
    homeScore: 108,
    awayScore: 107,
    winner: 'Memphis Grizzlies',
    loser: 'Denver Nuggets'
  },
  {
    date: '2016-11-08',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Phoenix Suns',
    homeScore: 124,
    awayScore: 121,
    winner: 'Portland Trail Blazers',
    loser: 'Phoenix Suns'
  },
  {
    date: '2016-11-08',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Dallas Mavericks',
    homeScore: 97,
    awayScore: 109,
    winner: 'Dallas Mavericks',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2016-11-08',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 102,
    awayScore: 94,
    winner: 'Sacramento Kings',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2016-11-09',
    homeTeam: 'New York Knicks',
    awayTeam: 'Brooklyn Nets',
    homeScore: 110,
    awayScore: 96,
    winner: 'New York Knicks',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2016-11-09',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Boston Celtics',
    homeScore: 118,
    awayScore: 93,
    winner: 'Washington Wizards',
    loser: 'Boston Celtics'
  },
  {
    date: '2016-11-09',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Utah Jazz',
    homeScore: 104,
    awayScore: 98,
    winner: 'Charlotte Hornets',
    loser: 'Utah Jazz'
  },
  {
    date: '2016-11-09',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 107,
    awayScore: 123,
    winner: 'Minnesota Timberwolves',
    loser: 'Orlando Magic'
  },
  {
    date: '2016-11-09',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 122,
    awayScore: 115,
    winner: 'Indiana Pacers',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2016-11-09',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Chicago Bulls',
    homeScore: 115,
    awayScore: 107,
    winner: 'Atlanta Hawks',
    loser: 'Chicago Bulls'
  },
  {
    date: '2016-11-09',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Toronto Raptors',
    homeScore: 102,
    awayScore: 112,
    winner: 'Toronto Raptors',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2016-11-09',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Detroit Pistons',
    homeScore: 107,
    awayScore: 100,
    winner: 'Phoenix Suns',
    loser: 'Detroit Pistons'
  },
  {
    date: '2016-11-09',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Houston Rockets',
    homeScore: 99,
    awayScore: 101,
    winner: 'Houston Rockets',
    loser: 'San Antonio Spurs'
  },
  {
    date: '2016-11-09',
    homeTeam: 'LA Clippers',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 111,
    awayScore: 80,
    winner: 'LA Clippers',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2016-11-09',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Dallas Mavericks',
    homeScore: 116,
    awayScore: 95,
    winner: 'Golden State Warriors',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2016-11-10',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 106,
    awayScore: 112,
    winner: 'New Orleans Pelicans',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2016-11-10',
    homeTeam: 'Miami Heat',
    awayTeam: 'Chicago Bulls',
    homeScore: 95,
    awayScore: 98,
    winner: 'Chicago Bulls',
    loser: 'Miami Heat'
  },
  {
    date: '2016-11-10',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Golden State Warriors',
    homeScore: 101,
    awayScore: 125,
    winner: 'Golden State Warriors',
    loser: 'Denver Nuggets'
  },
  {
    date: '2016-11-10',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 91,
    awayScore: 101,
    winner: 'Los Angeles Lakers',
    loser: 'Sacramento Kings'
  },
  {
    date: '2016-11-11',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Indiana Pacers',
    homeScore: 109,
    awayScore: 105,
    winner: 'Philadelphia 76ers',
    loser: 'Indiana Pacers'
  },
  {
    date: '2016-11-11',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 94,
    awayScore: 105,
    winner: 'Cleveland Cavaliers',
    loser: 'Washington Wizards'
  },
  {
    date: '2016-11-11',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Toronto Raptors',
    homeScore: 111,
    awayScore: 113,
    winner: 'Toronto Raptors',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2016-11-11',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Utah Jazz',
    homeScore: 74,
    awayScore: 87,
    winner: 'Utah Jazz',
    loser: 'Orlando Magic'
  },
  {
    date: '2016-11-11',
    homeTeam: 'Boston Celtics',
    awayTeam: 'New York Knicks',
    homeScore: 115,
    awayScore: 87,
    winner: 'Boston Celtics',
    loser: 'New York Knicks'
  },
  {
    date: '2016-11-11',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'LA Clippers',
    homeScore: 108,
    awayScore: 110,
    winner: 'LA Clippers',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2016-11-11',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Detroit Pistons',
    homeScore: 96,
    awayScore: 86,
    winner: 'San Antonio Spurs',
    loser: 'Detroit Pistons'
  },
  {
    date: '2016-11-11',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Sacramento Kings',
    homeScore: 122,
    awayScore: 120,
    winner: 'Portland Trail Blazers',
    loser: 'Sacramento Kings'
  },
  {
    date: '2016-11-12',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 99,
    awayScore: 126,
    winner: 'Los Angeles Lakers',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2016-11-12',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Boston Celtics',
    homeScore: 99,
    awayScore: 105,
    winner: 'Boston Celtics',
    loser: 'Indiana Pacers'
  },
  {
    date: '2016-11-12',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'New York Knicks',
    homeScore: 118,
    awayScore: 107,
    winner: 'Toronto Raptors',
    loser: 'New York Knicks'
  },
  {
    date: '2016-11-12',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 117,
    awayScore: 96,
    winner: 'Atlanta Hawks',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2016-11-12',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Washington Wizards',
    homeScore: 106,
    awayScore: 95,
    winner: 'Chicago Bulls',
    loser: 'Washington Wizards'
  },
  {
    date: '2016-11-12',
    homeTeam: 'Houston Rockets',
    awayTeam: 'San Antonio Spurs',
    homeScore: 100,
    awayScore: 106,
    winner: 'San Antonio Spurs',
    loser: 'Houston Rockets'
  },
  {
    date: '2016-11-12',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'LA Clippers',
    homeScore: 105,
    awayScore: 119,
    winner: 'LA Clippers',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2016-11-12',
    homeTeam: 'Miami Heat',
    awayTeam: 'Utah Jazz',
    homeScore: 91,
    awayScore: 102,
    winner: 'Utah Jazz',
    loser: 'Miami Heat'
  },
  {
    date: '2016-11-12',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 106,
    awayScore: 96,
    winner: 'Milwaukee Bucks',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2016-11-12',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Detroit Pistons',
    homeScore: 95,
    awayScore: 106,
    winner: 'Detroit Pistons',
    loser: 'Denver Nuggets'
  },
  {
    date: '2016-11-12',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Brooklyn Nets',
    homeScore: 104,
    awayScore: 122,
    winner: 'Brooklyn Nets',
    loser: 'Phoenix Suns'
  },
  {
    date: '2016-11-13',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Charlotte Hornets',
    homeScore: 100,
    awayScore: 93,
    winner: 'Cleveland Cavaliers',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2016-11-13',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Orlando Magic',
    homeScore: 117,
    awayScore: 119,
    winner: 'Orlando Magic',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2016-11-13',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 125,
    awayScore: 99,
    winner: 'Minnesota Timberwolves',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2016-11-13',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Phoenix Suns',
    homeScore: 133,
    awayScore: 120,
    winner: 'Golden State Warriors',
    loser: 'Phoenix Suns'
  },
  {
    date: '2016-11-13',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Denver Nuggets',
    homeScore: 112,
    awayScore: 105,
    winner: 'Portland Trail Blazers',
    loser: 'Denver Nuggets'
  },
  {
    date: '2016-11-14',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Orlando Magic',
    homeScore: 88,
    awayScore: 69,
    winner: 'Indiana Pacers',
    loser: 'Orlando Magic'
  },
  {
    date: '2016-11-14',
    homeTeam: 'New York Knicks',
    awayTeam: 'Dallas Mavericks',
    homeScore: 93,
    awayScore: 77,
    winner: 'New York Knicks',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2016-11-14',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 104,
    awayScore: 88,
    winner: 'Detroit Pistons',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2016-11-14',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Boston Celtics',
    homeScore: 106,
    awayScore: 105,
    winner: 'New Orleans Pelicans',
    loser: 'Boston Celtics'
  },
  {
    date: '2016-11-14',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 115,
    awayScore: 88,
    winner: 'Houston Rockets',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2016-11-14',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Miami Heat',
    homeScore: 94,
    awayScore: 90,
    winner: 'San Antonio Spurs',
    loser: 'Miami Heat'
  },
  {
    date: '2016-11-14',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 96,
    awayScore: 102,
    winner: 'Memphis Grizzlies',
    loser: 'Utah Jazz'
  },
  {
    date: '2016-11-14',
    homeTeam: 'LA Clippers',
    awayTeam: 'Brooklyn Nets',
    homeScore: 127,
    awayScore: 95,
    winner: 'LA Clippers',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2016-11-15',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Toronto Raptors',
    homeScore: 121,
    awayScore: 117,
    winner: 'Cleveland Cavaliers',
    loser: 'Toronto Raptors'
  },
  {
    date: '2016-11-15',
    homeTeam: 'Miami Heat',
    awayTeam: 'Atlanta Hawks',
    homeScore: 90,
    awayScore: 93,
    winner: 'Atlanta Hawks',
    loser: 'Miami Heat'
  },
  {
    date: '2016-11-15',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Charlotte Hornets',
    homeScore: 108,
    awayScore: 115,
    winner: 'Charlotte Hornets',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2016-11-15',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Chicago Bulls',
    homeScore: 88,
    awayScore: 113,
    winner: 'Chicago Bulls',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2016-11-15',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Brooklyn Nets',
    homeScore: 125,
    awayScore: 118,
    winner: 'Los Angeles Lakers',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2016-11-16',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Washington Wizards',
    homeScore: 109,
    awayScore: 102,
    winner: 'Philadelphia 76ers',
    loser: 'Washington Wizards'
  },
  {
    date: '2016-11-16',
    homeTeam: 'Orlando Magic',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 89,
    awayScore: 82,
    winner: 'Orlando Magic',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2016-11-16',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 103,
    awayScore: 93,
    winner: 'Indiana Pacers',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2016-11-16',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Dallas Mavericks',
    homeScore: 90,
    awayScore: 83,
    winner: 'Boston Celtics',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2016-11-16',
    homeTeam: 'New York Knicks',
    awayTeam: 'Detroit Pistons',
    homeScore: 105,
    awayScore: 102,
    winner: 'New York Knicks',
    loser: 'Detroit Pistons'
  },
  {
    date: '2016-11-16',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 107,
    awayScore: 100,
    winner: 'Atlanta Hawks',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2016-11-16',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Houston Rockets',
    homeScore: 105,
    awayScore: 103,
    winner: 'Oklahoma City Thunder',
    loser: 'Houston Rockets'
  },
  {
    date: '2016-11-16',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Golden State Warriors',
    homeScore: 121,
    awayScore: 127,
    winner: 'Golden State Warriors',
    loser: 'Toronto Raptors'
  },
  {
    date: '2016-11-16',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Phoenix Suns',
    homeScore: 120,
    awayScore: 104,
    winner: 'Denver Nuggets',
    loser: 'Phoenix Suns'
  },
  {
    date: '2016-11-16',
    homeTeam: 'LA Clippers',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 107,
    awayScore: 111,
    winner: 'Memphis Grizzlies',
    loser: 'LA Clippers'
  },
  {
    date: '2016-11-16',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'San Antonio Spurs',
    homeScore: 105,
    awayScore: 110,
    winner: 'San Antonio Spurs',
    loser: 'Sacramento Kings'
  },
  {
    date: '2016-11-17',
    homeTeam: 'Washington Wizards',
    awayTeam: 'New York Knicks',
    homeScore: 119,
    awayScore: 112,
    winner: 'Washington Wizards',
    loser: 'New York Knicks'
  },
  {
    date: '2016-11-17',
    homeTeam: 'Miami Heat',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 96,
    awayScore: 73,
    winner: 'Miami Heat',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2016-11-17',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 126,
    awayScore: 109,
    winner: 'Houston Rockets',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2016-11-17',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 110,
    awayScore: 86,
    winner: 'Minnesota Timberwolves',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2016-11-17',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Chicago Bulls',
    homeScore: 77,
    awayScore: 85,
    winner: 'Chicago Bulls',
    loser: 'Utah Jazz'
  },
  {
    date: '2016-11-18',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Atlanta Hawks',
    homeScore: 100,
    awayScore: 96,
    winner: 'Charlotte Hornets',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2016-11-18',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Detroit Pistons',
    homeScore: 104,
    awayScore: 81,
    winner: 'Cleveland Cavaliers',
    loser: 'Detroit Pistons'
  },
  {
    date: '2016-11-18',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Phoenix Suns',
    homeScore: 96,
    awayScore: 116,
    winner: 'Phoenix Suns',
    loser: 'Indiana Pacers'
  },
  {
    date: '2016-11-18',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 113,
    awayScore: 101,
    winner: 'New Orleans Pelicans',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2016-11-18',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Brooklyn Nets',
    homeScore: 124,
    awayScore: 105,
    winner: 'Oklahoma City Thunder',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2016-11-18',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Golden State Warriors',
    homeScore: 88,
    awayScore: 104,
    winner: 'Golden State Warriors',
    loser: 'Boston Celtics'
  },
  {
    date: '2016-11-18',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 64,
    awayScore: 80,
    winner: 'Memphis Grizzlies',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2016-11-18',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Toronto Raptors',
    homeScore: 111,
    awayScore: 113,
    winner: 'Toronto Raptors',
    loser: 'Denver Nuggets'
  },
  {
    date: '2016-11-18',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'San Antonio Spurs',
    homeScore: 107,
    awayScore: 116,
    winner: 'San Antonio Spurs',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2016-11-18',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'LA Clippers',
    homeScore: 115,
    awayScore: 121,
    winner: 'LA Clippers',
    loser: 'Sacramento Kings'
  },
  {
    date: '2016-11-19',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Utah Jazz',
    homeScore: 111,
    awayScore: 102,
    winner: 'Houston Rockets',
    loser: 'Utah Jazz'
  },
  {
    date: '2016-11-19',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Charlotte Hornets',
    homeScore: 121,
    awayScore: 116,
    winner: 'New Orleans Pelicans',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2016-11-19',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Miami Heat',
    homeScore: 111,
    awayScore: 114,
    winner: 'Miami Heat',
    loser: 'Washington Wizards'
  },
  {
    date: '2016-11-19',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Dallas Mavericks',
    homeScore: 95,
    awayScore: 87,
    winner: 'Orlando Magic',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2016-11-19',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Boston Celtics',
    homeScore: 92,
    awayScore: 94,
    winner: 'Boston Celtics',
    loser: 'Detroit Pistons'
  },
  {
    date: '2016-11-19',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Phoenix Suns',
    homeScore: 120,
    awayScore: 105,
    winner: 'Philadelphia 76ers',
    loser: 'Phoenix Suns'
  },
  {
    date: '2016-11-19',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 93,
    awayScore: 71,
    winner: 'Memphis Grizzlies',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2016-11-19',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Golden State Warriors',
    homeScore: 121,
    awayScore: 124,
    winner: 'Golden State Warriors',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2016-11-19',
    homeTeam: 'LA Clippers',
    awayTeam: 'Chicago Bulls',
    homeScore: 102,
    awayScore: 95,
    winner: 'LA Clippers',
    loser: 'Chicago Bulls'
  },
  {
    date: '2016-11-20',
    homeTeam: 'New York Knicks',
    awayTeam: 'Atlanta Hawks',
    homeScore: 104,
    awayScore: 94,
    winner: 'New York Knicks',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2016-11-20',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 109,
    awayScore: 129,
    winner: 'Portland Trail Blazers',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2016-11-20',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Indiana Pacers',
    homeScore: 111,
    awayScore: 115,
    winner: 'Indiana Pacers',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2016-11-20',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Toronto Raptors',
    homeScore: 102,
    awayScore: 99,
    winner: 'Sacramento Kings',
    loser: 'Toronto Raptors'
  },
  {
    date: '2016-11-20',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Utah Jazz',
    homeScore: 105,
    awayScore: 91,
    winner: 'Denver Nuggets',
    loser: 'Utah Jazz'
  },
  {
    date: '2016-11-20',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Chicago Bulls',
    homeScore: 110,
    awayScore: 118,
    winner: 'Chicago Bulls',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2016-11-21',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Miami Heat',
    homeScore: 101,
    awayScore: 94,
    winner: 'Philadelphia 76ers',
    loser: 'Miami Heat'
  },
  {
    date: '2016-11-21',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Phoenix Suns',
    homeScore: 106,
    awayScore: 101,
    winner: 'Washington Wizards',
    loser: 'Phoenix Suns'
  },
  {
    date: '2016-11-21',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 90,
    awayScore: 105,
    winner: 'Memphis Grizzlies',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2016-11-21',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Golden State Warriors',
    homeScore: 83,
    awayScore: 120,
    winner: 'Golden State Warriors',
    loser: 'Indiana Pacers'
  },
  {
    date: '2016-11-21',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Houston Rockets',
    homeScore: 96,
    awayScore: 99,
    winner: 'Houston Rockets',
    loser: 'Detroit Pistons'
  },
  {
    date: '2016-11-21',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Orlando Magic',
    homeScore: 93,
    awayScore: 89,
    winner: 'Milwaukee Bucks',
    loser: 'Orlando Magic'
  },
  {
    date: '2016-11-21',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Boston Celtics',
    homeScore: 93,
    awayScore: 99,
    winner: 'Boston Celtics',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2016-11-21',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Dallas Mavericks',
    homeScore: 96,
    awayScore: 91,
    winner: 'San Antonio Spurs',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2016-11-21',
    homeTeam: 'LA Clippers',
    awayTeam: 'Toronto Raptors',
    homeScore: 123,
    awayScore: 115,
    winner: 'LA Clippers',
    loser: 'Toronto Raptors'
  },
  {
    date: '2016-11-22',
    homeTeam: 'New York Knicks',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 107,
    awayScore: 103,
    winner: 'New York Knicks',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2016-11-22',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 94,
    awayScore: 112,
    winner: 'New Orleans Pelicans',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2016-11-22',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Chicago Bulls',
    homeScore: 110,
    awayScore: 107,
    winner: 'Denver Nuggets',
    loser: 'Chicago Bulls'
  },
  {
    date: '2016-11-22',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 111,
    awayScore: 109,
    winner: 'Los Angeles Lakers',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2016-11-23',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 99,
    awayScore: 104,
    winner: 'Memphis Grizzlies',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2016-11-23',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'San Antonio Spurs',
    homeScore: 114,
    awayScore: 119,
    winner: 'San Antonio Spurs',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2016-11-23',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Phoenix Suns',
    homeScore: 87,
    awayScore: 92,
    winner: 'Phoenix Suns',
    loser: 'Orlando Magic'
  },
  {
    date: '2016-11-23',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 137,
    awayScore: 125,
    winner: 'Cleveland Cavaliers',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2016-11-23',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Atlanta Hawks',
    homeScore: 85,
    awayScore: 96,
    winner: 'Atlanta Hawks',
    loser: 'Indiana Pacers'
  },
  {
    date: '2016-11-23',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Boston Celtics',
    homeScore: 92,
    awayScore: 111,
    winner: 'Boston Celtics',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2016-11-23',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Miami Heat',
    homeScore: 107,
    awayScore: 84,
    winner: 'Detroit Pistons',
    loser: 'Miami Heat'
  },
  {
    date: '2016-11-23',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Toronto Raptors',
    homeScore: 102,
    awayScore: 115,
    winner: 'Toronto Raptors',
    loser: 'Houston Rockets'
  },
  {
    date: '2016-11-23',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'LA Clippers',
    homeScore: 104,
    awayScore: 124,
    winner: 'LA Clippers',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2016-11-23',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Denver Nuggets',
    homeScore: 108,
    awayScore: 83,
    winner: 'Utah Jazz',
    loser: 'Denver Nuggets'
  },
  {
    date: '2016-11-23',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 117,
    awayScore: 96,
    winner: 'New Orleans Pelicans',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2016-11-23',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 149,
    awayScore: 106,
    winner: 'Golden State Warriors',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2016-11-23',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 116,
    awayScore: 101,
    winner: 'Sacramento Kings',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2016-11-25',
    homeTeam: 'Boston Celtics',
    awayTeam: 'San Antonio Spurs',
    homeScore: 103,
    awayScore: 109,
    winner: 'San Antonio Spurs',
    loser: 'Boston Celtics'
  },
  {
    date: '2016-11-25',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Washington Wizards',
    homeScore: 91,
    awayScore: 94,
    winner: 'Washington Wizards',
    loser: 'Orlando Magic'
  },
  {
    date: '2016-11-25',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Dallas Mavericks',
    homeScore: 128,
    awayScore: 90,
    winner: 'Cleveland Cavaliers',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2016-11-25',
    homeTeam: 'New York Knicks',
    awayTeam: 'Charlotte Hornets',
    homeScore: 113,
    awayScore: 111,
    winner: 'New York Knicks',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2016-11-25',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Chicago Bulls',
    homeScore: 89,
    awayScore: 105,
    winner: 'Chicago Bulls',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2016-11-25',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'LA Clippers',
    homeScore: 108,
    awayScore: 97,
    winner: 'Detroit Pistons',
    loser: 'LA Clippers'
  },
  {
    date: '2016-11-25',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Atlanta Hawks',
    homeScore: 95,
    awayScore: 68,
    winner: 'Utah Jazz',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2016-11-25',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Toronto Raptors',
    homeScore: 99,
    awayScore: 105,
    winner: 'Toronto Raptors',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2016-11-25',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Miami Heat',
    homeScore: 81,
    awayScore: 90,
    winner: 'Miami Heat',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2016-11-25',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Brooklyn Nets',
    homeScore: 118,
    awayScore: 97,
    winner: 'Indiana Pacers',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2016-11-25',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 129,
    awayScore: 132,
    winner: 'Oklahoma City Thunder',
    loser: 'Denver Nuggets'
  },
  {
    date: '2016-11-25',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 85,
    awayScore: 98,
    winner: 'Minnesota Timberwolves',
    loser: 'Phoenix Suns'
  },
  {
    date: '2016-11-25',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 119,
    awayScore: 104,
    winner: 'Portland Trail Blazers',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2016-11-25',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Golden State Warriors',
    homeScore: 85,
    awayScore: 109,
    winner: 'Golden State Warriors',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2016-11-25',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Houston Rockets',
    homeScore: 104,
    awayScore: 117,
    winner: 'Houston Rockets',
    loser: 'Sacramento Kings'
  },
  {
    date: '2016-11-26',
    homeTeam: 'Washington Wizards',
    awayTeam: 'San Antonio Spurs',
    homeScore: 100,
    awayScore: 112,
    winner: 'San Antonio Spurs',
    loser: 'Washington Wizards'
  },
  {
    date: '2016-11-26',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'New York Knicks',
    homeScore: 107,
    awayScore: 102,
    winner: 'Charlotte Hornets',
    loser: 'New York Knicks'
  },
  {
    date: '2016-11-26',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Detroit Pistons',
    homeScore: 106,
    awayScore: 88,
    winner: 'Oklahoma City Thunder',
    loser: 'Detroit Pistons'
  },
  {
    date: '2016-11-26',
    homeTeam: 'Miami Heat',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 107,
    awayScore: 110,
    winner: 'Memphis Grizzlies',
    loser: 'Miami Heat'
  },
  {
    date: '2016-11-26',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 115,
    awayScore: 102,
    winner: 'Golden State Warriors',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2016-11-27',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 108,
    awayScore: 112,
    winner: 'Cleveland Cavaliers',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2016-11-27',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Denver Nuggets',
    homeScore: 114,
    awayScore: 120,
    winner: 'Denver Nuggets',
    loser: 'Phoenix Suns'
  },
  {
    date: '2016-11-27',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Sacramento Kings',
    homeScore: 105,
    awayScore: 122,
    winner: 'Sacramento Kings',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2016-11-27',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 96,
    awayScore: 104,
    winner: 'Milwaukee Bucks',
    loser: 'Orlando Magic'
  },
  {
    date: '2016-11-27',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'LA Clippers',
    homeScore: 91,
    awayScore: 70,
    winner: 'Indiana Pacers',
    loser: 'LA Clippers'
  },
  {
    date: '2016-11-27',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 91,
    awayScore: 81,
    winner: 'Dallas Mavericks',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2016-11-27',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Houston Rockets',
    homeScore: 114,
    awayScore: 130,
    winner: 'Houston Rockets',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2016-11-27',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Atlanta Hawks',
    homeScore: 109,
    awayScore: 94,
    winner: 'Los Angeles Lakers',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2016-11-28',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Sacramento Kings',
    homeScore: 101,
    awayScore: 95,
    winner: 'Washington Wizards',
    loser: 'Sacramento Kings'
  },
  {
    date: '2016-11-28',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 122,
    awayScore: 95,
    winner: 'Toronto Raptors',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2016-11-28',
    homeTeam: 'New York Knicks',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 103,
    awayScore: 112,
    winner: 'Oklahoma City Thunder',
    loser: 'New York Knicks'
  },
  {
    date: '2016-11-28',
    homeTeam: 'Miami Heat',
    awayTeam: 'Boston Celtics',
    homeScore: 104,
    awayScore: 112,
    winner: 'Boston Celtics',
    loser: 'Miami Heat'
  },
  {
    date: '2016-11-28',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Charlotte Hornets',
    homeScore: 85,
    awayScore: 104,
    winner: 'Charlotte Hornets',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2016-11-28',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Utah Jazz',
    homeScore: 103,
    awayScore: 112,
    winner: 'Utah Jazz',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2016-11-28',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Atlanta Hawks',
    homeScore: 105,
    awayScore: 100,
    winner: 'Golden State Warriors',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2016-11-29',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Detroit Pistons',
    homeScore: 89,
    awayScore: 112,
    winner: 'Detroit Pistons',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2016-11-29',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'LA Clippers',
    homeScore: 127,
    awayScore: 122,
    winner: 'Brooklyn Nets',
    loser: 'LA Clippers'
  },
  {
    date: '2016-11-29',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 118,
    awayScore: 101,
    winner: 'Milwaukee Bucks',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2016-11-29',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 105,
    awayScore: 88,
    winner: 'New Orleans Pelicans',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2016-11-29',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Orlando Magic',
    homeScore: 83,
    awayScore: 95,
    winner: 'Orlando Magic',
    loser: 'San Antonio Spurs'
  },
  {
    date: '2016-11-29',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Houston Rockets',
    homeScore: 120,
    awayScore: 101,
    winner: 'Utah Jazz',
    loser: 'Houston Rockets'
  },
  {
    date: '2016-11-30',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Detroit Pistons',
    homeScore: 114,
    awayScore: 121,
    winner: 'Detroit Pistons',
    loser: 'Boston Celtics'
  },
  {
    date: '2016-11-30',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 120,
    awayScore: 105,
    winner: 'Toronto Raptors',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2016-11-30',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 90,
    awayScore: 96,
    winner: 'Los Angeles Lakers',
    loser: 'Chicago Bulls'
  },
  {
    date: '2016-11-30',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Washington Wizards',
    homeScore: 126,
    awayScore: 115,
    winner: 'Oklahoma City Thunder',
    loser: 'Washington Wizards'
  },
  {
    date: '2016-11-30',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'New York Knicks',
    homeScore: 104,
    awayScore: 106,
    winner: 'New York Knicks',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2016-11-30',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'San Antonio Spurs',
    homeScore: 87,
    awayScore: 94,
    winner: 'San Antonio Spurs',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2016-11-30',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Miami Heat',
    homeScore: 98,
    awayScore: 106,
    winner: 'Miami Heat',
    loser: 'Denver Nuggets'
  },
  {
    date: '2016-11-30',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Atlanta Hawks',
    homeScore: 109,
    awayScore: 107,
    winner: 'Phoenix Suns',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2016-11-30',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Indiana Pacers',
    homeScore: 131,
    awayScore: 109,
    winner: 'Portland Trail Blazers',
    loser: 'Indiana Pacers'
  },
  {
    date: '2016-12-01',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Dallas Mavericks',
    homeScore: 97,
    awayScore: 87,
    winner: 'Charlotte Hornets',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2016-12-01',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 93,
    awayScore: 111,
    winner: 'Milwaukee Bucks',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2016-12-01',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Orlando Magic',
    homeScore: 95,
    awayScore: 94,
    winner: 'Memphis Grizzlies',
    loser: 'Orlando Magic'
  },
  {
    date: '2016-12-01',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'LA Clippers',
    homeScore: 94,
    awayScore: 113,
    winner: 'LA Clippers',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2016-12-01',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Miami Heat',
    homeScore: 110,
    awayScore: 111,
    winner: 'Miami Heat',
    loser: 'Utah Jazz'
  },
  {
    date: '2016-12-01',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Houston Rockets',
    homeScore: 127,
    awayScore: 132,
    winner: 'Houston Rockets',
    loser: 'Golden State Warriors'
  },
  {
    date: '2016-12-02',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Orlando Magic',
    homeScore: 88,
    awayScore: 105,
    winner: 'Orlando Magic',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2016-12-02',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Sacramento Kings',
    homeScore: 97,
    awayScore: 92,
    winner: 'Boston Celtics',
    loser: 'Sacramento Kings'
  },
  {
    date: '2016-12-02',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 113,
    awayScore: 80,
    winner: 'Toronto Raptors',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2016-12-02',
    homeTeam: 'New York Knicks',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 118,
    awayScore: 114,
    winner: 'New York Knicks',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2016-12-02',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 111,
    awayScore: 105,
    winner: 'Chicago Bulls',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2016-12-02',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'LA Clippers',
    homeScore: 96,
    awayScore: 114,
    winner: 'LA Clippers',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2016-12-02',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Detroit Pistons',
    homeScore: 85,
    awayScore: 121,
    winner: 'Detroit Pistons',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2016-12-02',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Washington Wizards',
    homeScore: 107,
    awayScore: 105,
    winner: 'San Antonio Spurs',
    loser: 'Washington Wizards'
  },
  {
    date: '2016-12-02',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Houston Rockets',
    homeScore: 110,
    awayScore: 128,
    winner: 'Houston Rockets',
    loser: 'Denver Nuggets'
  },
  {
    date: '2016-12-03',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Brooklyn Nets',
    homeScore: 112,
    awayScore: 103,
    winner: 'Milwaukee Bucks',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2016-12-03',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 120,
    awayScore: 125,
    winner: 'Minnesota Timberwolves',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2016-12-03',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Atlanta Hawks',
    homeScore: 128,
    awayScore: 84,
    winner: 'Toronto Raptors',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2016-12-03',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Boston Celtics',
    homeScore: 106,
    awayScore: 107,
    winner: 'Boston Celtics',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2016-12-03',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 103,
    awayScore: 100,
    winner: 'Memphis Grizzlies',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2016-12-03',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Chicago Bulls',
    homeScore: 107,
    awayScore: 82,
    winner: 'Dallas Mavericks',
    loser: 'Chicago Bulls'
  },
  {
    date: '2016-12-03',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Denver Nuggets',
    homeScore: 105,
    awayScore: 98,
    winner: 'Utah Jazz',
    loser: 'Denver Nuggets'
  },
  {
    date: '2016-12-03',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Miami Heat',
    homeScore: 99,
    awayScore: 92,
    winner: 'Portland Trail Blazers',
    loser: 'Miami Heat'
  },
  {
    date: '2016-12-03',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Phoenix Suns',
    homeScore: 138,
    awayScore: 109,
    winner: 'Golden State Warriors',
    loser: 'Phoenix Suns'
  },
  {
    date: '2016-12-04',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Orlando Magic',
    homeScore: 92,
    awayScore: 98,
    winner: 'Orlando Magic',
    loser: 'Detroit Pistons'
  },
  {
    date: '2016-12-04',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 101,
    awayScore: 92,
    winner: 'Oklahoma City Thunder',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2016-12-04',
    homeTeam: 'New York Knicks',
    awayTeam: 'Sacramento Kings',
    homeScore: 106,
    awayScore: 98,
    winner: 'New York Knicks',
    loser: 'Sacramento Kings'
  },
  {
    date: '2016-12-04',
    homeTeam: 'LA Clippers',
    awayTeam: 'Indiana Pacers',
    homeScore: 102,
    awayScore: 111,
    winner: 'Indiana Pacers',
    loser: 'LA Clippers'
  },
  {
    date: '2016-12-05',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Denver Nuggets',
    homeScore: 98,
    awayScore: 106,
    winner: 'Denver Nuggets',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2016-12-05',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 112,
    awayScore: 116,
    winner: 'Cleveland Cavaliers',
    loser: 'Toronto Raptors'
  },
  {
    date: '2016-12-05',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Washington Wizards',
    homeScore: 113,
    awayScore: 118,
    winner: 'Washington Wizards',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2016-12-05',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 99,
    awayScore: 102,
    winner: 'Oklahoma City Thunder',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2016-12-05',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 110,
    awayScore: 112,
    winner: 'Portland Trail Blazers',
    loser: 'Chicago Bulls'
  },
  {
    date: '2016-12-05',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'San Antonio Spurs',
    homeScore: 96,
    awayScore: 97,
    winner: 'San Antonio Spurs',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2016-12-05',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 108,
    awayScore: 110,
    winner: 'Memphis Grizzlies',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2016-12-05',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Boston Celtics',
    homeScore: 107,
    awayScore: 106,
    winner: 'Houston Rockets',
    loser: 'Boston Celtics'
  },
  {
    date: '2016-12-05',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Charlotte Hornets',
    homeScore: 101,
    awayScore: 109,
    winner: 'Charlotte Hornets',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2016-12-05',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Utah Jazz',
    homeScore: 101,
    awayScore: 107,
    winner: 'Utah Jazz',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2016-12-05',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Indiana Pacers',
    homeScore: 142,
    awayScore: 106,
    winner: 'Golden State Warriors',
    loser: 'Indiana Pacers'
  },
  {
    date: '2016-12-06',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Orlando Magic',
    homeScore: 116,
    awayScore: 124,
    winner: 'Orlando Magic',
    loser: 'Washington Wizards'
  },
  {
    date: '2016-12-06',
    homeTeam: 'Miami Heat',
    awayTeam: 'New York Knicks',
    homeScore: 103,
    awayScore: 114,
    winner: 'New York Knicks',
    loser: 'Miami Heat'
  },
  {
    date: '2016-12-06',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Chicago Bulls',
    homeScore: 102,
    awayScore: 91,
    winner: 'Detroit Pistons',
    loser: 'Chicago Bulls'
  },
  {
    date: '2016-12-06',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 96,
    awayScore: 91,
    winner: 'Memphis Grizzlies',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2016-12-06',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'San Antonio Spurs',
    homeScore: 91,
    awayScore: 105,
    winner: 'San Antonio Spurs',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2016-12-06',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Phoenix Suns',
    homeScore: 112,
    awayScore: 105,
    winner: 'Utah Jazz',
    loser: 'Phoenix Suns'
  },
  {
    date: '2016-12-07',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Detroit Pistons',
    homeScore: 87,
    awayScore: 77,
    winner: 'Charlotte Hornets',
    loser: 'Detroit Pistons'
  },
  {
    date: '2016-12-07',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Boston Celtics',
    homeScore: 87,
    awayScore: 117,
    winner: 'Boston Celtics',
    loser: 'Orlando Magic'
  },
  {
    date: '2016-12-07',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Denver Nuggets',
    homeScore: 116,
    awayScore: 111,
    winner: 'Brooklyn Nets',
    loser: 'Denver Nuggets'
  },
  {
    date: '2016-12-07',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Miami Heat',
    homeScore: 103,
    awayScore: 95,
    winner: 'Atlanta Hawks',
    loser: 'Miami Heat'
  },
  {
    date: '2016-12-07',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 115,
    awayScore: 107,
    winner: 'Milwaukee Bucks',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2016-12-07',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 134,
    awayScore: 95,
    winner: 'Houston Rockets',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2016-12-07',
    homeTeam: 'New York Knicks',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 94,
    awayScore: 126,
    winner: 'Cleveland Cavaliers',
    loser: 'New York Knicks'
  },
  {
    date: '2016-12-07',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Sacramento Kings',
    homeScore: 89,
    awayScore: 120,
    winner: 'Sacramento Kings',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2016-12-07',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Indiana Pacers',
    homeScore: 94,
    awayScore: 109,
    winner: 'Indiana Pacers',
    loser: 'Phoenix Suns'
  },
  {
    date: '2016-12-07',
    homeTeam: 'LA Clippers',
    awayTeam: 'Golden State Warriors',
    homeScore: 98,
    awayScore: 115,
    winner: 'Golden State Warriors',
    loser: 'LA Clippers'
  },
  {
    date: '2016-12-08',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 124,
    awayScore: 110,
    winner: 'Toronto Raptors',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2016-12-08',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Denver Nuggets',
    homeScore: 92,
    awayScore: 85,
    winner: 'Washington Wizards',
    loser: 'Denver Nuggets'
  },
  {
    date: '2016-12-08',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 88,
    awayScore: 86,
    winner: 'Memphis Grizzlies',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2016-12-08',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 88,
    awayScore: 99,
    winner: 'Philadelphia 76ers',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2016-12-08',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Golden State Warriors',
    homeScore: 99,
    awayScore: 106,
    winner: 'Golden State Warriors',
    loser: 'Utah Jazz'
  },
  {
    date: '2016-12-08',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'San Antonio Spurs',
    homeScore: 95,
    awayScore: 91,
    winner: 'Chicago Bulls',
    loser: 'San Antonio Spurs'
  },
  {
    date: '2016-12-09',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Orlando Magic',
    homeScore: 109,
    awayScore: 88,
    winner: 'Charlotte Hornets',
    loser: 'Orlando Magic'
  },
  {
    date: '2016-12-09',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Miami Heat',
    homeScore: 114,
    awayScore: 84,
    winner: 'Cleveland Cavaliers',
    loser: 'Miami Heat'
  },
  {
    date: '2016-12-09',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Toronto Raptors',
    homeScore: 94,
    awayScore: 101,
    winner: 'Toronto Raptors',
    loser: 'Boston Celtics'
  },
  {
    date: '2016-12-09',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Atlanta Hawks',
    homeScore: 110,
    awayScore: 114,
    winner: 'Atlanta Hawks',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2016-12-09',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Houston Rockets',
    homeScore: 99,
    awayScore: 102,
    winner: 'Houston Rockets',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2016-12-09',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Detroit Pistons',
    homeScore: 90,
    awayScore: 117,
    winner: 'Detroit Pistons',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2016-12-09',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Indiana Pacers',
    homeScore: 111,
    awayScore: 103,
    winner: 'Dallas Mavericks',
    loser: 'Indiana Pacers'
  },
  {
    date: '2016-12-09',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Phoenix Suns',
    homeScore: 115,
    awayScore: 119,
    winner: 'Phoenix Suns',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2016-12-09',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'New York Knicks',
    homeScore: 100,
    awayScore: 103,
    winner: 'New York Knicks',
    loser: 'Sacramento Kings'
  },
  {
    date: '2016-12-10',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 110,
    awayScore: 105,
    winner: 'Washington Wizards',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2016-12-10',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Denver Nuggets',
    homeScore: 113,
    awayScore: 121,
    winner: 'Denver Nuggets',
    loser: 'Orlando Magic'
  },
  {
    date: '2016-12-10',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 118,
    awayScore: 111,
    winner: 'Indiana Pacers',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2016-12-10',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Charlotte Hornets',
    homeScore: 116,
    awayScore: 105,
    winner: 'Cleveland Cavaliers',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2016-12-10',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Miami Heat',
    homeScore: 105,
    awayScore: 100,
    winner: 'Chicago Bulls',
    loser: 'Miami Heat'
  },
  {
    date: '2016-12-10',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Golden State Warriors',
    homeScore: 110,
    awayScore: 89,
    winner: 'Memphis Grizzlies',
    loser: 'Golden State Warriors'
  },
  {
    date: '2016-12-10',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Dallas Mavericks',
    homeScore: 109,
    awayScore: 87,
    winner: 'Houston Rockets',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2016-12-10',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Brooklyn Nets',
    homeScore: 130,
    awayScore: 101,
    winner: 'San Antonio Spurs',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2016-12-10',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Sacramento Kings',
    homeScore: 104,
    awayScore: 84,
    winner: 'Utah Jazz',
    loser: 'Sacramento Kings'
  },
  {
    date: '2016-12-10',
    homeTeam: 'LA Clippers',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 133,
    awayScore: 105,
    winner: 'LA Clippers',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2016-12-11',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 79,
    awayScore: 97,
    winner: 'Philadelphia 76ers',
    loser: 'Detroit Pistons'
  },
  {
    date: '2016-12-11',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Boston Celtics',
    homeScore: 99,
    awayScore: 96,
    winner: 'Oklahoma City Thunder',
    loser: 'Boston Celtics'
  },
  {
    date: '2016-12-11',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Golden State Warriors',
    homeScore: 108,
    awayScore: 116,
    winner: 'Golden State Warriors',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2016-12-11',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 119,
    awayScore: 120,
    winner: 'New Orleans Pelicans',
    loser: 'Phoenix Suns'
  },
  {
    date: '2016-12-11',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'New York Knicks',
    homeScore: 112,
    awayScore: 118,
    winner: 'New York Knicks',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2016-12-12',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Charlotte Hornets',
    homeScore: 110,
    awayScore: 94,
    winner: 'Indiana Pacers',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2016-12-12',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 122,
    awayScore: 100,
    winner: 'Toronto Raptors',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2016-12-12',
    homeTeam: 'Miami Heat',
    awayTeam: 'Washington Wizards',
    homeScore: 112,
    awayScore: 101,
    winner: 'Miami Heat',
    loser: 'Washington Wizards'
  },
  {
    date: '2016-12-12',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Brooklyn Nets',
    homeScore: 122,
    awayScore: 118,
    winner: 'Houston Rockets',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2016-12-12',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Denver Nuggets',
    homeScore: 112,
    awayScore: 92,
    winner: 'Dallas Mavericks',
    loser: 'Denver Nuggets'
  },
  {
    date: '2016-12-12',
    homeTeam: 'LA Clippers',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 121,
    awayScore: 120,
    winner: 'LA Clippers',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2016-12-12',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 116,
    awayScore: 92,
    winner: 'Sacramento Kings',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2016-12-13',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 103,
    awayScore: 86,
    winner: 'Cleveland Cavaliers',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2016-12-13',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Orlando Magic',
    homeScore: 120,
    awayScore: 131,
    winner: 'Orlando Magic',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2016-12-13',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 94,
    awayScore: 99,
    winner: 'Minnesota Timberwolves',
    loser: 'Chicago Bulls'
  },
  {
    date: '2016-12-13',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Golden State Warriors',
    homeScore: 109,
    awayScore: 113,
    winner: 'Golden State Warriors',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2016-12-13',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'New York Knicks',
    homeScore: 113,
    awayScore: 111,
    winner: 'Phoenix Suns',
    loser: 'New York Knicks'
  },
  {
    date: '2016-12-13',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 114,
    awayScore: 95,
    winner: 'Portland Trail Blazers',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2016-12-14',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Toronto Raptors',
    homeScore: 114,
    awayScore: 123,
    winner: 'Toronto Raptors',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2016-12-14',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Charlotte Hornets',
    homeScore: 109,
    awayScore: 106,
    winner: 'Washington Wizards',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2016-12-14',
    homeTeam: 'Orlando Magic',
    awayTeam: 'LA Clippers',
    homeScore: 108,
    awayScore: 113,
    winner: 'LA Clippers',
    loser: 'Orlando Magic'
  },
  {
    date: '2016-12-14',
    homeTeam: 'Miami Heat',
    awayTeam: 'Indiana Pacers',
    homeScore: 95,
    awayScore: 89,
    winner: 'Miami Heat',
    loser: 'Indiana Pacers'
  },
  {
    date: '2016-12-14',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 107,
    awayScore: 97,
    winner: 'Brooklyn Nets',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2016-12-14',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 93,
    awayScore: 85,
    winner: 'Memphis Grizzlies',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2016-12-14',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Sacramento Kings',
    homeScore: 132,
    awayScore: 98,
    winner: 'Houston Rockets',
    loser: 'Sacramento Kings'
  },
  {
    date: '2016-12-14',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Detroit Pistons',
    homeScore: 85,
    awayScore: 95,
    winner: 'Detroit Pistons',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2016-12-14',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 109,
    awayScore: 89,
    winner: 'Utah Jazz',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2016-12-14',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Boston Celtics',
    homeScore: 108,
    awayScore: 101,
    winner: 'San Antonio Spurs',
    loser: 'Boston Celtics'
  },
  {
    date: '2016-12-15',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Chicago Bulls',
    homeScore: 108,
    awayScore: 97,
    winner: 'Milwaukee Bucks',
    loser: 'Chicago Bulls'
  },
  {
    date: '2016-12-15',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Indiana Pacers',
    homeScore: 102,
    awayScore: 95,
    winner: 'New Orleans Pelicans',
    loser: 'Indiana Pacers'
  },
  {
    date: '2016-12-15',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 132,
    awayScore: 120,
    winner: 'Denver Nuggets',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2016-12-15',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'San Antonio Spurs',
    homeScore: 92,
    awayScore: 107,
    winner: 'San Antonio Spurs',
    loser: 'Phoenix Suns'
  },
  {
    date: '2016-12-15',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'New York Knicks',
    homeScore: 103,
    awayScore: 90,
    winner: 'Golden State Warriors',
    loser: 'New York Knicks'
  },
  {
    date: '2016-12-16',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Detroit Pistons',
    homeScore: 122,
    awayScore: 108,
    winner: 'Washington Wizards',
    loser: 'Detroit Pistons'
  },
  {
    date: '2016-12-16',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Brooklyn Nets',
    homeScore: 118,
    awayScore: 111,
    winner: 'Orlando Magic',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2016-12-16',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Charlotte Hornets',
    homeScore: 96,
    awayScore: 88,
    winner: 'Boston Celtics',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2016-12-16',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Atlanta Hawks',
    homeScore: 121,
    awayScore: 125,
    winner: 'Atlanta Hawks',
    loser: 'Toronto Raptors'
  },
  {
    date: '2016-12-16',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 69,
    awayScore: 95,
    winner: 'Milwaukee Bucks',
    loser: 'Chicago Bulls'
  },
  {
    date: '2016-12-16',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Sacramento Kings',
    homeScore: 92,
    awayScore: 96,
    winner: 'Sacramento Kings',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2016-12-16',
    homeTeam: 'Houston Rockets',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 122,
    awayScore: 100,
    winner: 'Houston Rockets',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2016-12-16',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 89,
    awayScore: 100,
    winner: 'Los Angeles Lakers',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2016-12-16',
    homeTeam: 'Miami Heat',
    awayTeam: 'LA Clippers',
    homeScore: 98,
    awayScore: 102,
    winner: 'LA Clippers',
    loser: 'Miami Heat'
  },
  {
    date: '2016-12-16',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Dallas Mavericks',
    homeScore: 103,
    awayScore: 100,
    winner: 'Utah Jazz',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2016-12-17',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Phoenix Suns',
    homeScore: 114,
    awayScore: 101,
    winner: 'Oklahoma City Thunder',
    loser: 'Phoenix Suns'
  },
  {
    date: '2016-12-17',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Indiana Pacers',
    homeScore: 90,
    awayScore: 105,
    winner: 'Indiana Pacers',
    loser: 'Detroit Pistons'
  },
  {
    date: '2016-12-17',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Charlotte Hornets',
    homeScore: 99,
    awayScore: 107,
    winner: 'Charlotte Hornets',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2016-12-17',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 119,
    awayScore: 108,
    winner: 'Cleveland Cavaliers',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2016-12-17',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Houston Rockets',
    homeScore: 109,
    awayScore: 111,
    winner: 'Houston Rockets',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2016-12-17',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'New York Knicks',
    homeScore: 127,
    awayScore: 114,
    winner: 'Denver Nuggets',
    loser: 'New York Knicks'
  },
  {
    date: '2016-12-17',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 135,
    awayScore: 90,
    winner: 'Golden State Warriors',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2016-12-18',
    homeTeam: 'Washington Wizards',
    awayTeam: 'LA Clippers',
    homeScore: 117,
    awayScore: 110,
    winner: 'Washington Wizards',
    loser: 'LA Clippers'
  },
  {
    date: '2016-12-18',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Utah Jazz',
    homeScore: 73,
    awayScore: 82,
    winner: 'Utah Jazz',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2016-12-18',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Brooklyn Nets',
    homeScore: 108,
    awayScore: 107,
    winner: 'Philadelphia 76ers',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2016-12-18',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Toronto Raptors',
    homeScore: 79,
    awayScore: 109,
    winner: 'Toronto Raptors',
    loser: 'Orlando Magic'
  },
  {
    date: '2016-12-18',
    homeTeam: 'Miami Heat',
    awayTeam: 'Boston Celtics',
    homeScore: 95,
    awayScore: 105,
    winner: 'Boston Celtics',
    loser: 'Miami Heat'
  },
  {
    date: '2016-12-18',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Sacramento Kings',
    homeScore: 99,
    awayScore: 79,
    winner: 'Dallas Mavericks',
    loser: 'Sacramento Kings'
  },
  {
    date: '2016-12-18',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 113,
    awayScore: 100,
    winner: 'San Antonio Spurs',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2016-12-19',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Washington Wizards',
    homeScore: 107,
    awayScore: 105,
    winner: 'Indiana Pacers',
    loser: 'Washington Wizards'
  },
  {
    date: '2016-12-19',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Detroit Pistons',
    homeScore: 113,
    awayScore: 82,
    winner: 'Chicago Bulls',
    loser: 'Detroit Pistons'
  },
  {
    date: '2016-12-19',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Atlanta Hawks',
    homeScore: 108,
    awayScore: 110,
    winner: 'Atlanta Hawks',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2016-12-19',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Phoenix Suns',
    homeScore: 115,
    awayScore: 108,
    winner: 'Minnesota Timberwolves',
    loser: 'Phoenix Suns'
  },
  {
    date: '2016-12-19',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Dallas Mavericks',
    homeScore: 117,
    awayScore: 107,
    winner: 'Denver Nuggets',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2016-12-20',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 93,
    awayScore: 108,
    winner: 'New Orleans Pelicans',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2016-12-20',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 117,
    awayScore: 113,
    winner: 'Charlotte Hornets',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2016-12-20',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Brooklyn Nets',
    homeScore: 116,
    awayScore: 104,
    winner: 'Toronto Raptors',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2016-12-20',
    homeTeam: 'New York Knicks',
    awayTeam: 'Indiana Pacers',
    homeScore: 118,
    awayScore: 111,
    winner: 'New York Knicks',
    loser: 'Indiana Pacers'
  },
  {
    date: '2016-12-20',
    homeTeam: 'Miami Heat',
    awayTeam: 'Orlando Magic',
    homeScore: 130,
    awayScore: 136,
    winner: 'Orlando Magic',
    loser: 'Miami Heat'
  },
  {
    date: '2016-12-20',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 108,
    awayScore: 114,
    winner: 'Cleveland Cavaliers',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2016-12-20',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Boston Celtics',
    homeScore: 109,
    awayScore: 112,
    winner: 'Boston Celtics',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2016-12-20',
    homeTeam: 'Houston Rockets',
    awayTeam: 'San Antonio Spurs',
    homeScore: 100,
    awayScore: 102,
    winner: 'San Antonio Spurs',
    loser: 'Houston Rockets'
  },
  {
    date: '2016-12-20',
    homeTeam: 'LA Clippers',
    awayTeam: 'Denver Nuggets',
    homeScore: 119,
    awayScore: 102,
    winner: 'LA Clippers',
    loser: 'Denver Nuggets'
  },
  {
    date: '2016-12-20',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Utah Jazz',
    homeScore: 104,
    awayScore: 74,
    winner: 'Golden State Warriors',
    loser: 'Utah Jazz'
  },
  {
    date: '2016-12-20',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 126,
    awayScore: 121,
    winner: 'Sacramento Kings',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2016-12-21',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 113,
    awayScore: 102,
    winner: 'Cleveland Cavaliers',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2016-12-21',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 84,
    awayScore: 92,
    winner: 'Minnesota Timberwolves',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2016-12-21',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 86,
    awayScore: 98,
    winner: 'Memphis Grizzlies',
    loser: 'Detroit Pistons'
  },
  {
    date: '2016-12-21',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Washington Wizards',
    homeScore: 97,
    awayScore: 107,
    winner: 'Washington Wizards',
    loser: 'Chicago Bulls'
  },
  {
    date: '2016-12-21',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 110,
    awayScore: 121,
    winner: 'Oklahoma City Thunder',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2016-12-21',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Sacramento Kings',
    homeScore: 93,
    awayScore: 94,
    winner: 'Sacramento Kings',
    loser: 'Utah Jazz'
  },
  {
    date: '2016-12-21',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Houston Rockets',
    homeScore: 111,
    awayScore: 125,
    winner: 'Houston Rockets',
    loser: 'Phoenix Suns'
  },
  {
    date: '2016-12-21',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Dallas Mavericks',
    homeScore: 95,
    awayScore: 96,
    winner: 'Dallas Mavericks',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2016-12-22',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Golden State Warriors',
    homeScore: 101,
    awayScore: 117,
    winner: 'Golden State Warriors',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2016-12-22',
    homeTeam: 'New York Knicks',
    awayTeam: 'Orlando Magic',
    homeScore: 106,
    awayScore: 95,
    winner: 'New York Knicks',
    loser: 'Orlando Magic'
  },
  {
    date: '2016-12-22',
    homeTeam: 'Miami Heat',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 115,
    awayScore: 107,
    winner: 'Miami Heat',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2016-12-22',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Boston Celtics',
    homeScore: 102,
    awayScore: 109,
    winner: 'Boston Celtics',
    loser: 'Indiana Pacers'
  },
  {
    date: '2016-12-22',
    homeTeam: 'LA Clippers',
    awayTeam: 'San Antonio Spurs',
    homeScore: 106,
    awayScore: 101,
    winner: 'LA Clippers',
    loser: 'San Antonio Spurs'
  },
  {
    date: '2016-12-23',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Chicago Bulls',
    homeScore: 103,
    awayScore: 91,
    winner: 'Charlotte Hornets',
    loser: 'Chicago Bulls'
  },
  {
    date: '2016-12-23',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 109,
    awayScore: 90,
    winner: 'Orlando Magic',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2016-12-23',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Brooklyn Nets',
    homeScore: 119,
    awayScore: 99,
    winner: 'Cleveland Cavaliers',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2016-12-23',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 112,
    awayScore: 117,
    winner: 'Oklahoma City Thunder',
    loser: 'Boston Celtics'
  },
  {
    date: '2016-12-23',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Golden State Warriors',
    homeScore: 113,
    awayScore: 119,
    winner: 'Golden State Warriors',
    loser: 'Detroit Pistons'
  },
  {
    date: '2016-12-23',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Washington Wizards',
    homeScore: 123,
    awayScore: 96,
    winner: 'Milwaukee Bucks',
    loser: 'Washington Wizards'
  },
  {
    date: '2016-12-23',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Houston Rockets',
    homeScore: 115,
    awayScore: 109,
    winner: 'Memphis Grizzlies',
    loser: 'Houston Rockets'
  },
  {
    date: '2016-12-23',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Miami Heat',
    homeScore: 91,
    awayScore: 87,
    winner: 'New Orleans Pelicans',
    loser: 'Miami Heat'
  },
  {
    date: '2016-12-23',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Sacramento Kings',
    homeScore: 105,
    awayScore: 109,
    winner: 'Sacramento Kings',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2016-12-23',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Atlanta Hawks',
    homeScore: 108,
    awayScore: 109,
    winner: 'Atlanta Hawks',
    loser: 'Denver Nuggets'
  },
  {
    date: '2016-12-23',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Toronto Raptors',
    homeScore: 98,
    awayScore: 104,
    winner: 'Toronto Raptors',
    loser: 'Utah Jazz'
  },
  {
    date: '2016-12-23',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 123,
    awayScore: 116,
    winner: 'Phoenix Suns',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2016-12-23',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'San Antonio Spurs',
    homeScore: 90,
    awayScore: 110,
    winner: 'San Antonio Spurs',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2016-12-23',
    homeTeam: 'LA Clippers',
    awayTeam: 'Dallas Mavericks',
    homeScore: 88,
    awayScore: 90,
    winner: 'Dallas Mavericks',
    loser: 'LA Clippers'
  },
  {
    date: '2016-12-25',
    homeTeam: 'New York Knicks',
    awayTeam: 'Boston Celtics',
    homeScore: 114,
    awayScore: 119,
    winner: 'Boston Celtics',
    loser: 'New York Knicks'
  },
  {
    date: '2016-12-25',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Golden State Warriors',
    homeScore: 109,
    awayScore: 108,
    winner: 'Cleveland Cavaliers',
    loser: 'Golden State Warriors'
  },
  {
    date: '2016-12-25',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Chicago Bulls',
    homeScore: 119,
    awayScore: 100,
    winner: 'San Antonio Spurs',
    loser: 'Chicago Bulls'
  },
  {
    date: '2016-12-25',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 112,
    awayScore: 100,
    winner: 'Oklahoma City Thunder',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2016-12-25',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'LA Clippers',
    homeScore: 111,
    awayScore: 102,
    winner: 'Los Angeles Lakers',
    loser: 'LA Clippers'
  },
  {
    date: '2016-12-26',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 107,
    awayScore: 102,
    winner: 'Washington Wizards',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2016-12-26',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 112,
    awayScore: 102,
    winner: 'Orlando Magic',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2016-12-26',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Charlotte Hornets',
    homeScore: 120,
    awayScore: 118,
    winner: 'Brooklyn Nets',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2016-12-26',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 106,
    awayScore: 90,
    winner: 'Detroit Pistons',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2016-12-26',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Indiana Pacers',
    homeScore: 90,
    awayScore: 85,
    winner: 'Chicago Bulls',
    loser: 'Indiana Pacers'
  },
  {
    date: '2016-12-26',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Dallas Mavericks',
    homeScore: 111,
    awayScore: 104,
    winner: 'New Orleans Pelicans',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2016-12-26',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Phoenix Suns',
    homeScore: 131,
    awayScore: 115,
    winner: 'Houston Rockets',
    loser: 'Phoenix Suns'
  },
  {
    date: '2016-12-26',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Atlanta Hawks',
    homeScore: 104,
    awayScore: 90,
    winner: 'Minnesota Timberwolves',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2016-12-26',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Toronto Raptors',
    homeScore: 91,
    awayScore: 95,
    winner: 'Toronto Raptors',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2016-12-26',
    homeTeam: 'LA Clippers',
    awayTeam: 'Denver Nuggets',
    homeScore: 102,
    awayScore: 106,
    winner: 'Denver Nuggets',
    loser: 'LA Clippers'
  },
  {
    date: '2016-12-26',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 102,
    awayScore: 100,
    winner: 'Sacramento Kings',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2016-12-27',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 113,
    awayScore: 103,
    winner: 'Boston Celtics',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2016-12-27',
    homeTeam: 'Miami Heat',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 94,
    awayScore: 106,
    winner: 'Oklahoma City Thunder',
    loser: 'Miami Heat'
  },
  {
    date: '2016-12-27',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Houston Rockets',
    homeScore: 107,
    awayScore: 123,
    winner: 'Houston Rockets',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2016-12-27',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Utah Jazz',
    homeScore: 100,
    awayScore: 102,
    winner: 'Utah Jazz',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2016-12-28',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Indiana Pacers',
    homeScore: 111,
    awayScore: 105,
    winner: 'Washington Wizards',
    loser: 'Indiana Pacers'
  },
  {
    date: '2016-12-28',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Charlotte Hornets',
    homeScore: 101,
    awayScore: 120,
    winner: 'Charlotte Hornets',
    loser: 'Orlando Magic'
  },
  {
    date: '2016-12-28',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'New York Knicks',
    homeScore: 102,
    awayScore: 98,
    winner: 'Atlanta Hawks',
    loser: 'New York Knicks'
  },
  {
    date: '2016-12-28',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 94,
    awayScore: 119,
    winner: 'Milwaukee Bucks',
    loser: 'Detroit Pistons'
  },
  {
    date: '2016-12-28',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Brooklyn Nets',
    homeScore: 101,
    awayScore: 99,
    winner: 'Chicago Bulls',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2016-12-28',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'LA Clippers',
    homeScore: 102,
    awayScore: 98,
    winner: 'New Orleans Pelicans',
    loser: 'LA Clippers'
  },
  {
    date: '2016-12-28',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Phoenix Suns',
    homeScore: 119,
    awayScore: 98,
    winner: 'San Antonio Spurs',
    loser: 'Phoenix Suns'
  },
  {
    date: '2016-12-28',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 105,
    awayScore: 103,
    winner: 'Denver Nuggets',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2016-12-28',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Sacramento Kings',
    homeScore: 102,
    awayScore: 89,
    winner: 'Portland Trail Blazers',
    loser: 'Sacramento Kings'
  },
  {
    date: '2016-12-28',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Toronto Raptors',
    homeScore: 121,
    awayScore: 111,
    winner: 'Golden State Warriors',
    loser: 'Toronto Raptors'
  },
  {
    date: '2016-12-29',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Miami Heat',
    homeScore: 91,
    awayScore: 82,
    winner: 'Charlotte Hornets',
    loser: 'Miami Heat'
  },
  {
    date: '2016-12-29',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 114,
    awayScore: 80,
    winner: 'Memphis Grizzlies',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2016-12-29',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Boston Celtics',
    homeScore: 124,
    awayScore: 118,
    winner: 'Cleveland Cavaliers',
    loser: 'Boston Celtics'
  },
  {
    date: '2016-12-29',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 100,
    awayScore: 83,
    winner: 'Utah Jazz',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2016-12-29',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Toronto Raptors',
    homeScore: 99,
    awayScore: 91,
    winner: 'Phoenix Suns',
    loser: 'Toronto Raptors'
  },
  {
    date: '2016-12-29',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Dallas Mavericks',
    homeScore: 89,
    awayScore: 101,
    winner: 'Dallas Mavericks',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2016-12-30',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Chicago Bulls',
    homeScore: 111,
    awayScore: 101,
    winner: 'Indiana Pacers',
    loser: 'Chicago Bulls'
  },
  {
    date: '2016-12-30',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Brooklyn Nets',
    homeScore: 118,
    awayScore: 95,
    winner: 'Washington Wizards',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2016-12-30',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Miami Heat',
    homeScore: 117,
    awayScore: 114,
    winner: 'Boston Celtics',
    loser: 'Miami Heat'
  },
  {
    date: '2016-12-30',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'New York Knicks',
    homeScore: 104,
    awayScore: 92,
    winner: 'New Orleans Pelicans',
    loser: 'New York Knicks'
  },
  {
    date: '2016-12-30',
    homeTeam: 'Houston Rockets',
    awayTeam: 'LA Clippers',
    homeScore: 140,
    awayScore: 116,
    winner: 'Houston Rockets',
    loser: 'LA Clippers'
  },
  {
    date: '2016-12-30',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 116,
    awayScore: 99,
    winner: 'Minnesota Timberwolves',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2016-12-30',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Detroit Pistons',
    homeScore: 105,
    awayScore: 98,
    winner: 'Atlanta Hawks',
    loser: 'Detroit Pistons'
  },
  {
    date: '2016-12-30',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 110,
    awayScore: 94,
    winner: 'San Antonio Spurs',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2016-12-30',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 122,
    awayScore: 124,
    winner: 'Philadelphia 76ers',
    loser: 'Denver Nuggets'
  },
  {
    date: '2016-12-30',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Dallas Mavericks',
    homeScore: 108,
    awayScore: 99,
    winner: 'Golden State Warriors',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2016-12-31',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 98,
    awayScore: 112,
    winner: 'Memphis Grizzlies',
    loser: 'Sacramento Kings'
  },
  {
    date: '2016-12-31',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 96,
    awayScore: 116,
    winner: 'Milwaukee Bucks',
    loser: 'Chicago Bulls'
  },
  {
    date: '2016-12-31',
    homeTeam: 'Houston Rockets',
    awayTeam: 'New York Knicks',
    homeScore: 129,
    awayScore: 122,
    winner: 'Houston Rockets',
    loser: 'New York Knicks'
  },
  {
    date: '2016-12-31',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 109,
    awayScore: 121,
    winner: 'Cleveland Cavaliers',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2016-12-31',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Phoenix Suns',
    homeScore: 91,
    awayScore: 86,
    winner: 'Utah Jazz',
    loser: 'Phoenix Suns'
  },
  {
    date: '2016-12-31',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'LA Clippers',
    homeScore: 114,
    awayScore: 88,
    winner: 'Oklahoma City Thunder',
    loser: 'LA Clippers'
  },
  {
    date: '2017-01-01',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'San Antonio Spurs',
    homeScore: 114,
    awayScore: 112,
    winner: 'Atlanta Hawks',
    loser: 'San Antonio Spurs'
  },
  {
    date: '2017-01-01',
    homeTeam: 'Miami Heat',
    awayTeam: 'Detroit Pistons',
    homeScore: 98,
    awayScore: 107,
    winner: 'Detroit Pistons',
    loser: 'Miami Heat'
  },
  {
    date: '2017-01-01',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Orlando Magic',
    homeScore: 117,
    awayScore: 104,
    winner: 'Indiana Pacers',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-01-01',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 89,
    awayScore: 95,
    winner: 'Portland Trail Blazers',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2017-01-01',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Toronto Raptors',
    homeScore: 114,
    awayScore: 123,
    winner: 'Toronto Raptors',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-01-02',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 98,
    awayScore: 94,
    winner: 'Milwaukee Bucks',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2017-01-02',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 90,
    awayScore: 82,
    winner: 'Cleveland Cavaliers',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2017-01-02',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Utah Jazz',
    homeScore: 89,
    awayScore: 101,
    winner: 'Utah Jazz',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-01-02',
    homeTeam: 'New York Knicks',
    awayTeam: 'Orlando Magic',
    homeScore: 103,
    awayScore: 115,
    winner: 'Orlando Magic',
    loser: 'New York Knicks'
  },
  {
    date: '2017-01-02',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Charlotte Hornets',
    homeScore: 118,
    awayScore: 111,
    winner: 'Chicago Bulls',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-01-02',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Washington Wizards',
    homeScore: 101,
    awayScore: 91,
    winner: 'Houston Rockets',
    loser: 'Washington Wizards'
  },
  {
    date: '2017-01-02',
    homeTeam: 'LA Clippers',
    awayTeam: 'Phoenix Suns',
    homeScore: 109,
    awayScore: 98,
    winner: 'LA Clippers',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-01-02',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Denver Nuggets',
    homeScore: 127,
    awayScore: 119,
    winner: 'Golden State Warriors',
    loser: 'Denver Nuggets'
  },
  {
    date: '2017-01-03',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 93,
    awayScore: 91,
    winner: 'Philadelphia 76ers',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2017-01-03',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Utah Jazz',
    homeScore: 115,
    awayScore: 104,
    winner: 'Boston Celtics',
    loser: 'Utah Jazz'
  },
  {
    date: '2017-01-03',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Indiana Pacers',
    homeScore: 116,
    awayScore: 121,
    winner: 'Indiana Pacers',
    loser: 'Detroit Pistons'
  },
  {
    date: '2017-01-03',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Washington Wizards',
    homeScore: 113,
    awayScore: 105,
    winner: 'Dallas Mavericks',
    loser: 'Washington Wizards'
  },
  {
    date: '2017-01-03',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Toronto Raptors',
    homeScore: 110,
    awayScore: 82,
    winner: 'San Antonio Spurs',
    loser: 'Toronto Raptors'
  },
  {
    date: '2017-01-03',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Sacramento Kings',
    homeScore: 113,
    awayScore: 120,
    winner: 'Sacramento Kings',
    loser: 'Denver Nuggets'
  },
  {
    date: '2017-01-03',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Miami Heat',
    homeScore: 99,
    awayScore: 90,
    winner: 'Phoenix Suns',
    loser: 'Miami Heat'
  },
  {
    date: '2017-01-03',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 116,
    awayScore: 102,
    winner: 'Los Angeles Lakers',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2017-01-04',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 123,
    awayScore: 112,
    winner: 'Charlotte Hornets',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2017-01-04',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Atlanta Hawks',
    homeScore: 92,
    awayScore: 111,
    winner: 'Atlanta Hawks',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-01-04',
    homeTeam: 'New York Knicks',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 104,
    awayScore: 105,
    winner: 'Milwaukee Bucks',
    loser: 'New York Knicks'
  },
  {
    date: '2017-01-04',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Chicago Bulls',
    homeScore: 94,
    awayScore: 106,
    winner: 'Chicago Bulls',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2017-01-04',
    homeTeam: 'LA Clippers',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 115,
    awayScore: 106,
    winner: 'LA Clippers',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2017-01-04',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 125,
    awayScore: 117,
    winner: 'Golden State Warriors',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2017-01-04',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Miami Heat',
    homeScore: 102,
    awayScore: 107,
    winner: 'Miami Heat',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-01-05',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Brooklyn Nets',
    homeScore: 121,
    awayScore: 109,
    winner: 'Indiana Pacers',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-01-05',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Utah Jazz',
    homeScore: 101,
    awayScore: 93,
    winner: 'Toronto Raptors',
    loser: 'Utah Jazz'
  },
  {
    date: '2017-01-05',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Charlotte Hornets',
    homeScore: 115,
    awayScore: 114,
    winner: 'Detroit Pistons',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-01-05',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Atlanta Hawks',
    homeScore: 94,
    awayScore: 99,
    winner: 'Atlanta Hawks',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2017-01-05',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 118,
    awayScore: 116,
    winner: 'Houston Rockets',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2017-01-05',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Phoenix Suns',
    homeScore: 95,
    awayScore: 102,
    winner: 'Phoenix Suns',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2017-01-05',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 118,
    awayScore: 109,
    winner: 'Portland Trail Blazers',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-01-05',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'San Antonio Spurs',
    homeScore: 99,
    awayScore: 127,
    winner: 'San Antonio Spurs',
    loser: 'Denver Nuggets'
  },
  {
    date: '2017-01-06',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 112,
    awayScore: 105,
    winner: 'Washington Wizards',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2017-01-06',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Houston Rockets',
    homeScore: 93,
    awayScore: 100,
    winner: 'Houston Rockets',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-01-06',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 110,
    awayScore: 106,
    winner: 'Boston Celtics',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2017-01-06',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 108,
    awayScore: 116,
    winner: 'Cleveland Cavaliers',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-01-06',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'New York Knicks',
    homeScore: 111,
    awayScore: 116,
    winner: 'New York Knicks',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2017-01-06',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Miami Heat',
    homeScore: 127,
    awayScore: 100,
    winner: 'Los Angeles Lakers',
    loser: 'Miami Heat'
  },
  {
    date: '2017-01-06',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 119,
    awayScore: 128,
    winner: 'Memphis Grizzlies',
    loser: 'Golden State Warriors'
  },
  {
    date: '2017-01-06',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'LA Clippers',
    homeScore: 98,
    awayScore: 106,
    winner: 'LA Clippers',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-01-07',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'New York Knicks',
    homeScore: 123,
    awayScore: 109,
    winner: 'Indiana Pacers',
    loser: 'New York Knicks'
  },
  {
    date: '2017-01-07',
    homeTeam: 'Boston Celtics',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 117,
    awayScore: 108,
    winner: 'Boston Celtics',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2017-01-07',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Toronto Raptors',
    homeScore: 123,
    awayScore: 118,
    winner: 'Chicago Bulls',
    loser: 'Toronto Raptors'
  },
  {
    date: '2017-01-07',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Denver Nuggets',
    homeScore: 121,
    awayScore: 106,
    winner: 'Oklahoma City Thunder',
    loser: 'Denver Nuggets'
  },
  {
    date: '2017-01-07',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Utah Jazz',
    homeScore: 92,
    awayScore: 94,
    winner: 'Utah Jazz',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2017-01-07',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Atlanta Hawks',
    homeScore: 82,
    awayScore: 97,
    winner: 'Atlanta Hawks',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2017-01-07',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Charlotte Hornets',
    homeScore: 102,
    awayScore: 85,
    winner: 'San Antonio Spurs',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-01-08',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Detroit Pistons',
    homeScore: 124,
    awayScore: 125,
    winner: 'Detroit Pistons',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2017-01-08',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 95,
    awayScore: 105,
    winner: 'Philadelphia 76ers',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-01-08',
    homeTeam: 'LA Clippers',
    awayTeam: 'Miami Heat',
    homeScore: 98,
    awayScore: 86,
    winner: 'LA Clippers',
    loser: 'Miami Heat'
  },
  {
    date: '2017-01-08',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Washington Wizards',
    homeScore: 101,
    awayScore: 107,
    winner: 'Washington Wizards',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2017-01-08',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Houston Rockets',
    homeScore: 122,
    awayScore: 129,
    winner: 'Houston Rockets',
    loser: 'Toronto Raptors'
  },
  {
    date: '2017-01-08',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Utah Jazz',
    homeScore: 88,
    awayScore: 79,
    winner: 'Memphis Grizzlies',
    loser: 'Utah Jazz'
  },
  {
    date: '2017-01-08',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 116,
    awayScore: 120,
    winner: 'Cleveland Cavaliers',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-01-08',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Golden State Warriors',
    homeScore: 106,
    awayScore: 117,
    winner: 'Golden State Warriors',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-01-08',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Orlando Magic',
    homeScore: 111,
    awayScore: 95,
    winner: 'Los Angeles Lakers',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-01-09',
    homeTeam: 'New York Knicks',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 96,
    awayScore: 110,
    winner: 'New Orleans Pelicans',
    loser: 'New York Knicks'
  },
  {
    date: '2017-01-09',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 94,
    awayScore: 109,
    winner: 'Oklahoma City Thunder',
    loser: 'Chicago Bulls'
  },
  {
    date: '2017-01-09',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Dallas Mavericks',
    homeScore: 101,
    awayScore: 92,
    winner: 'Minnesota Timberwolves',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2017-01-10',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Chicago Bulls',
    homeScore: 101,
    awayScore: 99,
    winner: 'Washington Wizards',
    loser: 'Chicago Bulls'
  },
  {
    date: '2017-01-10',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Boston Celtics',
    homeScore: 114,
    awayScore: 106,
    winner: 'Toronto Raptors',
    loser: 'Boston Celtics'
  },
  {
    date: '2017-01-10',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Atlanta Hawks',
    homeScore: 97,
    awayScore: 117,
    winner: 'Atlanta Hawks',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-01-10',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Charlotte Hornets',
    homeScore: 121,
    awayScore: 114,
    winner: 'Houston Rockets',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-01-10',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 107,
    awayScore: 109,
    winner: 'Milwaukee Bucks',
    loser: 'San Antonio Spurs'
  },
  {
    date: '2017-01-10',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 100,
    awayScore: 92,
    winner: 'Utah Jazz',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2017-01-10',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 87,
    awayScore: 108,
    winner: 'Portland Trail Blazers',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-01-10',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Miami Heat',
    homeScore: 107,
    awayScore: 95,
    winner: 'Golden State Warriors',
    loser: 'Miami Heat'
  },
  {
    date: '2017-01-10',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Detroit Pistons',
    homeScore: 100,
    awayScore: 94,
    winner: 'Sacramento Kings',
    loser: 'Detroit Pistons'
  },
  {
    date: '2017-01-11',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'New York Knicks',
    homeScore: 98,
    awayScore: 97,
    winner: 'Philadelphia 76ers',
    loser: 'New York Knicks'
  },
  {
    date: '2017-01-11',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 103,
    awayScore: 95,
    winner: 'Oklahoma City Thunder',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2017-01-11',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Houston Rockets',
    homeScore: 119,
    awayScore: 105,
    winner: 'Minnesota Timberwolves',
    loser: 'Houston Rockets'
  },
  {
    date: '2017-01-11',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Washington Wizards',
    homeScore: 117,
    awayScore: 108,
    winner: 'Boston Celtics',
    loser: 'Washington Wizards'
  },
  {
    date: '2017-01-11',
    homeTeam: 'LA Clippers',
    awayTeam: 'Orlando Magic',
    homeScore: 105,
    awayScore: 96,
    winner: 'LA Clippers',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-01-11',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 102,
    awayScore: 86,
    winner: 'Portland Trail Blazers',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2017-01-12',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 95,
    awayScore: 104,
    winner: 'New Orleans Pelicans',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-01-12',
    homeTeam: 'New York Knicks',
    awayTeam: 'Chicago Bulls',
    homeScore: 104,
    awayScore: 89,
    winner: 'New York Knicks',
    loser: 'Chicago Bulls'
  },
  {
    date: '2017-01-12',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 134,
    awayScore: 94,
    winner: 'San Antonio Spurs',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-01-12',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Indiana Pacers',
    homeScore: 140,
    awayScore: 112,
    winner: 'Denver Nuggets',
    loser: 'Indiana Pacers'
  },
  {
    date: '2017-01-12',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Detroit Pistons',
    homeScore: 127,
    awayScore: 107,
    winner: 'Golden State Warriors',
    loser: 'Detroit Pistons'
  },
  {
    date: '2017-01-12',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Dallas Mavericks',
    homeScore: 108,
    awayScore: 113,
    winner: 'Dallas Mavericks',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-01-13',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Brooklyn Nets',
    homeScore: 132,
    awayScore: 113,
    winner: 'Toronto Raptors',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-01-13',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Charlotte Hornets',
    homeScore: 102,
    awayScore: 93,
    winner: 'Philadelphia 76ers',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-01-13',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Miami Heat',
    homeScore: 116,
    awayScore: 108,
    winner: 'Milwaukee Bucks',
    loser: 'Miami Heat'
  },
  {
    date: '2017-01-13',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 105,
    awayScore: 110,
    winner: 'Memphis Grizzlies',
    loser: 'Houston Rockets'
  },
  {
    date: '2017-01-13',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 96,
    awayScore: 86,
    winner: 'Minnesota Timberwolves',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2017-01-13',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Boston Celtics',
    homeScore: 101,
    awayScore: 103,
    winner: 'Boston Celtics',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2017-01-13',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Orlando Magic',
    homeScore: 109,
    awayScore: 115,
    winner: 'Orlando Magic',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2017-01-13',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 108,
    awayScore: 120,
    winner: 'Cleveland Cavaliers',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-01-13',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Detroit Pistons',
    homeScore: 110,
    awayScore: 77,
    winner: 'Utah Jazz',
    loser: 'Detroit Pistons'
  },
  {
    date: '2017-01-14',
    homeTeam: 'LA Clippers',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 113,
    awayScore: 97,
    winner: 'LA Clippers',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-01-14',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 107,
    awayScore: 99,
    winner: 'Chicago Bulls',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2017-01-14',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 109,
    awayScore: 93,
    winner: 'Washington Wizards',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2017-01-14',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Orlando Magic',
    homeScore: 114,
    awayScore: 107,
    winner: 'Utah Jazz',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-01-14',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'San Antonio Spurs',
    homeScore: 108,
    awayScore: 105,
    winner: 'Phoenix Suns',
    loser: 'San Antonio Spurs'
  },
  {
    date: '2017-01-15',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'New York Knicks',
    homeScore: 116,
    awayScore: 101,
    winner: 'Toronto Raptors',
    loser: 'New York Knicks'
  },
  {
    date: '2017-01-15',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 111,
    awayScore: 98,
    winner: 'Atlanta Hawks',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2017-01-15',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 98,
    awayScore: 87,
    winner: 'Dallas Mavericks',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2017-01-15',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Houston Rockets',
    homeScore: 112,
    awayScore: 137,
    winner: 'Houston Rockets',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-01-15',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 118,
    awayScore: 122,
    winner: 'Oklahoma City Thunder',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-01-15',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Chicago Bulls',
    homeScore: 104,
    awayScore: 108,
    winner: 'Chicago Bulls',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2017-01-15',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Detroit Pistons',
    homeScore: 97,
    awayScore: 102,
    winner: 'Detroit Pistons',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-01-16',
    homeTeam: 'New York Knicks',
    awayTeam: 'Atlanta Hawks',
    homeScore: 107,
    awayScore: 108,
    winner: 'Atlanta Hawks',
    loser: 'New York Knicks'
  },
  {
    date: '2017-01-16',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 120,
    awayScore: 101,
    winner: 'Washington Wizards',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2017-01-16',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 104,
    awayScore: 113,
    winner: 'Philadelphia 76ers',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2017-01-16',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 98,
    awayScore: 95,
    winner: 'Indiana Pacers',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2017-01-16',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Orlando Magic',
    homeScore: 125,
    awayScore: 112,
    winner: 'Denver Nuggets',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-01-16',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Charlotte Hornets',
    homeScore: 108,
    awayScore: 98,
    winner: 'Boston Celtics',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-01-16',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 126,
    awayScore: 91,
    winner: 'Golden State Warriors',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2017-01-16',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Utah Jazz',
    homeScore: 101,
    awayScore: 106,
    winner: 'Utah Jazz',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-01-16',
    homeTeam: 'LA Clippers',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 120,
    awayScore: 98,
    winner: 'LA Clippers',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2017-01-17',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Toronto Raptors',
    homeScore: 109,
    awayScore: 119,
    winner: 'Toronto Raptors',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-01-17',
    homeTeam: 'Miami Heat',
    awayTeam: 'Houston Rockets',
    homeScore: 109,
    awayScore: 103,
    winner: 'Miami Heat',
    loser: 'Houston Rockets'
  },
  {
    date: '2017-01-17',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Dallas Mavericks',
    homeScore: 98,
    awayScore: 99,
    winner: 'Dallas Mavericks',
    loser: 'Chicago Bulls'
  },
  {
    date: '2017-01-17',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 122,
    awayScore: 114,
    winner: 'San Antonio Spurs',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2017-01-17',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Denver Nuggets',
    homeScore: 121,
    awayScore: 127,
    winner: 'Denver Nuggets',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-01-18',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Toronto Raptors',
    homeScore: 94,
    awayScore: 89,
    winner: 'Philadelphia 76ers',
    loser: 'Toronto Raptors'
  },
  {
    date: '2017-01-18',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 104,
    awayScore: 101,
    winner: 'Washington Wizards',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2017-01-18',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 107,
    awayScore: 85,
    winner: 'Charlotte Hornets',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2017-01-18',
    homeTeam: 'Boston Celtics',
    awayTeam: 'New York Knicks',
    homeScore: 106,
    awayScore: 117,
    winner: 'New York Knicks',
    loser: 'Boston Celtics'
  },
  {
    date: '2017-01-18',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Orlando Magic',
    homeScore: 118,
    awayScore: 98,
    winner: 'New Orleans Pelicans',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-01-18',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 111,
    awayScore: 92,
    winner: 'Houston Rockets',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2017-01-18',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Atlanta Hawks',
    homeScore: 118,
    awayScore: 95,
    winner: 'Detroit Pistons',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2017-01-18',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 121,
    awayScore: 100,
    winner: 'Golden State Warriors',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2017-01-18',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Indiana Pacers',
    homeScore: 100,
    awayScore: 106,
    winner: 'Indiana Pacers',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-01-19',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Phoenix Suns',
    homeScore: 118,
    awayScore: 103,
    winner: 'Cleveland Cavaliers',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-01-19',
    homeTeam: 'Miami Heat',
    awayTeam: 'Dallas Mavericks',
    homeScore: 99,
    awayScore: 95,
    winner: 'Miami Heat',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2017-01-19',
    homeTeam: 'New York Knicks',
    awayTeam: 'Washington Wizards',
    homeScore: 110,
    awayScore: 113,
    winner: 'Washington Wizards',
    loser: 'New York Knicks'
  },
  {
    date: '2017-01-19',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Denver Nuggets',
    homeScore: 118,
    awayScore: 104,
    winner: 'San Antonio Spurs',
    loser: 'Denver Nuggets'
  },
  {
    date: '2017-01-19',
    homeTeam: 'LA Clippers',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 101,
    awayScore: 104,
    winner: 'Minnesota Timberwolves',
    loser: 'LA Clippers'
  },
  {
    date: '2017-01-20',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 93,
    awayScore: 92,
    winner: 'Philadelphia 76ers',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2017-01-20',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Toronto Raptors',
    homeScore: 113,
    awayScore: 78,
    winner: 'Charlotte Hornets',
    loser: 'Toronto Raptors'
  },
  {
    date: '2017-01-20',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 112,
    awayScore: 96,
    winner: 'Orlando Magic',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2017-01-20',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Sacramento Kings',
    homeScore: 107,
    awayScore: 91,
    winner: 'Memphis Grizzlies',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-01-20',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Brooklyn Nets',
    homeScore: 114,
    awayScore: 143,
    winner: 'Brooklyn Nets',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2017-01-20',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Golden State Warriors',
    homeScore: 108,
    awayScore: 125,
    winner: 'Golden State Warriors',
    loser: 'Houston Rockets'
  },
  {
    date: '2017-01-20',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Chicago Bulls',
    homeScore: 102,
    awayScore: 93,
    winner: 'Atlanta Hawks',
    loser: 'Chicago Bulls'
  },
  {
    date: '2017-01-20',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Utah Jazz',
    homeScore: 107,
    awayScore: 112,
    winner: 'Utah Jazz',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2017-01-20',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Indiana Pacers',
    homeScore: 108,
    awayScore: 95,
    winner: 'Los Angeles Lakers',
    loser: 'Indiana Pacers'
  },
  {
    date: '2017-01-21',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 123,
    awayScore: 127,
    winner: 'Portland Trail Blazers',
    loser: 'Boston Celtics'
  },
  {
    date: '2017-01-21',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Washington Wizards',
    homeScore: 113,
    awayScore: 112,
    winner: 'Detroit Pistons',
    loser: 'Washington Wizards'
  },
  {
    date: '2017-01-21',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Brooklyn Nets',
    homeScore: 112,
    awayScore: 105,
    winner: 'Charlotte Hornets',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-01-21',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 110,
    awayScore: 93,
    winner: 'Atlanta Hawks',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2017-01-21',
    homeTeam: 'New York Knicks',
    awayTeam: 'Phoenix Suns',
    homeScore: 105,
    awayScore: 107,
    winner: 'Phoenix Suns',
    loser: 'New York Knicks'
  },
  {
    date: '2017-01-21',
    homeTeam: 'Miami Heat',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 109,
    awayScore: 97,
    winner: 'Miami Heat',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2017-01-21',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Houston Rockets',
    homeScore: 95,
    awayScore: 119,
    winner: 'Houston Rockets',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2017-01-21',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'San Antonio Spurs',
    homeScore: 115,
    awayScore: 118,
    winner: 'San Antonio Spurs',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2017-01-21',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'LA Clippers',
    homeScore: 123,
    awayScore: 98,
    winner: 'Denver Nuggets',
    loser: 'LA Clippers'
  },
  {
    date: '2017-01-21',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Indiana Pacers',
    homeScore: 109,
    awayScore: 100,
    winner: 'Utah Jazz',
    loser: 'Indiana Pacers'
  },
  {
    date: '2017-01-21',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Sacramento Kings',
    homeScore: 102,
    awayScore: 99,
    winner: 'Chicago Bulls',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-01-22',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Golden State Warriors',
    homeScore: 98,
    awayScore: 118,
    winner: 'Golden State Warriors',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-01-22',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 122,
    awayScore: 73,
    winner: 'Dallas Mavericks',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-01-22',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Phoenix Suns',
    homeScore: 103,
    awayScore: 115,
    winner: 'Phoenix Suns',
    loser: 'Toronto Raptors'
  },
  {
    date: '2017-01-22',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Denver Nuggets',
    homeScore: 111,
    awayScore: 108,
    winner: 'Minnesota Timberwolves',
    loser: 'Denver Nuggets'
  },
  {
    date: '2017-01-23',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Washington Wizards',
    homeScore: 99,
    awayScore: 109,
    winner: 'Washington Wizards',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-01-23',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'San Antonio Spurs',
    homeScore: 86,
    awayScore: 112,
    winner: 'San Antonio Spurs',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-01-23',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'LA Clippers',
    homeScore: 105,
    awayScore: 115,
    winner: 'LA Clippers',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2017-01-23',
    homeTeam: 'Miami Heat',
    awayTeam: 'Golden State Warriors',
    homeScore: 105,
    awayScore: 102,
    winner: 'Miami Heat',
    loser: 'Golden State Warriors'
  },
  {
    date: '2017-01-23',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Sacramento Kings',
    homeScore: 104,
    awayScore: 109,
    winner: 'Sacramento Kings',
    loser: 'Detroit Pistons'
  },
  {
    date: '2017-01-23',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Houston Rockets',
    homeScore: 127,
    awayScore: 114,
    winner: 'Milwaukee Bucks',
    loser: 'Houston Rockets'
  },
  {
    date: '2017-01-23',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 124,
    awayScore: 122,
    winner: 'New Orleans Pelicans',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2017-01-23',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'New York Knicks',
    homeScore: 103,
    awayScore: 109,
    winner: 'New York Knicks',
    loser: 'Indiana Pacers'
  },
  {
    date: '2017-01-23',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 95,
    awayScore: 97,
    winner: 'Oklahoma City Thunder',
    loser: 'Utah Jazz'
  },
  {
    date: '2017-01-24',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'San Antonio Spurs',
    homeScore: 106,
    awayScore: 108,
    winner: 'San Antonio Spurs',
    loser: 'Toronto Raptors'
  },
  {
    date: '2017-01-24',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'LA Clippers',
    homeScore: 121,
    awayScore: 110,
    winner: 'Philadelphia 76ers',
    loser: 'LA Clippers'
  },
  {
    date: '2017-01-24',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Boston Celtics',
    homeScore: 123,
    awayScore: 108,
    winner: 'Washington Wizards',
    loser: 'Boston Celtics'
  },
  {
    date: '2017-01-24',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Chicago Bulls',
    homeScore: 92,
    awayScore: 100,
    winner: 'Chicago Bulls',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-01-24',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Utah Jazz',
    homeScore: 103,
    awayScore: 93,
    winner: 'Denver Nuggets',
    loser: 'Utah Jazz'
  },
  {
    date: '2017-01-24',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 111,
    awayScore: 112,
    winner: 'Minnesota Timberwolves',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-01-25',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Sacramento Kings',
    homeScore: 112,
    awayScore: 116,
    winner: 'Sacramento Kings',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2017-01-25',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Houston Rockets',
    homeScore: 120,
    awayScore: 109,
    winner: 'Boston Celtics',
    loser: 'Houston Rockets'
  },
  {
    date: '2017-01-25',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Miami Heat',
    homeScore: 106,
    awayScore: 109,
    winner: 'Miami Heat',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-01-25',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Atlanta Hawks',
    homeScore: 114,
    awayScore: 119,
    winner: 'Atlanta Hawks',
    loser: 'Chicago Bulls'
  },
  {
    date: '2017-01-25',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 109,
    awayScore: 114,
    winner: 'Philadelphia 76ers',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2017-01-25',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Toronto Raptors',
    homeScore: 101,
    awayScore: 99,
    winner: 'Memphis Grizzlies',
    loser: 'Toronto Raptors'
  },
  {
    date: '2017-01-25',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 105,
    awayScore: 114,
    winner: 'Oklahoma City Thunder',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2017-01-25',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Golden State Warriors',
    homeScore: 103,
    awayScore: 113,
    winner: 'Golden State Warriors',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-01-25',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'New York Knicks',
    homeScore: 103,
    awayScore: 95,
    winner: 'Dallas Mavericks',
    loser: 'New York Knicks'
  },
  {
    date: '2017-01-25',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 105,
    awayScore: 98,
    winner: 'Portland Trail Blazers',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-01-26',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Dallas Mavericks',
    homeScore: 109,
    awayScore: 98,
    winner: 'Oklahoma City Thunder',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2017-01-26',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Indiana Pacers',
    homeScore: 103,
    awayScore: 109,
    winner: 'Indiana Pacers',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2017-01-26',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Phoenix Suns',
    homeScore: 127,
    awayScore: 120,
    winner: 'Denver Nuggets',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-01-26',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 96,
    awayScore: 88,
    winner: 'Utah Jazz',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-01-27',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Houston Rockets',
    homeScore: 118,
    awayScore: 123,
    winner: 'Houston Rockets',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2017-01-27',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Brooklyn Nets',
    homeScore: 124,
    awayScore: 116,
    winner: 'Cleveland Cavaliers',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-01-27',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Sacramento Kings',
    homeScore: 115,
    awayScore: 111,
    winner: 'Indiana Pacers',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-01-27',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Orlando Magic',
    homeScore: 128,
    awayScore: 98,
    winner: 'Boston Celtics',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-01-27',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 102,
    awayScore: 86,
    winner: 'Toronto Raptors',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2017-01-27',
    homeTeam: 'New York Knicks',
    awayTeam: 'Charlotte Hornets',
    homeScore: 110,
    awayScore: 107,
    winner: 'New York Knicks',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-01-27',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Miami Heat',
    homeScore: 88,
    awayScore: 100,
    winner: 'Miami Heat',
    loser: 'Chicago Bulls'
  },
  {
    date: '2017-01-27',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'San Antonio Spurs',
    homeScore: 119,
    awayScore: 103,
    winner: 'New Orleans Pelicans',
    loser: 'San Antonio Spurs'
  },
  {
    date: '2017-01-27',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Washington Wizards',
    homeScore: 86,
    awayScore: 112,
    winner: 'Washington Wizards',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2017-01-27',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 112,
    awayScore: 109,
    winner: 'Portland Trail Blazers',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2017-01-28',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Sacramento Kings',
    homeScore: 106,
    awayScore: 109,
    winner: 'Sacramento Kings',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-01-28',
    homeTeam: 'Miami Heat',
    awayTeam: 'Detroit Pistons',
    homeScore: 116,
    awayScore: 103,
    winner: 'Miami Heat',
    loser: 'Detroit Pistons'
  },
  {
    date: '2017-01-28',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Boston Celtics',
    homeScore: 108,
    awayScore: 112,
    winner: 'Boston Celtics',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2017-01-28',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'LA Clippers',
    homeScore: 144,
    awayScore: 98,
    winner: 'Golden State Warriors',
    loser: 'LA Clippers'
  },
  {
    date: '2017-01-28',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 95,
    awayScore: 102,
    winner: 'Memphis Grizzlies',
    loser: 'Utah Jazz'
  },
  {
    date: '2017-01-28',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Denver Nuggets',
    homeScore: 112,
    awayScore: 123,
    winner: 'Denver Nuggets',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-01-28',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Brooklyn Nets',
    homeScore: 129,
    awayScore: 109,
    winner: 'Minnesota Timberwolves',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-01-29',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'New York Knicks',
    homeScore: 142,
    awayScore: 139,
    winner: 'Atlanta Hawks',
    loser: 'New York Knicks'
  },
  {
    date: '2017-01-29',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 107,
    awayScore: 91,
    winner: 'Cleveland Cavaliers',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2017-01-29',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Houston Rockets',
    homeScore: 120,
    awayScore: 101,
    winner: 'Indiana Pacers',
    loser: 'Houston Rockets'
  },
  {
    date: '2017-01-29',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Washington Wizards',
    homeScore: 94,
    awayScore: 107,
    winner: 'Washington Wizards',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2017-01-29',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Orlando Magic',
    homeScore: 113,
    awayScore: 114,
    winner: 'Orlando Magic',
    loser: 'Toronto Raptors'
  },
  {
    date: '2017-01-29',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 121,
    awayScore: 108,
    winner: 'Chicago Bulls',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2017-01-29',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Dallas Mavericks',
    homeScore: 101,
    awayScore: 105,
    winner: 'Dallas Mavericks',
    loser: 'San Antonio Spurs'
  },
  {
    date: '2017-01-29',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Golden State Warriors',
    homeScore: 111,
    awayScore: 113,
    winner: 'Golden State Warriors',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2017-01-30',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Sacramento Kings',
    homeScore: 122,
    awayScore: 119,
    winner: 'Philadelphia 76ers',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-01-30',
    homeTeam: 'Miami Heat',
    awayTeam: 'Brooklyn Nets',
    homeScore: 104,
    awayScore: 96,
    winner: 'Miami Heat',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-01-30',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Orlando Magic',
    homeScore: 111,
    awayScore: 105,
    winner: 'Minnesota Timberwolves',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-01-30',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Detroit Pistons',
    homeScore: 113,
    awayScore: 109,
    winner: 'Boston Celtics',
    loser: 'Detroit Pistons'
  },
  {
    date: '2017-01-30',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 104,
    awayScore: 97,
    winner: 'Dallas Mavericks',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2017-01-30',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 96,
    awayScore: 115,
    winner: 'Memphis Grizzlies',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-01-31',
    homeTeam: 'Washington Wizards',
    awayTeam: 'New York Knicks',
    homeScore: 117,
    awayScore: 101,
    winner: 'Washington Wizards',
    loser: 'New York Knicks'
  },
  {
    date: '2017-01-31',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 108,
    awayScore: 106,
    winner: 'Toronto Raptors',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2017-01-31',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Sacramento Kings',
    homeScore: 105,
    awayScore: 83,
    winner: 'Houston Rockets',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-01-31',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 108,
    awayScore: 94,
    winner: 'San Antonio Spurs',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2017-01-31',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Charlotte Hornets',
    homeScore: 115,
    awayScore: 98,
    winner: 'Portland Trail Blazers',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-01-31',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Denver Nuggets',
    homeScore: 120,
    awayScore: 116,
    winner: 'Los Angeles Lakers',
    loser: 'Denver Nuggets'
  },
  {
    date: '2017-02-01',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Indiana Pacers',
    homeScore: 88,
    awayScore: 98,
    winner: 'Indiana Pacers',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-02-01',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 125,
    awayScore: 97,
    winner: 'Cleveland Cavaliers',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2017-02-01',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Toronto Raptors',
    homeScore: 109,
    awayScore: 104,
    winner: 'Boston Celtics',
    loser: 'Toronto Raptors'
  },
  {
    date: '2017-02-01',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'New York Knicks',
    homeScore: 90,
    awayScore: 95,
    winner: 'New York Knicks',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-02-01',
    homeTeam: 'Miami Heat',
    awayTeam: 'Atlanta Hawks',
    homeScore: 116,
    awayScore: 93,
    winner: 'Miami Heat',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2017-02-01',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 118,
    awayScore: 98,
    winner: 'Detroit Pistons',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2017-02-01',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 113,
    awayScore: 95,
    winner: 'Dallas Mavericks',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2017-02-01',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 99,
    awayScore: 119,
    winner: 'Memphis Grizzlies',
    loser: 'Denver Nuggets'
  },
  {
    date: '2017-02-01',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 104,
    awayScore: 88,
    winner: 'Utah Jazz',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2017-02-01',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'LA Clippers',
    homeScore: 114,
    awayScore: 124,
    winner: 'LA Clippers',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-02-01',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Chicago Bulls',
    homeScore: 100,
    awayScore: 128,
    winner: 'Chicago Bulls',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2017-02-01',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Charlotte Hornets',
    homeScore: 126,
    awayScore: 111,
    winner: 'Golden State Warriors',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-02-02',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 116,
    awayScore: 108,
    winner: 'Washington Wizards',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-02-02',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Atlanta Hawks',
    homeScore: 108,
    awayScore: 113,
    winner: 'Atlanta Hawks',
    loser: 'Houston Rockets'
  },
  {
    date: '2017-02-02',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 102,
    awayScore: 86,
    winner: 'San Antonio Spurs',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2017-02-02',
    homeTeam: 'LA Clippers',
    awayTeam: 'Golden State Warriors',
    homeScore: 120,
    awayScore: 133,
    winner: 'Golden State Warriors',
    loser: 'LA Clippers'
  },
  {
    date: '2017-02-03',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Toronto Raptors',
    homeScore: 102,
    awayScore: 94,
    winner: 'Orlando Magic',
    loser: 'Toronto Raptors'
  },
  {
    date: '2017-02-03',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Indiana Pacers',
    homeScore: 97,
    awayScore: 106,
    winner: 'Indiana Pacers',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-02-03',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 116,
    awayScore: 108,
    winner: 'Detroit Pistons',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2017-02-03',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Chicago Bulls',
    homeScore: 121,
    awayScore: 117,
    winner: 'Houston Rockets',
    loser: 'Chicago Bulls'
  },
  {
    date: '2017-02-03',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 114,
    awayScore: 102,
    winner: 'Oklahoma City Thunder',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2017-02-03',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 113,
    awayScore: 107,
    winner: 'Boston Celtics',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-02-03',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 121,
    awayScore: 117,
    winner: 'Denver Nuggets',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2017-02-03',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Phoenix Suns',
    homeScore: 103,
    awayScore: 105,
    winner: 'Phoenix Suns',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-02-03',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Dallas Mavericks',
    homeScore: 104,
    awayScore: 108,
    winner: 'Dallas Mavericks',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2017-02-04',
    homeTeam: 'Washington Wizards',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 105,
    awayScore: 91,
    winner: 'Washington Wizards',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2017-02-04',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Orlando Magic',
    homeScore: 113,
    awayScore: 86,
    winner: 'Atlanta Hawks',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-02-04',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Detroit Pistons',
    homeScore: 105,
    awayScore: 84,
    winner: 'Indiana Pacers',
    loser: 'Detroit Pistons'
  },
  {
    date: '2017-02-04',
    homeTeam: 'Miami Heat',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 125,
    awayScore: 102,
    winner: 'Miami Heat',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2017-02-04',
    homeTeam: 'New York Knicks',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 104,
    awayScore: 111,
    winner: 'Cleveland Cavaliers',
    loser: 'New York Knicks'
  },
  {
    date: '2017-02-04',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Charlotte Hornets',
    homeScore: 105,
    awayScore: 98,
    winner: 'Utah Jazz',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-02-04',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 112,
    awayScore: 137,
    winner: 'Milwaukee Bucks',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-02-04',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Denver Nuggets',
    homeScore: 121,
    awayScore: 97,
    winner: 'San Antonio Spurs',
    loser: 'Denver Nuggets'
  },
  {
    date: '2017-02-04',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 99,
    awayScore: 107,
    winner: 'Memphis Grizzlies',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2017-02-04',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Golden State Warriors',
    homeScore: 109,
    awayScore: 106,
    winner: 'Sacramento Kings',
    loser: 'Golden State Warriors'
  },
  {
    date: '2017-02-05',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Toronto Raptors',
    homeScore: 95,
    awayScore: 103,
    winner: 'Toronto Raptors',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-02-05',
    homeTeam: 'Boston Celtics',
    awayTeam: 'LA Clippers',
    homeScore: 107,
    awayScore: 102,
    winner: 'Boston Celtics',
    loser: 'LA Clippers'
  },
  {
    date: '2017-02-05',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 105,
    awayScore: 99,
    winner: 'Oklahoma City Thunder',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2017-02-06',
    homeTeam: 'New York Knicks',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 107,
    awayScore: 121,
    winner: 'Los Angeles Lakers',
    loser: 'New York Knicks'
  },
  {
    date: '2017-02-06',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 135,
    awayScore: 140,
    winner: 'Cleveland Cavaliers',
    loser: 'Washington Wizards'
  },
  {
    date: '2017-02-06',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 93,
    awayScore: 90,
    winner: 'Indiana Pacers',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2017-02-06',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'LA Clippers',
    homeScore: 118,
    awayScore: 109,
    winner: 'Toronto Raptors',
    loser: 'LA Clippers'
  },
  {
    date: '2017-02-06',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Utah Jazz',
    homeScore: 95,
    awayScore: 120,
    winner: 'Utah Jazz',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2017-02-06',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 113,
    awayScore: 96,
    winner: 'Detroit Pistons',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2017-02-06',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Phoenix Suns',
    homeScore: 111,
    awayScore: 106,
    winner: 'New Orleans Pelicans',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-02-06',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Miami Heat',
    homeScore: 113,
    awayScore: 115,
    winner: 'Miami Heat',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2017-02-06',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Dallas Mavericks',
    homeScore: 110,
    awayScore: 87,
    winner: 'Denver Nuggets',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2017-02-06',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'San Antonio Spurs',
    homeScore: 89,
    awayScore: 74,
    winner: 'Memphis Grizzlies',
    loser: 'San Antonio Spurs'
  },
  {
    date: '2017-02-06',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Chicago Bulls',
    homeScore: 107,
    awayScore: 112,
    winner: 'Chicago Bulls',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-02-07',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Brooklyn Nets',
    homeScore: 111,
    awayScore: 107,
    winner: 'Charlotte Hornets',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-02-07',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Orlando Magic',
    homeScore: 128,
    awayScore: 104,
    winner: 'Houston Rockets',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-02-07',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 113,
    awayScore: 114,
    winner: 'Portland Trail Blazers',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2017-02-08',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'San Antonio Spurs',
    homeScore: 103,
    awayScore: 111,
    winner: 'San Antonio Spurs',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2017-02-08',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 117,
    awayScore: 132,
    winner: 'Cleveland Cavaliers',
    loser: 'Indiana Pacers'
  },
  {
    date: '2017-02-08',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Washington Wizards',
    homeScore: 110,
    awayScore: 114,
    winner: 'Washington Wizards',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-02-08',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Denver Nuggets',
    homeScore: 117,
    awayScore: 106,
    winner: 'Atlanta Hawks',
    loser: 'Denver Nuggets'
  },
  {
    date: '2017-02-08',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 121,
    awayScore: 102,
    winner: 'Detroit Pistons',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-02-08',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Miami Heat',
    homeScore: 88,
    awayScore: 106,
    winner: 'Miami Heat',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2017-02-08',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Phoenix Suns',
    homeScore: 110,
    awayScore: 91,
    winner: 'Memphis Grizzlies',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-02-08',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Utah Jazz',
    homeScore: 94,
    awayScore: 127,
    winner: 'Utah Jazz',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2017-02-08',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Toronto Raptors',
    homeScore: 112,
    awayScore: 109,
    winner: 'Minnesota Timberwolves',
    loser: 'Toronto Raptors'
  },
  {
    date: '2017-02-08',
    homeTeam: 'New York Knicks',
    awayTeam: 'LA Clippers',
    homeScore: 115,
    awayScore: 119,
    winner: 'LA Clippers',
    loser: 'New York Knicks'
  },
  {
    date: '2017-02-08',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Chicago Bulls',
    homeScore: 123,
    awayScore: 92,
    winner: 'Golden State Warriors',
    loser: 'Chicago Bulls'
  },
  {
    date: '2017-02-08',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Boston Celtics',
    homeScore: 108,
    awayScore: 92,
    winner: 'Sacramento Kings',
    loser: 'Boston Celtics'
  },
  {
    date: '2017-02-09',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Houston Rockets',
    homeScore: 95,
    awayScore: 107,
    winner: 'Houston Rockets',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-02-09',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 111,
    awayScore: 112,
    winner: 'Philadelphia 76ers',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-02-09',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 118,
    awayScore: 109,
    winner: 'Oklahoma City Thunder',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2017-02-09',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Utah Jazz',
    homeScore: 112,
    awayScore: 105,
    winner: 'Dallas Mavericks',
    loser: 'Utah Jazz'
  },
  {
    date: '2017-02-09',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Boston Celtics',
    homeScore: 111,
    awayScore: 120,
    winner: 'Boston Celtics',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2017-02-10',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Miami Heat',
    homeScore: 99,
    awayScore: 108,
    winner: 'Miami Heat',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-02-10',
    homeTeam: 'New York Knicks',
    awayTeam: 'Denver Nuggets',
    homeScore: 123,
    awayScore: 131,
    winner: 'Denver Nuggets',
    loser: 'New York Knicks'
  },
  {
    date: '2017-02-10',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'San Antonio Spurs',
    homeScore: 92,
    awayScore: 103,
    winner: 'San Antonio Spurs',
    loser: 'Detroit Pistons'
  },
  {
    date: '2017-02-10',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 114,
    awayScore: 122,
    winner: 'Los Angeles Lakers',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2017-02-10',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Golden State Warriors',
    homeScore: 107,
    awayScore: 122,
    winner: 'Golden State Warriors',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2017-02-10',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 106,
    awayScore: 122,
    winner: 'New Orleans Pelicans',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2017-02-10',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Indiana Pacers',
    homeScore: 112,
    awayScore: 107,
    winner: 'Washington Wizards',
    loser: 'Indiana Pacers'
  },
  {
    date: '2017-02-10',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Atlanta Hawks',
    homeScore: 108,
    awayScore: 107,
    winner: 'Sacramento Kings',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2017-02-10',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Chicago Bulls',
    homeScore: 115,
    awayScore: 97,
    winner: 'Phoenix Suns',
    loser: 'Chicago Bulls'
  },
  {
    date: '2017-02-11',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'LA Clippers',
    homeScore: 102,
    awayScore: 107,
    winner: 'LA Clippers',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-02-11',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 100,
    awayScore: 116,
    winner: 'Milwaukee Bucks',
    loser: 'Indiana Pacers'
  },
  {
    date: '2017-02-11',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Miami Heat',
    homeScore: 117,
    awayScore: 109,
    winner: 'Philadelphia 76ers',
    loser: 'Miami Heat'
  },
  {
    date: '2017-02-11',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Denver Nuggets',
    homeScore: 125,
    awayScore: 109,
    winner: 'Cleveland Cavaliers',
    loser: 'Denver Nuggets'
  },
  {
    date: '2017-02-11',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Phoenix Suns',
    homeScore: 133,
    awayScore: 102,
    winner: 'Houston Rockets',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-02-11',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Golden State Warriors',
    homeScore: 114,
    awayScore: 130,
    winner: 'Golden State Warriors',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2017-02-11',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Orlando Magic',
    homeScore: 112,
    awayScore: 80,
    winner: 'Dallas Mavericks',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-02-11',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Boston Celtics',
    homeScore: 104,
    awayScore: 112,
    winner: 'Boston Celtics',
    loser: 'Utah Jazz'
  },
  {
    date: '2017-02-12',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Chicago Bulls',
    homeScore: 117,
    awayScore: 89,
    winner: 'Minnesota Timberwolves',
    loser: 'Chicago Bulls'
  },
  {
    date: '2017-02-12',
    homeTeam: 'New York Knicks',
    awayTeam: 'San Antonio Spurs',
    homeScore: 94,
    awayScore: 90,
    winner: 'New York Knicks',
    loser: 'San Antonio Spurs'
  },
  {
    date: '2017-02-12',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Detroit Pistons',
    homeScore: 101,
    awayScore: 102,
    winner: 'Detroit Pistons',
    loser: 'Toronto Raptors'
  },
  {
    date: '2017-02-12',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 105,
    awayScore: 99,
    winner: 'Sacramento Kings',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2017-02-13',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 120,
    awayScore: 98,
    winner: 'Washington Wizards',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2017-02-13',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 99,
    awayScore: 105,
    winner: 'Philadelphia 76ers',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-02-13',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 103,
    awayScore: 112,
    winner: 'Memphis Grizzlies',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-02-13',
    homeTeam: 'Miami Heat',
    awayTeam: 'Orlando Magic',
    homeScore: 107,
    awayScore: 116,
    winner: 'Orlando Magic',
    loser: 'Miami Heat'
  },
  {
    date: '2017-02-13',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Detroit Pistons',
    homeScore: 102,
    awayScore: 89,
    winner: 'Milwaukee Bucks',
    loser: 'Detroit Pistons'
  },
  {
    date: '2017-02-13',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'San Antonio Spurs',
    homeScore: 106,
    awayScore: 110,
    winner: 'San Antonio Spurs',
    loser: 'Indiana Pacers'
  },
  {
    date: '2017-02-13',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Boston Celtics',
    homeScore: 98,
    awayScore: 111,
    winner: 'Boston Celtics',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2017-02-13',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Golden State Warriors',
    homeScore: 132,
    awayScore: 110,
    winner: 'Denver Nuggets',
    loser: 'Golden State Warriors'
  },
  {
    date: '2017-02-13',
    homeTeam: 'Utah Jazz',
    awayTeam: 'LA Clippers',
    homeScore: 72,
    awayScore: 88,
    winner: 'LA Clippers',
    loser: 'Utah Jazz'
  },
  {
    date: '2017-02-13',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 108,
    awayScore: 110,
    winner: 'New Orleans Pelicans',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-02-13',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Atlanta Hawks',
    homeScore: 104,
    awayScore: 109,
    winner: 'Atlanta Hawks',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2017-02-14',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Toronto Raptors',
    homeScore: 105,
    awayScore: 94,
    winner: 'Chicago Bulls',
    loser: 'Toronto Raptors'
  },
  {
    date: '2017-02-14',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 108,
    awayScore: 116,
    winner: 'Cleveland Cavaliers',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2017-02-14',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Sacramento Kings',
    homeScore: 96,
    awayScore: 97,
    winner: 'Sacramento Kings',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-02-15',
    homeTeam: 'Orlando Magic',
    awayTeam: 'San Antonio Spurs',
    homeScore: 79,
    awayScore: 107,
    winner: 'San Antonio Spurs',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-02-15',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Indiana Pacers',
    homeScore: 113,
    awayScore: 104,
    winner: 'Cleveland Cavaliers',
    loser: 'Indiana Pacers'
  },
  {
    date: '2017-02-15',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 116,
    awayScore: 108,
    winner: 'Boston Celtics',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2017-02-15',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Charlotte Hornets',
    homeScore: 90,
    awayScore: 85,
    winner: 'Toronto Raptors',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-02-15',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 125,
    awayScore: 129,
    winner: 'Milwaukee Bucks',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-02-15',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Dallas Mavericks',
    homeScore: 98,
    awayScore: 91,
    winner: 'Detroit Pistons',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2017-02-15',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 91,
    awayScore: 95,
    winner: 'New Orleans Pelicans',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2017-02-15',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Miami Heat',
    homeScore: 109,
    awayScore: 117,
    winner: 'Miami Heat',
    loser: 'Houston Rockets'
  },
  {
    date: '2017-02-15',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 99,
    awayScore: 112,
    winner: 'Minnesota Timberwolves',
    loser: 'Denver Nuggets'
  },
  {
    date: '2017-02-15',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 111,
    awayScore: 88,
    winner: 'Utah Jazz',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2017-02-15',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 137,
    awayScore: 101,
    winner: 'Phoenix Suns',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-02-15',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'New York Knicks',
    homeScore: 116,
    awayScore: 105,
    winner: 'Oklahoma City Thunder',
    loser: 'New York Knicks'
  },
  {
    date: '2017-02-15',
    homeTeam: 'LA Clippers',
    awayTeam: 'Atlanta Hawks',
    homeScore: 99,
    awayScore: 84,
    winner: 'LA Clippers',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2017-02-15',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Sacramento Kings',
    homeScore: 109,
    awayScore: 86,
    winner: 'Golden State Warriors',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-02-16',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Washington Wizards',
    homeScore: 98,
    awayScore: 111,
    winner: 'Washington Wizards',
    loser: 'Indiana Pacers'
  },
  {
    date: '2017-02-16',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Boston Celtics',
    homeScore: 104,
    awayScore: 103,
    winner: 'Chicago Bulls',
    loser: 'Boston Celtics'
  },
  {
    date: '2017-02-23',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 103,
    awayScore: 112,
    winner: 'Portland Trail Blazers',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-02-23',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Charlotte Hornets',
    homeScore: 114,
    awayScore: 108,
    winner: 'Detroit Pistons',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-02-23',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Houston Rockets',
    homeScore: 99,
    awayScore: 129,
    winner: 'Houston Rockets',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2017-02-23',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'New York Knicks',
    homeScore: 119,
    awayScore: 104,
    winner: 'Cleveland Cavaliers',
    loser: 'New York Knicks'
  },
  {
    date: '2017-02-23',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'LA Clippers',
    homeScore: 123,
    awayScore: 113,
    winner: 'Golden State Warriors',
    loser: 'LA Clippers'
  },
  {
    date: '2017-02-23',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Denver Nuggets',
    homeScore: 116,
    awayScore: 100,
    winner: 'Sacramento Kings',
    loser: 'Denver Nuggets'
  },
  {
    date: '2017-02-24',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Washington Wizards',
    homeScore: 120,
    awayScore: 112,
    winner: 'Philadelphia 76ers',
    loser: 'Washington Wizards'
  },
  {
    date: '2017-02-24',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 102,
    awayScore: 92,
    winner: 'Indiana Pacers',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2017-02-24',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Boston Celtics',
    homeScore: 107,
    awayScore: 97,
    winner: 'Toronto Raptors',
    loser: 'Boston Celtics'
  },
  {
    date: '2017-02-24',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Phoenix Suns',
    homeScore: 128,
    awayScore: 121,
    winner: 'Chicago Bulls',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-02-24',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Utah Jazz',
    homeScore: 95,
    awayScore: 109,
    winner: 'Utah Jazz',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2017-02-24',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 110,
    awayScore: 93,
    winner: 'Oklahoma City Thunder',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-02-24',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Dallas Mavericks',
    homeScore: 97,
    awayScore: 84,
    winner: 'Minnesota Timberwolves',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2017-02-24',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Miami Heat',
    homeScore: 90,
    awayScore: 108,
    winner: 'Miami Heat',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2017-02-24',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Brooklyn Nets',
    homeScore: 129,
    awayScore: 109,
    winner: 'Denver Nuggets',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-02-24',
    homeTeam: 'LA Clippers',
    awayTeam: 'San Antonio Spurs',
    homeScore: 97,
    awayScore: 105,
    winner: 'San Antonio Spurs',
    loser: 'LA Clippers'
  },
  {
    date: '2017-02-25',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Charlotte Hornets',
    homeScore: 85,
    awayScore: 99,
    winner: 'Charlotte Hornets',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-02-25',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Atlanta Hawks',
    homeScore: 105,
    awayScore: 86,
    winner: 'Orlando Magic',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2017-02-25',
    homeTeam: 'New York Knicks',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 110,
    awayScore: 109,
    winner: 'New York Knicks',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2017-02-25',
    homeTeam: 'Miami Heat',
    awayTeam: 'Indiana Pacers',
    homeScore: 113,
    awayScore: 95,
    winner: 'Miami Heat',
    loser: 'Indiana Pacers'
  },
  {
    date: '2017-02-25',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 96,
    awayScore: 83,
    winner: 'Dallas Mavericks',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2017-02-25',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Chicago Bulls',
    homeScore: 99,
    awayScore: 117,
    winner: 'Chicago Bulls',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2017-02-25',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 142,
    awayScore: 130,
    winner: 'Houston Rockets',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2017-02-25',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Brooklyn Nets',
    homeScore: 112,
    awayScore: 95,
    winner: 'Golden State Warriors',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-02-26',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'San Antonio Spurs',
    homeScore: 98,
    awayScore: 119,
    winner: 'San Antonio Spurs',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-02-26',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Phoenix Suns',
    homeScore: 100,
    awayScore: 96,
    winner: 'Milwaukee Bucks',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-02-26',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 98,
    awayScore: 105,
    winner: 'Memphis Grizzlies',
    loser: 'Denver Nuggets'
  },
  {
    date: '2017-02-26',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Utah Jazz',
    homeScore: 92,
    awayScore: 102,
    winner: 'Utah Jazz',
    loser: 'Washington Wizards'
  },
  {
    date: '2017-02-26',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 112,
    awayScore: 106,
    winner: 'Toronto Raptors',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2017-02-26',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Boston Celtics',
    homeScore: 98,
    awayScore: 104,
    winner: 'Boston Celtics',
    loser: 'Detroit Pistons'
  },
  {
    date: '2017-02-26',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 118,
    awayScore: 110,
    winner: 'Oklahoma City Thunder',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2017-02-26',
    homeTeam: 'LA Clippers',
    awayTeam: 'Charlotte Hornets',
    homeScore: 124,
    awayScore: 121,
    winner: 'LA Clippers',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-02-27',
    homeTeam: 'New York Knicks',
    awayTeam: 'Toronto Raptors',
    homeScore: 91,
    awayScore: 92,
    winner: 'Toronto Raptors',
    loser: 'New York Knicks'
  },
  {
    date: '2017-02-27',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Golden State Warriors',
    homeScore: 108,
    awayScore: 119,
    winner: 'Golden State Warriors',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2017-02-27',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 102,
    awayScore: 95,
    winner: 'Cleveland Cavaliers',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2017-02-27',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Atlanta Hawks',
    homeScore: 98,
    awayScore: 114,
    winner: 'Atlanta Hawks',
    loser: 'Boston Celtics'
  },
  {
    date: '2017-02-27',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Indiana Pacers',
    homeScore: 108,
    awayScore: 117,
    winner: 'Indiana Pacers',
    loser: 'Houston Rockets'
  },
  {
    date: '2017-02-27',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Miami Heat',
    homeScore: 96,
    awayScore: 89,
    winner: 'Dallas Mavericks',
    loser: 'Miami Heat'
  },
  {
    date: '2017-02-27',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 88,
    awayScore: 102,
    winner: 'Minnesota Timberwolves',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-02-28',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Golden State Warriors',
    homeScore: 112,
    awayScore: 108,
    winner: 'Washington Wizards',
    loser: 'Golden State Warriors'
  },
  {
    date: '2017-02-28',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 120,
    awayScore: 113,
    winner: 'Detroit Pistons',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2017-02-28',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Denver Nuggets',
    homeScore: 107,
    awayScore: 125,
    winner: 'Denver Nuggets',
    loser: 'Chicago Bulls'
  },
  {
    date: '2017-02-28',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Phoenix Suns',
    homeScore: 130,
    awayScore: 112,
    winner: 'Memphis Grizzlies',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-02-28',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Utah Jazz',
    homeScore: 109,
    awayScore: 106,
    winner: 'Oklahoma City Thunder',
    loser: 'Utah Jazz'
  },
  {
    date: '2017-02-28',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Charlotte Hornets',
    homeScore: 104,
    awayScore: 109,
    winner: 'Charlotte Hornets',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-03-01',
    homeTeam: 'Orlando Magic',
    awayTeam: 'New York Knicks',
    homeScore: 90,
    awayScore: 101,
    winner: 'New York Knicks',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-03-01',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Washington Wizards',
    homeScore: 96,
    awayScore: 105,
    winner: 'Washington Wizards',
    loser: 'Toronto Raptors'
  },
  {
    date: '2017-03-01',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Dallas Mavericks',
    homeScore: 100,
    awayScore: 95,
    winner: 'Atlanta Hawks',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2017-03-01',
    homeTeam: 'Miami Heat',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 125,
    awayScore: 98,
    winner: 'Miami Heat',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2017-03-01',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Denver Nuggets',
    homeScore: 98,
    awayScore: 110,
    winner: 'Denver Nuggets',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2017-03-01',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Detroit Pistons',
    homeScore: 109,
    awayScore: 86,
    winner: 'New Orleans Pelicans',
    loser: 'Detroit Pistons'
  },
  {
    date: '2017-03-01',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 103,
    awayScore: 99,
    winner: 'Boston Celtics',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2017-03-01',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Indiana Pacers',
    homeScore: 100,
    awayScore: 99,
    winner: 'San Antonio Spurs',
    loser: 'Indiana Pacers'
  },
  {
    date: '2017-03-01',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 80,
    awayScore: 107,
    winner: 'Minnesota Timberwolves',
    loser: 'Utah Jazz'
  },
  {
    date: '2017-03-01',
    homeTeam: 'LA Clippers',
    awayTeam: 'Houston Rockets',
    homeScore: 103,
    awayScore: 122,
    winner: 'Houston Rockets',
    loser: 'LA Clippers'
  },
  {
    date: '2017-03-01',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Brooklyn Nets',
    homeScore: 100,
    awayScore: 109,
    winner: 'Brooklyn Nets',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-03-02',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Golden State Warriors',
    homeScore: 94,
    awayScore: 87,
    winner: 'Chicago Bulls',
    loser: 'Golden State Warriors'
  },
  {
    date: '2017-03-02',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Charlotte Hornets',
    homeScore: 120,
    awayScore: 103,
    winner: 'Phoenix Suns',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-03-02',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 114,
    awayScore: 109,
    winner: 'Portland Trail Blazers',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2017-03-03',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'New York Knicks',
    homeScore: 105,
    awayScore: 102,
    winner: 'Philadelphia 76ers',
    loser: 'New York Knicks'
  },
  {
    date: '2017-03-03',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Toronto Raptors',
    homeScore: 106,
    awayScore: 114,
    winner: 'Toronto Raptors',
    loser: 'Washington Wizards'
  },
  {
    date: '2017-03-03',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Miami Heat',
    homeScore: 110,
    awayScore: 99,
    winner: 'Orlando Magic',
    loser: 'Miami Heat'
  },
  {
    date: '2017-03-03',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'LA Clippers',
    homeScore: 112,
    awayScore: 101,
    winner: 'Milwaukee Bucks',
    loser: 'LA Clippers'
  },
  {
    date: '2017-03-03',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 130,
    awayScore: 135,
    winner: 'Cleveland Cavaliers',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2017-03-03',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 104,
    awayScore: 100,
    winner: 'Dallas Mavericks',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2017-03-03',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Brooklyn Nets',
    homeScore: 112,
    awayScore: 97,
    winner: 'Utah Jazz',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-03-03',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 118,
    awayScore: 111,
    winner: 'Phoenix Suns',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2017-03-03',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'San Antonio Spurs',
    homeScore: 98,
    awayScore: 101,
    winner: 'San Antonio Spurs',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2017-03-03',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Boston Celtics',
    homeScore: 95,
    awayScore: 115,
    winner: 'Boston Celtics',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-03-04',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Detroit Pistons',
    homeScore: 106,
    awayScore: 136,
    winner: 'Detroit Pistons',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2017-03-04',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Toronto Raptors',
    homeScore: 101,
    awayScore: 94,
    winner: 'Milwaukee Bucks',
    loser: 'Toronto Raptors'
  },
  {
    date: '2017-03-04',
    homeTeam: 'Miami Heat',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 120,
    awayScore: 92,
    winner: 'Miami Heat',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2017-03-04',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'LA Clippers',
    homeScore: 91,
    awayScore: 101,
    winner: 'LA Clippers',
    loser: 'Chicago Bulls'
  },
  {
    date: '2017-03-04',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Charlotte Hornets',
    homeScore: 102,
    awayScore: 112,
    winner: 'Charlotte Hornets',
    loser: 'Denver Nuggets'
  },
  {
    date: '2017-03-04',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 123,
    awayScore: 108,
    winner: 'Houston Rockets',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2017-03-04',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 97,
    awayScore: 90,
    winner: 'San Antonio Spurs',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2017-03-04',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Brooklyn Nets',
    homeScore: 130,
    awayScore: 116,
    winner: 'Portland Trail Blazers',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-03-05',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Indiana Pacers',
    homeScore: 96,
    awayScore: 97,
    winner: 'Indiana Pacers',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2017-03-05',
    homeTeam: 'New York Knicks',
    awayTeam: 'Golden State Warriors',
    homeScore: 105,
    awayScore: 112,
    winner: 'Golden State Warriors',
    loser: 'New York Knicks'
  },
  {
    date: '2017-03-05',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Boston Celtics',
    homeScore: 109,
    awayScore: 106,
    winner: 'Phoenix Suns',
    loser: 'Boston Celtics'
  },
  {
    date: '2017-03-05',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Orlando Magic',
    homeScore: 115,
    awayScore: 114,
    winner: 'Washington Wizards',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-03-05',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Utah Jazz',
    homeScore: 109,
    awayScore: 110,
    winner: 'Utah Jazz',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-03-05',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 104,
    awayScore: 89,
    winner: 'Dallas Mavericks',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2017-03-05',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 97,
    awayScore: 105,
    winner: 'New Orleans Pelicans',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-03-06',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 98,
    awayScore: 112,
    winner: 'Milwaukee Bucks',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2017-03-06',
    homeTeam: 'Orlando Magic',
    awayTeam: 'New York Knicks',
    homeScore: 105,
    awayScore: 113,
    winner: 'New York Knicks',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-03-06',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Miami Heat',
    homeScore: 98,
    awayScore: 106,
    winner: 'Miami Heat',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2017-03-06',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Golden State Warriors',
    homeScore: 111,
    awayScore: 119,
    winner: 'Golden State Warriors',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2017-03-06',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Chicago Bulls',
    homeScore: 109,
    awayScore: 95,
    winner: 'Detroit Pistons',
    loser: 'Chicago Bulls'
  },
  {
    date: '2017-03-06',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Brooklyn Nets',
    homeScore: 109,
    awayScore: 122,
    winner: 'Brooklyn Nets',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2017-03-06',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Indiana Pacers',
    homeScore: 100,
    awayScore: 88,
    winner: 'Charlotte Hornets',
    loser: 'Indiana Pacers'
  },
  {
    date: '2017-03-06',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Houston Rockets',
    homeScore: 112,
    awayScore: 110,
    winner: 'San Antonio Spurs',
    loser: 'Houston Rockets'
  },
  {
    date: '2017-03-06',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Sacramento Kings',
    homeScore: 108,
    awayScore: 96,
    winner: 'Denver Nuggets',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-03-06',
    homeTeam: 'Utah Jazz',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 88,
    awayScore: 83,
    winner: 'Utah Jazz',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2017-03-06',
    homeTeam: 'LA Clippers',
    awayTeam: 'Boston Celtics',
    homeScore: 116,
    awayScore: 102,
    winner: 'LA Clippers',
    loser: 'Boston Celtics'
  },
  {
    date: '2017-03-07',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 121,
    awayScore: 126,
    winner: 'Portland Trail Blazers',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2017-03-07',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 122,
    awayScore: 111,
    winner: 'Dallas Mavericks',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-03-07',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Washington Wizards',
    homeScore: 127,
    awayScore: 131,
    winner: 'Washington Wizards',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-03-08',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Chicago Bulls',
    homeScore: 98,
    awayScore: 91,
    winner: 'Orlando Magic',
    loser: 'Chicago Bulls'
  },
  {
    date: '2017-03-08',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Brooklyn Nets',
    homeScore: 110,
    awayScore: 105,
    winner: 'Atlanta Hawks',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-03-08',
    homeTeam: 'Miami Heat',
    awayTeam: 'Charlotte Hornets',
    homeScore: 108,
    awayScore: 101,
    winner: 'Miami Heat',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-03-08',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'New York Knicks',
    homeScore: 104,
    awayScore: 93,
    winner: 'Milwaukee Bucks',
    loser: 'New York Knicks'
  },
  {
    date: '2017-03-08',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Toronto Raptors',
    homeScore: 87,
    awayScore: 94,
    winner: 'Toronto Raptors',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2017-03-08',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Utah Jazz',
    homeScore: 108,
    awayScore: 115,
    winner: 'Utah Jazz',
    loser: 'Houston Rockets'
  },
  {
    date: '2017-03-08',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'LA Clippers',
    homeScore: 107,
    awayScore: 91,
    winner: 'Minnesota Timberwolves',
    loser: 'LA Clippers'
  },
  {
    date: '2017-03-08',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Detroit Pistons',
    homeScore: 115,
    awayScore: 98,
    winner: 'Indiana Pacers',
    loser: 'Detroit Pistons'
  },
  {
    date: '2017-03-08',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Sacramento Kings',
    homeScore: 114,
    awayScore: 104,
    winner: 'San Antonio Spurs',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-03-08',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Washington Wizards',
    homeScore: 113,
    awayScore: 123,
    winner: 'Washington Wizards',
    loser: 'Denver Nuggets'
  },
  {
    date: '2017-03-08',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Boston Celtics',
    homeScore: 86,
    awayScore: 99,
    winner: 'Boston Celtics',
    loser: 'Golden State Warriors'
  },
  {
    date: '2017-03-09',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 106,
    awayScore: 101,
    winner: 'Detroit Pistons',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2017-03-09',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'LA Clippers',
    homeScore: 98,
    awayScore: 114,
    winner: 'LA Clippers',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2017-03-09',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'San Antonio Spurs',
    homeScore: 102,
    awayScore: 92,
    winner: 'Oklahoma City Thunder',
    loser: 'San Antonio Spurs'
  },
  {
    date: '2017-03-09',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 114,
    awayScore: 108,
    winner: 'Portland Trail Blazers',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2017-03-09',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 110,
    awayScore: 122,
    winner: 'Los Angeles Lakers',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-03-10',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Orlando Magic',
    homeScore: 121,
    awayScore: 81,
    winner: 'Charlotte Hornets',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-03-10',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Houston Rockets',
    homeScore: 94,
    awayScore: 115,
    winner: 'Houston Rockets',
    loser: 'Chicago Bulls'
  },
  {
    date: '2017-03-10',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Indiana Pacers',
    homeScore: 99,
    awayScore: 85,
    winner: 'Milwaukee Bucks',
    loser: 'Indiana Pacers'
  },
  {
    date: '2017-03-10',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Golden State Warriors',
    homeScore: 103,
    awayScore: 102,
    winner: 'Minnesota Timberwolves',
    loser: 'Golden State Warriors'
  },
  {
    date: '2017-03-10',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Toronto Raptors',
    homeScore: 105,
    awayScore: 99,
    winner: 'Atlanta Hawks',
    loser: 'Toronto Raptors'
  },
  {
    date: '2017-03-10',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Boston Celtics',
    homeScore: 119,
    awayScore: 99,
    winner: 'Denver Nuggets',
    loser: 'Boston Celtics'
  },
  {
    date: '2017-03-10',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Brooklyn Nets',
    homeScore: 105,
    awayScore: 96,
    winner: 'Dallas Mavericks',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-03-10',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Washington Wizards',
    homeScore: 122,
    awayScore: 130,
    winner: 'Washington Wizards',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-03-11',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Utah Jazz',
    homeScore: 112,
    awayScore: 104,
    winner: 'Oklahoma City Thunder',
    loser: 'Utah Jazz'
  },
  {
    date: '2017-03-11',
    homeTeam: 'LA Clippers',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 112,
    awayScore: 100,
    winner: 'LA Clippers',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2017-03-11',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'New York Knicks',
    homeScore: 112,
    awayScore: 92,
    winner: 'Detroit Pistons',
    loser: 'New York Knicks'
  },
  {
    date: '2017-03-11',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 122,
    awayScore: 125,
    winner: 'New Orleans Pelicans',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-03-11',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 104,
    awayScore: 116,
    winner: 'Cleveland Cavaliers',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-03-11',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 102,
    awayScore: 95,
    winner: 'Milwaukee Bucks',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2017-03-11',
    homeTeam: 'Miami Heat',
    awayTeam: 'Toronto Raptors',
    homeScore: 104,
    awayScore: 89,
    winner: 'Miami Heat',
    loser: 'Toronto Raptors'
  },
  {
    date: '2017-03-11',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Golden State Warriors',
    homeScore: 107,
    awayScore: 85,
    winner: 'San Antonio Spurs',
    loser: 'Golden State Warriors'
  },
  {
    date: '2017-03-11',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Atlanta Hawks',
    homeScore: 90,
    awayScore: 107,
    winner: 'Atlanta Hawks',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2017-03-11',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Phoenix Suns',
    homeScore: 98,
    awayScore: 100,
    winner: 'Phoenix Suns',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2017-03-11',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Washington Wizards',
    homeScore: 124,
    awayScore: 125,
    winner: 'Washington Wizards',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2017-03-11',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Denver Nuggets',
    homeScore: 92,
    awayScore: 105,
    winner: 'Denver Nuggets',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-03-12',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Chicago Bulls',
    homeScore: 100,
    awayScore: 80,
    winner: 'Boston Celtics',
    loser: 'Chicago Bulls'
  },
  {
    date: '2017-03-12',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'New York Knicks',
    homeScore: 120,
    awayScore: 112,
    winner: 'Brooklyn Nets',
    loser: 'New York Knicks'
  },
  {
    date: '2017-03-12',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Miami Heat',
    homeScore: 102,
    awayScore: 98,
    winner: 'Indiana Pacers',
    loser: 'Miami Heat'
  },
  {
    date: '2017-03-12',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 101,
    awayScore: 110,
    winner: 'Portland Trail Blazers',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-03-12',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 117,
    awayScore: 112,
    winner: 'Houston Rockets',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2017-03-12',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 116,
    awayScore: 118,
    winner: 'Philadelphia 76ers',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-03-13',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Chicago Bulls',
    homeScore: 109,
    awayScore: 115,
    winner: 'Chicago Bulls',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-03-13',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Dallas Mavericks',
    homeScore: 100,
    awayScore: 78,
    winner: 'Toronto Raptors',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2017-03-13',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 113,
    awayScore: 93,
    winner: 'Memphis Grizzlies',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2017-03-13',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Atlanta Hawks',
    homeScore: 107,
    awayScore: 99,
    winner: 'San Antonio Spurs',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2017-03-13',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Washington Wizards',
    homeScore: 119,
    awayScore: 104,
    winner: 'Minnesota Timberwolves',
    loser: 'Washington Wizards'
  },
  {
    date: '2017-03-13',
    homeTeam: 'Utah Jazz',
    awayTeam: 'LA Clippers',
    homeScore: 114,
    awayScore: 108,
    winner: 'Utah Jazz',
    loser: 'LA Clippers'
  },
  {
    date: '2017-03-13',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Orlando Magic',
    homeScore: 120,
    awayScore: 115,
    winner: 'Sacramento Kings',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-03-13',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 129,
    awayScore: 101,
    winner: 'Denver Nuggets',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-03-14',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Detroit Pistons',
    homeScore: 128,
    awayScore: 96,
    winner: 'Cleveland Cavaliers',
    loser: 'Detroit Pistons'
  },
  {
    date: '2017-03-14',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 104,
    awayScore: 122,
    winner: 'Oklahoma City Thunder',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-03-14',
    homeTeam: 'New York Knicks',
    awayTeam: 'Indiana Pacers',
    homeScore: 87,
    awayScore: 81,
    winner: 'New York Knicks',
    loser: 'Indiana Pacers'
  },
  {
    date: '2017-03-14',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 100,
    awayScore: 77,
    winner: 'New Orleans Pelicans',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2017-03-14',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 106,
    awayScore: 104,
    winner: 'Golden State Warriors',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2017-03-15',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Dallas Mavericks',
    homeScore: 107,
    awayScore: 112,
    winner: 'Dallas Mavericks',
    loser: 'Washington Wizards'
  },
  {
    date: '2017-03-15',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Charlotte Hornets',
    homeScore: 98,
    awayScore: 77,
    winner: 'Indiana Pacers',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-03-15',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 117,
    awayScore: 104,
    winner: 'Boston Celtics',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2017-03-15',
    homeTeam: 'Miami Heat',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 120,
    awayScore: 112,
    winner: 'Miami Heat',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2017-03-15',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Utah Jazz',
    homeScore: 83,
    awayScore: 97,
    winner: 'Utah Jazz',
    loser: 'Detroit Pistons'
  },
  {
    date: '2017-03-15',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 91,
    awayScore: 98,
    winner: 'Memphis Grizzlies',
    loser: 'Chicago Bulls'
  },
  {
    date: '2017-03-15',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 139,
    awayScore: 100,
    winner: 'Houston Rockets',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-03-15',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 106,
    awayScore: 110,
    winner: 'Portland Trail Blazers',
    loser: 'San Antonio Spurs'
  },
  {
    date: '2017-03-15',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Sacramento Kings',
    homeScore: 101,
    awayScore: 107,
    winner: 'Sacramento Kings',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-03-15',
    homeTeam: 'LA Clippers',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 96,
    awayScore: 97,
    winner: 'Milwaukee Bucks',
    loser: 'LA Clippers'
  },
  {
    date: '2017-03-16',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Utah Jazz',
    homeScore: 91,
    awayScore: 83,
    winner: 'Cleveland Cavaliers',
    loser: 'Utah Jazz'
  },
  {
    date: '2017-03-16',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 102,
    awayScore: 123,
    winner: 'Oklahoma City Thunder',
    loser: 'Toronto Raptors'
  },
  {
    date: '2017-03-16',
    homeTeam: 'New York Knicks',
    awayTeam: 'Brooklyn Nets',
    homeScore: 110,
    awayScore: 121,
    winner: 'Brooklyn Nets',
    loser: 'New York Knicks'
  },
  {
    date: '2017-03-16',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 91,
    awayScore: 103,
    winner: 'Memphis Grizzlies',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2017-03-16',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'LA Clippers',
    homeScore: 129,
    awayScore: 114,
    winner: 'Denver Nuggets',
    loser: 'LA Clippers'
  },
  {
    date: '2017-03-16',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Orlando Magic',
    homeScore: 122,
    awayScore: 92,
    winner: 'Golden State Warriors',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-03-17',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Dallas Mavericks',
    homeScore: 116,
    awayScore: 74,
    winner: 'Philadelphia 76ers',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2017-03-17',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Chicago Bulls',
    homeScore: 112,
    awayScore: 107,
    winner: 'Washington Wizards',
    loser: 'Chicago Bulls'
  },
  {
    date: '2017-03-17',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Boston Celtics',
    homeScore: 95,
    awayScore: 98,
    winner: 'Boston Celtics',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-03-17',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Toronto Raptors',
    homeScore: 75,
    awayScore: 87,
    winner: 'Toronto Raptors',
    loser: 'Detroit Pistons'
  },
  {
    date: '2017-03-17',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Houston Rockets',
    homeScore: 128,
    awayScore: 112,
    winner: 'New Orleans Pelicans',
    loser: 'Houston Rockets'
  },
  {
    date: '2017-03-17',
    homeTeam: 'Miami Heat',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 123,
    awayScore: 105,
    winner: 'Miami Heat',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2017-03-17',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Orlando Magic',
    homeScore: 103,
    awayScore: 109,
    winner: 'Orlando Magic',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-03-17',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 103,
    awayScore: 107,
    winner: 'Milwaukee Bucks',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-03-18',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Sacramento Kings',
    homeScore: 110,
    awayScore: 94,
    winner: 'Oklahoma City Thunder',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-03-18',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 97,
    awayScore: 113,
    winner: 'Portland Trail Blazers',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2017-03-18',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Washington Wizards',
    homeScore: 98,
    awayScore: 93,
    winner: 'Charlotte Hornets',
    loser: 'Washington Wizards'
  },
  {
    date: '2017-03-18',
    homeTeam: 'LA Clippers',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 108,
    awayScore: 78,
    winner: 'LA Clippers',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2017-03-18',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Utah Jazz',
    homeScore: 95,
    awayScore: 86,
    winner: 'Chicago Bulls',
    loser: 'Utah Jazz'
  },
  {
    date: '2017-03-18',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'San Antonio Spurs',
    homeScore: 104,
    awayScore: 96,
    winner: 'Memphis Grizzlies',
    loser: 'San Antonio Spurs'
  },
  {
    date: '2017-03-18',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Houston Rockets',
    homeScore: 105,
    awayScore: 109,
    winner: 'Houston Rockets',
    loser: 'Denver Nuggets'
  },
  {
    date: '2017-03-18',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 117,
    awayScore: 92,
    winner: 'Golden State Warriors',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2017-03-19',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Dallas Mavericks',
    homeScore: 104,
    awayScore: 111,
    winner: 'Dallas Mavericks',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-03-19',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Boston Celtics',
    homeScore: 105,
    awayScore: 99,
    winner: 'Philadelphia 76ers',
    loser: 'Boston Celtics'
  },
  {
    date: '2017-03-19',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Phoenix Suns',
    homeScore: 112,
    awayScore: 95,
    winner: 'Detroit Pistons',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-03-19',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 123,
    awayScore: 109,
    winner: 'New Orleans Pelicans',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2017-03-19',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Indiana Pacers',
    homeScore: 116,
    awayScore: 91,
    winner: 'Toronto Raptors',
    loser: 'Indiana Pacers'
  },
  {
    date: '2017-03-19',
    homeTeam: 'Miami Heat',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 104,
    awayScore: 115,
    winner: 'Portland Trail Blazers',
    loser: 'Miami Heat'
  },
  {
    date: '2017-03-19',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Sacramento Kings',
    homeScore: 118,
    awayScore: 102,
    winner: 'San Antonio Spurs',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-03-19',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 120,
    awayScore: 125,
    winner: 'Cleveland Cavaliers',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-03-20',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Atlanta Hawks',
    homeScore: 105,
    awayScore: 90,
    winner: 'Charlotte Hornets',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2017-03-20',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 112,
    awayScore: 109,
    winner: 'Orlando Magic',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2017-03-20',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Utah Jazz',
    homeScore: 107,
    awayScore: 100,
    winner: 'Indiana Pacers',
    loser: 'Utah Jazz'
  },
  {
    date: '2017-03-20',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Washington Wizards',
    homeScore: 110,
    awayScore: 102,
    winner: 'Boston Celtics',
    loser: 'Washington Wizards'
  },
  {
    date: '2017-03-20',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Denver Nuggets',
    homeScore: 125,
    awayScore: 124,
    winner: 'Houston Rockets',
    loser: 'Denver Nuggets'
  },
  {
    date: '2017-03-20',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Golden State Warriors',
    homeScore: 95,
    awayScore: 111,
    winner: 'Golden State Warriors',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2017-03-20',
    homeTeam: 'LA Clippers',
    awayTeam: 'New York Knicks',
    homeScore: 114,
    awayScore: 105,
    winner: 'LA Clippers',
    loser: 'New York Knicks'
  },
  {
    date: '2017-03-21',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Chicago Bulls',
    homeScore: 122,
    awayScore: 120,
    winner: 'Toronto Raptors',
    loser: 'Chicago Bulls'
  },
  {
    date: '2017-03-21',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Detroit Pistons',
    homeScore: 98,
    awayScore: 96,
    winner: 'Brooklyn Nets',
    loser: 'Detroit Pistons'
  },
  {
    date: '2017-03-21',
    homeTeam: 'Miami Heat',
    awayTeam: 'Phoenix Suns',
    homeScore: 112,
    awayScore: 97,
    winner: 'Miami Heat',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-03-21',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 95,
    awayScore: 82,
    winner: 'New Orleans Pelicans',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2017-03-21',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Golden State Warriors',
    homeScore: 87,
    awayScore: 112,
    winner: 'Golden State Warriors',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2017-03-21',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'San Antonio Spurs',
    homeScore: 93,
    awayScore: 100,
    winner: 'San Antonio Spurs',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2017-03-21',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 90,
    awayScore: 93,
    winner: 'Milwaukee Bucks',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2017-03-21',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'LA Clippers',
    homeScore: 109,
    awayScore: 133,
    winner: 'LA Clippers',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-03-22',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Charlotte Hornets',
    homeScore: 102,
    awayScore: 109,
    winner: 'Charlotte Hornets',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-03-22',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Indiana Pacers',
    homeScore: 109,
    awayScore: 100,
    winner: 'Boston Celtics',
    loser: 'Indiana Pacers'
  },
  {
    date: '2017-03-22',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Detroit Pistons',
    homeScore: 117,
    awayScore: 95,
    winner: 'Chicago Bulls',
    loser: 'Detroit Pistons'
  },
  {
    date: '2017-03-22',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 122,
    awayScore: 97,
    winner: 'Oklahoma City Thunder',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2017-03-22',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Atlanta Hawks',
    homeScore: 104,
    awayScore: 100,
    winner: 'Washington Wizards',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2017-03-22',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 126,
    awayScore: 113,
    winner: 'Denver Nuggets',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2017-03-22',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 98,
    awayScore: 116,
    winner: 'Milwaukee Bucks',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-03-22',
    homeTeam: 'Utah Jazz',
    awayTeam: 'New York Knicks',
    homeScore: 108,
    awayScore: 101,
    winner: 'Utah Jazz',
    loser: 'New York Knicks'
  },
  {
    date: '2017-03-23',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Phoenix Suns',
    homeScore: 126,
    awayScore: 98,
    winner: 'Brooklyn Nets',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-03-23',
    homeTeam: 'Miami Heat',
    awayTeam: 'Toronto Raptors',
    homeScore: 84,
    awayScore: 101,
    winner: 'Toronto Raptors',
    loser: 'Miami Heat'
  },
  {
    date: '2017-03-23',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'LA Clippers',
    homeScore: 97,
    awayScore: 95,
    winner: 'Dallas Mavericks',
    loser: 'LA Clippers'
  },
  {
    date: '2017-03-23',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 97,
    awayScore: 90,
    winner: 'San Antonio Spurs',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2017-03-23',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'New York Knicks',
    homeScore: 110,
    awayScore: 95,
    winner: 'Portland Trail Blazers',
    loser: 'New York Knicks'
  },
  {
    date: '2017-03-24',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Brooklyn Nets',
    homeScore: 129,
    awayScore: 108,
    winner: 'Washington Wizards',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-03-24',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 105,
    awayScore: 112,
    winner: 'Cleveland Cavaliers',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-03-24',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Detroit Pistons',
    homeScore: 115,
    awayScore: 87,
    winner: 'Orlando Magic',
    loser: 'Detroit Pistons'
  },
  {
    date: '2017-03-24',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Denver Nuggets',
    homeScore: 117,
    awayScore: 125,
    winner: 'Denver Nuggets',
    loser: 'Indiana Pacers'
  },
  {
    date: '2017-03-24',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Phoenix Suns',
    homeScore: 130,
    awayScore: 120,
    winner: 'Boston Celtics',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-03-24',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 107,
    awayScore: 117,
    winner: 'Philadelphia 76ers',
    loser: 'Chicago Bulls'
  },
  {
    date: '2017-03-24',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Atlanta Hawks',
    homeScore: 100,
    awayScore: 97,
    winner: 'Milwaukee Bucks',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2017-03-24',
    homeTeam: 'Houston Rockets',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 117,
    awayScore: 107,
    winner: 'Houston Rockets',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2017-03-24',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 130,
    awayScore: 119,
    winner: 'Los Angeles Lakers',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2017-03-24',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Sacramento Kings',
    homeScore: 114,
    awayScore: 100,
    winner: 'Golden State Warriors',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-03-25',
    homeTeam: 'LA Clippers',
    awayTeam: 'Utah Jazz',
    homeScore: 108,
    awayScore: 95,
    winner: 'LA Clippers',
    loser: 'Utah Jazz'
  },
  {
    date: '2017-03-25',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Washington Wizards',
    homeScore: 115,
    awayScore: 127,
    winner: 'Washington Wizards',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2017-03-25',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Toronto Raptors',
    homeScore: 86,
    awayScore: 94,
    winner: 'Toronto Raptors',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2017-03-25',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'New York Knicks',
    homeScore: 106,
    awayScore: 98,
    winner: 'San Antonio Spurs',
    loser: 'New York Knicks'
  },
  {
    date: '2017-03-25',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 112,
    awayScore: 100,
    winner: 'Portland Trail Blazers',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2017-03-26',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Phoenix Suns',
    homeScore: 120,
    awayScore: 106,
    winner: 'Charlotte Hornets',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-03-26',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Brooklyn Nets',
    homeScore: 92,
    awayScore: 107,
    winner: 'Brooklyn Nets',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2017-03-26',
    homeTeam: 'LA Clippers',
    awayTeam: 'Sacramento Kings',
    homeScore: 97,
    awayScore: 98,
    winner: 'Sacramento Kings',
    loser: 'LA Clippers'
  },
  {
    date: '2017-03-26',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Chicago Bulls',
    homeScore: 94,
    awayScore: 109,
    winner: 'Chicago Bulls',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2017-03-26',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 137,
    awayScore: 125,
    winner: 'Houston Rockets',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2017-03-26',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 107,
    awayScore: 94,
    winner: 'Indiana Pacers',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2017-03-26',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Miami Heat',
    homeScore: 112,
    awayScore: 108,
    winner: 'Boston Celtics',
    loser: 'Miami Heat'
  },
  {
    date: '2017-03-26',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 106,
    awayScore: 94,
    winner: 'Golden State Warriors',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2017-03-26',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 90,
    awayScore: 115,
    winner: 'New Orleans Pelicans',
    loser: 'Denver Nuggets'
  },
  {
    date: '2017-03-26',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 81,
    awayScore: 97,
    winner: 'Portland Trail Blazers',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-03-27',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Orlando Magic',
    homeScore: 131,
    awayScore: 112,
    winner: 'Toronto Raptors',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-03-27',
    homeTeam: 'New York Knicks',
    awayTeam: 'Detroit Pistons',
    homeScore: 109,
    awayScore: 95,
    winner: 'New York Knicks',
    loser: 'Detroit Pistons'
  },
  {
    date: '2017-03-27',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 103,
    awayScore: 74,
    winner: 'San Antonio Spurs',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2017-03-27',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 91,
    awayScore: 92,
    winner: 'Oklahoma City Thunder',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2017-03-27',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 91,
    awayScore: 90,
    winner: 'Sacramento Kings',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2017-03-27',
    homeTeam: 'Utah Jazz',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 108,
    awayScore: 100,
    winner: 'Utah Jazz',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2017-03-28',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 108,
    awayScore: 118,
    winner: 'Milwaukee Bucks',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-03-28',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 114,
    awayScore: 115,
    winner: 'Minnesota Timberwolves',
    loser: 'Indiana Pacers'
  },
  {
    date: '2017-03-28',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 101,
    awayScore: 106,
    winner: 'Philadelphia 76ers',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-03-28',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Phoenix Suns',
    homeScore: 95,
    awayScore: 91,
    winner: 'Atlanta Hawks',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-03-28',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Miami Heat',
    homeScore: 96,
    awayScore: 97,
    winner: 'Miami Heat',
    loser: 'Detroit Pistons'
  },
  {
    date: '2017-03-28',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Golden State Warriors',
    homeScore: 106,
    awayScore: 113,
    winner: 'Golden State Warriors',
    loser: 'Houston Rockets'
  },
  {
    date: '2017-03-28',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Denver Nuggets',
    homeScore: 122,
    awayScore: 113,
    winner: 'Portland Trail Blazers',
    loser: 'Denver Nuggets'
  },
  {
    date: '2017-03-28',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Washington Wizards',
    homeScore: 108,
    awayScore: 119,
    winner: 'Washington Wizards',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-03-29',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Atlanta Hawks',
    homeScore: 92,
    awayScore: 99,
    winner: 'Atlanta Hawks',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2017-03-29',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 106,
    awayScore: 114,
    winner: 'Oklahoma City Thunder',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-03-29',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 100,
    awayScore: 103,
    winner: 'Milwaukee Bucks',
    loser: 'Boston Celtics'
  },
  {
    date: '2017-03-29',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Charlotte Hornets',
    homeScore: 106,
    awayScore: 110,
    winner: 'Charlotte Hornets',
    loser: 'Toronto Raptors'
  },
  {
    date: '2017-03-29',
    homeTeam: 'New York Knicks',
    awayTeam: 'Miami Heat',
    homeScore: 88,
    awayScore: 105,
    winner: 'Miami Heat',
    loser: 'New York Knicks'
  },
  {
    date: '2017-03-29',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Indiana Pacers',
    homeScore: 110,
    awayScore: 97,
    winner: 'Memphis Grizzlies',
    loser: 'Indiana Pacers'
  },
  {
    date: '2017-03-29',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Dallas Mavericks',
    homeScore: 121,
    awayScore: 118,
    winner: 'New Orleans Pelicans',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2017-03-29',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Golden State Warriors',
    homeScore: 98,
    awayScore: 110,
    winner: 'Golden State Warriors',
    loser: 'San Antonio Spurs'
  },
  {
    date: '2017-03-29',
    homeTeam: 'LA Clippers',
    awayTeam: 'Washington Wizards',
    homeScore: 133,
    awayScore: 124,
    winner: 'LA Clippers',
    loser: 'Washington Wizards'
  },
  {
    date: '2017-03-29',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Utah Jazz',
    homeScore: 82,
    awayScore: 112,
    winner: 'Utah Jazz',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-03-30',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Brooklyn Nets',
    homeScore: 90,
    awayScore: 89,
    winner: 'Detroit Pistons',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-03-30',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 99,
    awayScore: 93,
    winner: 'Chicago Bulls',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2017-03-30',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 119,
    awayScore: 104,
    winner: 'Minnesota Timberwolves',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-03-30',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'LA Clippers',
    homeScore: 118,
    awayScore: 124,
    winner: 'LA Clippers',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-03-30',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Houston Rockets',
    homeScore: 117,
    awayScore: 107,
    winner: 'Portland Trail Blazers',
    loser: 'Houston Rockets'
  },
  {
    date: '2017-03-31',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Indiana Pacers',
    homeScore: 111,
    awayScore: 100,
    winner: 'Toronto Raptors',
    loser: 'Indiana Pacers'
  },
  {
    date: '2017-03-31',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Denver Nuggets',
    homeScore: 122,
    awayScore: 114,
    winner: 'Charlotte Hornets',
    loser: 'Denver Nuggets'
  },
  {
    date: '2017-03-31',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 122,
    awayScore: 105,
    winner: 'Cleveland Cavaliers',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2017-03-31',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Orlando Magic',
    homeScore: 117,
    awayScore: 116,
    winner: 'Boston Celtics',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-03-31',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Detroit Pistons',
    homeScore: 108,
    awayScore: 105,
    winner: 'Milwaukee Bucks',
    loser: 'Detroit Pistons'
  },
  {
    date: '2017-03-31',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Dallas Mavericks',
    homeScore: 99,
    awayScore: 90,
    winner: 'Memphis Grizzlies',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2017-03-31',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Sacramento Kings',
    homeScore: 117,
    awayScore: 89,
    winner: 'New Orleans Pelicans',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-03-31',
    homeTeam: 'Miami Heat',
    awayTeam: 'New York Knicks',
    homeScore: 94,
    awayScore: 98,
    winner: 'New York Knicks',
    loser: 'Miami Heat'
  },
  {
    date: '2017-03-31',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Washington Wizards',
    homeScore: 95,
    awayScore: 88,
    winner: 'Utah Jazz',
    loser: 'Washington Wizards'
  },
  {
    date: '2017-03-31',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'San Antonio Spurs',
    homeScore: 95,
    awayScore: 100,
    winner: 'San Antonio Spurs',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2017-03-31',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Houston Rockets',
    homeScore: 107,
    awayScore: 98,
    winner: 'Golden State Warriors',
    loser: 'Houston Rockets'
  },
  {
    date: '2017-04-01',
    homeTeam: 'LA Clippers',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 115,
    awayScore: 104,
    winner: 'LA Clippers',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-04-01',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Atlanta Hawks',
    homeScore: 106,
    awayScore: 104,
    winner: 'Chicago Bulls',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2017-04-01',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Orlando Magic',
    homeScore: 121,
    awayScore: 111,
    winner: 'Brooklyn Nets',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-04-01',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Sacramento Kings',
    homeScore: 117,
    awayScore: 123,
    winner: 'Sacramento Kings',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2017-04-01',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Phoenix Suns',
    homeScore: 130,
    awayScore: 117,
    winner: 'Portland Trail Blazers',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-04-02',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Charlotte Hornets',
    homeScore: 101,
    awayScore: 113,
    winner: 'Charlotte Hornets',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2017-04-02',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 108,
    awayScore: 103,
    winner: 'Los Angeles Lakers',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2017-04-02',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Dallas Mavericks',
    homeScore: 105,
    awayScore: 109,
    winner: 'Dallas Mavericks',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2017-04-02',
    homeTeam: 'New York Knicks',
    awayTeam: 'Boston Celtics',
    homeScore: 94,
    awayScore: 110,
    winner: 'Boston Celtics',
    loser: 'New York Knicks'
  },
  {
    date: '2017-04-02',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Chicago Bulls',
    homeScore: 110,
    awayScore: 117,
    winner: 'Chicago Bulls',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2017-04-02',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 113,
    awayScore: 105,
    winner: 'Toronto Raptors',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2017-04-02',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Atlanta Hawks',
    homeScore: 91,
    awayScore: 82,
    winner: 'Brooklyn Nets',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2017-04-02',
    homeTeam: 'Miami Heat',
    awayTeam: 'Denver Nuggets',
    homeScore: 113,
    awayScore: 116,
    winner: 'Denver Nuggets',
    loser: 'Miami Heat'
  },
  {
    date: '2017-04-02',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Indiana Pacers',
    homeScore: 135,
    awayScore: 130,
    winner: 'Cleveland Cavaliers',
    loser: 'Indiana Pacers'
  },
  {
    date: '2017-04-02',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Utah Jazz',
    homeScore: 109,
    awayScore: 103,
    winner: 'San Antonio Spurs',
    loser: 'Utah Jazz'
  },
  {
    date: '2017-04-02',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Washington Wizards',
    homeScore: 139,
    awayScore: 115,
    winner: 'Golden State Warriors',
    loser: 'Washington Wizards'
  },
  {
    date: '2017-04-02',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Houston Rockets',
    homeScore: 116,
    awayScore: 123,
    winner: 'Houston Rockets',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-04-03',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 110,
    awayScore: 109,
    winner: 'Minnesota Timberwolves',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2017-04-04',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Brooklyn Nets',
    homeScore: 118,
    awayScore: 141,
    winner: 'Brooklyn Nets',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2017-04-04',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Charlotte Hornets',
    homeScore: 118,
    awayScore: 111,
    winner: 'Washington Wizards',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-04-04',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Orlando Magic',
    homeScore: 122,
    awayScore: 102,
    winner: 'Cleveland Cavaliers',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-04-04',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Toronto Raptors',
    homeScore: 108,
    awayScore: 90,
    winner: 'Indiana Pacers',
    loser: 'Toronto Raptors'
  },
  {
    date: '2017-04-04',
    homeTeam: 'New Orleans Pelicans',
    awayTeam: 'Denver Nuggets',
    homeScore: 131,
    awayScore: 134,
    winner: 'Denver Nuggets',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2017-04-04',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 110,
    awayScore: 79,
    winner: 'Oklahoma City Thunder',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2017-04-04',
    homeTeam: 'New York Knicks',
    awayTeam: 'Chicago Bulls',
    homeScore: 100,
    awayScore: 91,
    winner: 'New York Knicks',
    loser: 'Chicago Bulls'
  },
  {
    date: '2017-04-04',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Memphis Grizzlies',
    homeScore: 95,
    awayScore: 89,
    winner: 'San Antonio Spurs',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2017-04-04',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 121,
    awayScore: 107,
    winner: 'Golden State Warriors',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2017-04-04',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Dallas Mavericks',
    homeScore: 98,
    awayScore: 87,
    winner: 'Sacramento Kings',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2017-04-04',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Portland Trail Blazers',
    homeScore: 106,
    awayScore: 87,
    winner: 'Utah Jazz',
    loser: 'Portland Trail Blazers'
  },
  {
    date: '2017-04-05',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Miami Heat',
    homeScore: 99,
    awayScore: 112,
    winner: 'Miami Heat',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-04-05',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Toronto Raptors',
    homeScore: 102,
    awayScore: 105,
    winner: 'Toronto Raptors',
    loser: 'Detroit Pistons'
  },
  {
    date: '2017-04-05',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 100,
    awayScore: 103,
    winner: 'Oklahoma City Thunder',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2017-04-05',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Denver Nuggets',
    homeScore: 110,
    awayScore: 104,
    winner: 'Houston Rockets',
    loser: 'Denver Nuggets'
  },
  {
    date: '2017-04-05',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 91,
    awayScore: 114,
    winner: 'Cleveland Cavaliers',
    loser: 'Boston Celtics'
  },
  {
    date: '2017-04-05',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 95,
    awayScore: 102,
    winner: 'Los Angeles Lakers',
    loser: 'San Antonio Spurs'
  },
  {
    date: '2017-04-05',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Golden State Warriors',
    homeScore: 111,
    awayScore: 120,
    winner: 'Golden State Warriors',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-04-05',
    homeTeam: 'LA Clippers',
    awayTeam: 'Dallas Mavericks',
    homeScore: 112,
    awayScore: 101,
    winner: 'LA Clippers',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2017-04-06',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Chicago Bulls',
    homeScore: 90,
    awayScore: 102,
    winner: 'Chicago Bulls',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2017-04-06',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Brooklyn Nets',
    homeScore: 115,
    awayScore: 107,
    winner: 'Orlando Magic',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-04-06',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 104,
    awayScore: 89,
    winner: 'Indiana Pacers',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2017-04-06',
    homeTeam: 'New York Knicks',
    awayTeam: 'Washington Wizards',
    homeScore: 103,
    awayScore: 106,
    winner: 'Washington Wizards',
    loser: 'New York Knicks'
  },
  {
    date: '2017-04-06',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Boston Celtics',
    homeScore: 123,
    awayScore: 116,
    winner: 'Atlanta Hawks',
    loser: 'Boston Celtics'
  },
  {
    date: '2017-04-06',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 105,
    awayScore: 98,
    winner: 'Portland Trail Blazers',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2017-04-07',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Atlanta Hawks',
    homeScore: 100,
    awayScore: 114,
    winner: 'Atlanta Hawks',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2017-04-07',
    homeTeam: 'Toronto Raptors',
    awayTeam: 'Miami Heat',
    homeScore: 96,
    awayScore: 94,
    winner: 'Toronto Raptors',
    loser: 'Miami Heat'
  },
  {
    date: '2017-04-07',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'New York Knicks',
    homeScore: 101,
    awayScore: 88,
    winner: 'Memphis Grizzlies',
    loser: 'New York Knicks'
  },
  {
    date: '2017-04-07',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Detroit Pistons',
    homeScore: 109,
    awayScore: 114,
    winner: 'Detroit Pistons',
    loser: 'Houston Rockets'
  },
  {
    date: '2017-04-07',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'San Antonio Spurs',
    homeScore: 89,
    awayScore: 102,
    winner: 'San Antonio Spurs',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2017-04-07',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 122,
    awayScore: 106,
    winner: 'Denver Nuggets',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2017-04-07',
    homeTeam: 'Utah Jazz',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 120,
    awayScore: 113,
    winner: 'Utah Jazz',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2017-04-07',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 120,
    awayScore: 99,
    winner: 'Phoenix Suns',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2017-04-07',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Sacramento Kings',
    homeScore: 98,
    awayScore: 94,
    winner: 'Los Angeles Lakers',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-04-08',
    homeTeam: 'Brooklyn Nets',
    awayTeam: 'Chicago Bulls',
    homeScore: 107,
    awayScore: 106,
    winner: 'Brooklyn Nets',
    loser: 'Chicago Bulls'
  },
  {
    date: '2017-04-08',
    homeTeam: 'Charlotte Hornets',
    awayTeam: 'Boston Celtics',
    homeScore: 114,
    awayScore: 121,
    winner: 'Boston Celtics',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-04-08',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Indiana Pacers',
    homeScore: 112,
    awayScore: 127,
    winner: 'Indiana Pacers',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-04-08',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 82,
    awayScore: 90,
    winner: 'Milwaukee Bucks',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2017-04-08',
    homeTeam: 'Washington Wizards',
    awayTeam: 'Miami Heat',
    homeScore: 103,
    awayScore: 106,
    winner: 'Miami Heat',
    loser: 'Washington Wizards'
  },
  {
    date: '2017-04-08',
    homeTeam: 'San Antonio Spurs',
    awayTeam: 'LA Clippers',
    homeScore: 87,
    awayScore: 98,
    winner: 'LA Clippers',
    loser: 'San Antonio Spurs'
  },
  {
    date: '2017-04-08',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'Utah Jazz',
    homeScore: 101,
    awayScore: 86,
    winner: 'Portland Trail Blazers',
    loser: 'Utah Jazz'
  },
  {
    date: '2017-04-08',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 123,
    awayScore: 101,
    winner: 'Golden State Warriors',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2017-04-09',
    homeTeam: 'New York Knicks',
    awayTeam: 'Toronto Raptors',
    homeScore: 97,
    awayScore: 110,
    winner: 'Toronto Raptors',
    loser: 'New York Knicks'
  },
  {
    date: '2017-04-09',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 126,
    awayScore: 125,
    winner: 'Atlanta Hawks',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2017-04-09',
    homeTeam: 'Denver Nuggets',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 105,
    awayScore: 106,
    winner: 'Oklahoma City Thunder',
    loser: 'Denver Nuggets'
  },
  {
    date: '2017-04-09',
    homeTeam: 'Phoenix Suns',
    awayTeam: 'Dallas Mavericks',
    homeScore: 124,
    awayScore: 111,
    winner: 'Phoenix Suns',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2017-04-09',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Houston Rockets',
    homeScore: 128,
    awayScore: 135,
    winner: 'Houston Rockets',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-04-09',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Detroit Pistons',
    homeScore: 90,
    awayScore: 103,
    winner: 'Detroit Pistons',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2017-04-09',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 110,
    awayScore: 109,
    winner: 'Los Angeles Lakers',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2017-04-10',
    homeTeam: 'Philadelphia 76ers',
    awayTeam: 'Indiana Pacers',
    homeScore: 111,
    awayScore: 120,
    winner: 'Indiana Pacers',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2017-04-10',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Brooklyn Nets',
    homeScore: 114,
    awayScore: 105,
    winner: 'Boston Celtics',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-04-10',
    homeTeam: 'Miami Heat',
    awayTeam: 'Cleveland Cavaliers',
    homeScore: 124,
    awayScore: 121,
    winner: 'Miami Heat',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2017-04-10',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Orlando Magic',
    homeScore: 122,
    awayScore: 75,
    winner: 'Chicago Bulls',
    loser: 'Orlando Magic'
  },
  {
    date: '2017-04-10',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Charlotte Hornets',
    homeScore: 89,
    awayScore: 79,
    winner: 'Milwaukee Bucks',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-04-10',
    homeTeam: 'Detroit Pistons',
    awayTeam: 'Washington Wizards',
    homeScore: 101,
    awayScore: 105,
    winner: 'Washington Wizards',
    loser: 'Detroit Pistons'
  },
  {
    date: '2017-04-10',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'San Antonio Spurs',
    homeScore: 99,
    awayScore: 98,
    winner: 'Portland Trail Blazers',
    loser: 'San Antonio Spurs'
  },
  {
    date: '2017-04-10',
    homeTeam: 'LA Clippers',
    awayTeam: 'Houston Rockets',
    homeScore: 125,
    awayScore: 96,
    winner: 'LA Clippers',
    loser: 'Houston Rockets'
  },
  {
    date: '2017-04-10',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Utah Jazz',
    homeScore: 99,
    awayScore: 105,
    winner: 'Utah Jazz',
    loser: 'Golden State Warriors'
  },
  {
    date: '2017-04-11',
    homeTeam: 'Atlanta Hawks',
    awayTeam: 'Charlotte Hornets',
    homeScore: 103,
    awayScore: 76,
    winner: 'Atlanta Hawks',
    loser: 'Charlotte Hornets'
  },
  {
    date: '2017-04-11',
    homeTeam: 'Minnesota Timberwolves',
    awayTeam: 'Oklahoma City Thunder',
    homeScore: 98,
    awayScore: 100,
    winner: 'Oklahoma City Thunder',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2017-04-11',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Denver Nuggets',
    homeScore: 91,
    awayScore: 109,
    winner: 'Denver Nuggets',
    loser: 'Dallas Mavericks'
  },
  {
    date: '2017-04-11',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 108,
    awayScore: 96,
    winner: 'Los Angeles Lakers',
    loser: 'New Orleans Pelicans'
  },
  {
    date: '2017-04-11',
    homeTeam: 'Sacramento Kings',
    awayTeam: 'Phoenix Suns',
    homeScore: 129,
    awayScore: 104,
    winner: 'Sacramento Kings',
    loser: 'Phoenix Suns'
  },
  {
    date: '2017-04-12',
    homeTeam: 'Orlando Magic',
    awayTeam: 'Detroit Pistons',
    homeScore: 113,
    awayScore: 109,
    winner: 'Orlando Magic',
    loser: 'Detroit Pistons'
  },
  {
    date: '2017-04-12',
    homeTeam: 'Cleveland Cavaliers',
    awayTeam: 'Toronto Raptors',
    homeScore: 83,
    awayScore: 98,
    winner: 'Toronto Raptors',
    loser: 'Cleveland Cavaliers'
  },
  {
    date: '2017-04-12',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Milwaukee Bucks',
    homeScore: 112,
    awayScore: 94,
    winner: 'Boston Celtics',
    loser: 'Milwaukee Bucks'
  },
  {
    date: '2017-04-12',
    homeTeam: 'New York Knicks',
    awayTeam: 'Philadelphia 76ers',
    homeScore: 114,
    awayScore: 113,
    winner: 'New York Knicks',
    loser: 'Philadelphia 76ers'
  },
  {
    date: '2017-04-12',
    homeTeam: 'Miami Heat',
    awayTeam: 'Washington Wizards',
    homeScore: 110,
    awayScore: 102,
    winner: 'Miami Heat',
    loser: 'Washington Wizards'
  },
  {
    date: '2017-04-12',
    homeTeam: 'Chicago Bulls',
    awayTeam: 'Brooklyn Nets',
    homeScore: 112,
    awayScore: 73,
    winner: 'Chicago Bulls',
    loser: 'Brooklyn Nets'
  },
  {
    date: '2017-04-12',
    homeTeam: 'Memphis Grizzlies',
    awayTeam: 'Dallas Mavericks',
    homeScore: 93,
    awayScore: 100,
    winner: 'Dallas Mavericks',
    loser: 'Memphis Grizzlies'
  },
  {
    date: '2017-04-12',
    homeTeam: 'Houston Rockets',
    awayTeam: 'Minnesota Timberwolves',
    homeScore: 123,
    awayScore: 118,
    winner: 'Houston Rockets',
    loser: 'Minnesota Timberwolves'
  },
  {
    date: '2017-04-12',
    homeTeam: 'Oklahoma City Thunder',
    awayTeam: 'Denver Nuggets',
    homeScore: 105,
    awayScore: 111,
    winner: 'Denver Nuggets',
    loser: 'Oklahoma City Thunder'
  },
  {
    date: '2017-04-12',
    homeTeam: 'Indiana Pacers',
    awayTeam: 'Atlanta Hawks',
    homeScore: 104,
    awayScore: 86,
    winner: 'Indiana Pacers',
    loser: 'Atlanta Hawks'
  },
  {
    date: '2017-04-12',
    homeTeam: 'Utah Jazz',
    awayTeam: 'San Antonio Spurs',
    homeScore: 101,
    awayScore: 97,
    winner: 'Utah Jazz',
    loser: 'San Antonio Spurs'
  },
  {
    date: '2017-04-12',
    homeTeam: 'LA Clippers',
    awayTeam: 'Sacramento Kings',
    homeScore: 115,
    awayScore: 95,
    winner: 'LA Clippers',
    loser: 'Sacramento Kings'
  },
  {
    date: '2017-04-12',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 109,
    awayScore: 94,
    winner: 'Golden State Warriors',
    loser: 'Los Angeles Lakers'
  },
  {
    date: '2017-04-12',
    homeTeam: 'Portland Trail Blazers',
    awayTeam: 'New Orleans Pelicans',
    homeScore: 100,
    awayScore: 103,
    winner: 'New Orleans Pelicans',
    loser: 'Portland Trail Blazers'
  }
]).map(game => Map({ ...game, date: moment(game.date) }));
